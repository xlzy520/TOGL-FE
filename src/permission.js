import router from './router';
import { configure, done, start } from 'nprogress';
import { decode, encode, useLocal } from '~/utils/tools';
import { useLayoutStore } from '~/store/modules/layout';
import { useUserStore } from '~/store/modules/user.js';

configure({ showSpinner: false });

const loginRoutePath = '/Login';
const defaultRoutePath = '/';
const whiteList = ['/StatusList'];

router.beforeEach(async (to, from) => {
	start();
	// const {
	// 	getMenubar,
	// 	getTags,
	//
	// 	GenerateRoutes,
	// 	concatAllowRoutes,
	// 	changeTagNavList,
	// 	addCachedViews,
	// 	changeNocacheViewStatus,
	// } = useLayoutStore();
	// const { setToken, logout, getUser, getStatus } = useUserStore();
	// // 修改页面title
	// const reg = new RegExp(/^(.+)(\s\|\s.+)$/);
	// const appTitle = import.meta.env.VITE_APP_TITLE;
	// document.title = !to.meta.title ? appTitle : appTitle.match(reg) ? appTitle.replace(reg, `${to.meta.title}$2`) : `${to.meta.title} | ${appTitle}`;
	// if (whiteList.includes(to.path)) {
	// 	done();
	// 	return;
	// }
	// // 判断当前是否在登陆页面
	// if (to.path.toLocaleLowerCase() === loginRoutePath.toLocaleLowerCase()) {
	// 	done();
	// 	console.log(getStatus);
	// 	if (getStatus.ACCESS_TOKEN) return typeof to.query.from === 'string' ? decode(to.query.from) : defaultRoutePath;
	// 	return;
	// }
	// // 判断是否登录
	// if (!getStatus.ACCESS_TOKEN) {
	// 	return loginRoutePath + (to.fullPath ? `?from=${encode(to.fullPath)}` : '');
	// }
	//
	// // 前端检查token是否失效
	// useLocal('token')
	// 	.then((d) => setToken(d.ACCESS_TOKEN))
	// 	.catch(() => logout());
	//
	// // 判断是否还没添加过路由
	// if (getMenubar.menuList.length === 0) {
	// 	await GenerateRoutes();
	// 	await getUser();
	// 	for (let i = 0; i < getMenubar.menuList.length; i++) {
	// 		router.addRoute(getMenubar.menuList[i]);
	// 	}
	// 	concatAllowRoutes();
	// 	return to.fullPath;
	// }
	// changeTagNavList(to); // 切换导航，记录打开的导航(标签页)
	//
	// // 离开当前页面时是否需要添加当前页面缓存
	// !new RegExp(/^\/redirect\//).test(from.path) &&
	// 	getTags.tagsList.some((v) => v.name === from.name) &&
	// 	!getTags.cachedViews.includes(from.name) &&
	// 	!getTags.isNocacheView &&
	// 	addCachedViews({ name: from.name, noCache: from.meta.noCache });
	//
	// // 缓存重置
	// changeNocacheViewStatus(false);
});

router.afterEach(() => {
	done();
});
