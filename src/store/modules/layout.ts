import { defineStore } from 'pinia';

import type { ILayout, IMenubar, IMenubarList, ISetting, ITags, ITagsList } from '~/type/store/layout';
import { IMenubarStatus } from '~/type/store/layout';
import router, { routers } from '~/router/index';
import { getLocal } from '~/utils/tools';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const setting = getLocal<ISetting>('setting');

export const useLayoutStore = defineStore({
	id: 'layout',
	state: (): ILayout => ({
		menubar: {
			status: document.body.offsetWidth < 768 ? IMenubarStatus.PHN : IMenubarStatus.PCE,
			menuList: [],
			isPhone: document.body.offsetWidth < 768,
		},
		// 标签栏
		tags: {
			tagsList: [],
			cachedViews: [],
			isNocacheView: false,
		},
		setting: {
			theme: setting.theme !== undefined ? setting.theme : 0,
			showTags: setting.showTags !== undefined ? setting.showTags : true,
			color: {
				primary: setting.color !== undefined ? setting.color.primary : '#409eff',
			},
			usePinyinSearch: setting.usePinyinSearch !== undefined ? setting.usePinyinSearch : false,
			mode: setting.mode || 'vertical',
		},
	}),
	getters: {
		getMenubar(): IMenubar {
			return this.menubar;
		},
		getTags(): ITags {
			return this.tags;
		},
		getSetting(): ISetting {
			return this.setting;
		},
	},
	actions: {
		changeCollapsed(): void {
			this.menubar.status = this.menubar.isPhone
				? this.menubar.status === IMenubarStatus.PHN
					? IMenubarStatus.PHE
					: IMenubarStatus.PHN
				: this.menubar.status === IMenubarStatus.PCN
				? IMenubarStatus.PCE
				: IMenubarStatus.PCN;
		},
		changeDeviceWidth(): void {
			this.menubar.isPhone = document.body.offsetWidth < 768;
			this.menubar.status = this.menubar.isPhone ? IMenubarStatus.PHN : IMenubarStatus.PCE;
		},
		// 切换导航，记录打开的导航
		changeTagNavList(cRouter: RouteLocationNormalizedLoaded): void {
			if (!this.setting.showTags) return; // 判断是否开启多标签页
			// if(cRouter.meta.hidden && !cRouter.meta.activeMenu) return // 隐藏的菜单如果不是子菜单则不添加到标签
			if (new RegExp('^/redirect').test(cRouter.path)) return;
			const index = this.tags.tagsList.findIndex((v) => v.path === cRouter.path);
			this.tags.tagsList.forEach((v) => (v.isActive = false));
			// 判断页面是否打开过
			if (index !== -1) {
				this.tags.tagsList[index].isActive = true;
				return;
			}
			const tagsList: ITagsList = {
				name: cRouter.name as string,
				title: cRouter.meta.title as string,
				path: cRouter.path,
				isActive: true,
			};
			this.tags.tagsList.push(tagsList);
		},
		removeTagNav(obj: { tagsList: ITagsList; cPath: string }): void {
			const index = this.tags.tagsList.findIndex((v) => v.path === obj.tagsList.path);
			if (this.tags.tagsList[index].path === obj.cPath) {
				this.tags.tagsList.splice(index, 1);
				const i = index === this.tags.tagsList.length ? index - 1 : index;
				this.tags.tagsList[i].isActive = true;
				this.removeCachedViews({ name: obj.tagsList.name, index });
				router.push({ path: this.tags.tagsList[i].path });
			} else {
				this.tags.tagsList.splice(index, 1);
				this.removeCachedViews({ name: obj.tagsList.name, index });
			}
		},
		removeOtherTagNav(tagsList: ITagsList): void {
			const index = this.tags.tagsList.findIndex((v) => v.path === tagsList.path);
			this.tags.tagsList.splice(index + 1);
			this.tags.tagsList.splice(0, index);
			this.tags.cachedViews.splice(index + 1);
			this.tags.cachedViews.splice(0, index);
			router.push({ path: tagsList.path });
		},
		removeAllTagNav(): void {
			this.tags.tagsList.splice(0);
			this.tags.cachedViews.splice(0);
			router.push({ path: '/redirect/' });
		},
		// 添加缓存页面
		addCachedViews(obj: { name: string; noCache: boolean }): void {
			if (!this.setting.showTags) return; // 判断是否开启多标签页
			if (obj.noCache || this.tags.cachedViews.includes(obj.name)) return;
			this.tags.cachedViews.push(obj.name);
		},
		// 删除缓存页面
		removeCachedViews(obj: { name: string; index: number }): void {
			// 判断标签页是否还有该页面
			if (this.tags.tagsList.map((v) => v.name).includes(obj.name)) return;
			this.tags.cachedViews.splice(obj.index, 1);
		},
		// 删除所有缓存页面并刷新当前页面
		removeAllCachedViews() {
			this.tags.cachedViews.splice(0);
			this.refreshViews();
		},
		// 刷新页面，默认刷新当前页面
		refreshViews(type: 'push' | 'replace' = 'replace', path = router.currentRoute.value.fullPath, name = router.currentRoute.value.name) {
			this.changeNocacheViewStatus(true);
			// 删除页面的缓存
			const index = this.tags.cachedViews.findIndex((v) => v === name);
			index !== -1 && this.tags.cachedViews.splice(index, 1);
			if (type === 'push') {
				router.push(`/redirect${path}`);
			} else {
				router.replace(`/redirect${path}`);
			}
		},
		changeNocacheViewStatus(isNoCache: boolean) {
			this.tags.isNocacheView = isNoCache;
		},

		setRoutes(data: Array<IMenubarList>): void {
			this.menubar.menuList = data;
		},
		concatAllowRoutes(): void {
			routers.reverse().forEach((v) => this.menubar.menuList.unshift(v));
		},
		// 修改主题
		changeTheme(num?: number): void {
			if (num === this.setting.theme) return;
			if (typeof num !== 'number') num = this.setting.theme;
			this.setting.theme = num;
			localStorage.setItem('setting', JSON.stringify(this.setting));
		},
		// 修改主题色
		changeThemeColor(color: string): void {
			this.setting.color.primary = color;
			localStorage.setItem('setting', JSON.stringify(this.setting));
		},
		changeTagsSetting(showTags: boolean): void {
			this.setting.showTags = showTags;
			localStorage.setItem('setting', JSON.stringify(this.setting));

			if (showTags) {
				const index = this.tags.tagsList.findIndex((v) => v.path === router.currentRoute.value.path);
				if (index !== -1) {
					this.tags.tagsList.forEach((v) => (v.isActive = false));
					this.tags.tagsList[index].isActive = true;
				} else {
					this.changeTagNavList(router.currentRoute.value);
				}
			}
		},
		changePinSearchSetting(showPinyinSearch: boolean): void {
			this.setting.usePinyinSearch = showPinyinSearch;
			localStorage.setItem('setting', JSON.stringify(this.setting));
		},

		changemenubarMode(mode: 'horizontal' | 'vertical'): void {
			this.setting.mode = mode;
			localStorage.setItem('setting', JSON.stringify(this.setting));
		},

		async GenerateRoutes(): Promise<void> {
			// generatorDynamicRouter(data);
		},
	},
});
