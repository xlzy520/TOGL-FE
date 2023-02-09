import { defineStore } from 'pinia';

import OptionsApi from '~/api/options';
import { decode, getLocal, setLocal } from '~/utils/tools';
import router from '~/router';
import userAPI from '~/api/user';

const { ACCESS_TOKEN } = getLocal('token');

export const useUserStore = defineStore({
	id: 'user',
	state: () => {
		return {
			// 用户信息
			userInfo: {
				name: '',
				role: [],
			},
			status: {
				isLoading: false,
				ACCESS_TOKEN: ACCESS_TOKEN || '',
			},
		};
	},
	getters: {
		getUserInfo() {
			return this.userInfo;
		},
		getStatus() {
			return this.status;
		},
	},
	actions: {
		async fetchStandardRemarks(data) {
			const res = await OptionsApi.getStandardRemarks(data);
			this.standardRemarks = res.list;
		},
		logout() {
			this.status.ACCESS_TOKEN = '';
			localStorage.removeItem('token');
			history.go(0);
		},
		setToken(token) {
			this.status.ACCESS_TOKEN = token;
			setLocal('token', this.status, 1000 * 60 * 60);
		},
		async login(param) {
			const res = await userAPI.login(param);
			this.status.ACCESS_TOKEN = res.token;
			setLocal('token', this.status);
			const { query } = router.currentRoute.value;
			router.push(typeof query.from === 'string' ? decode(query.from) : '/');
		},
		async getUser() {
			this.userInfo = await userAPI.getUser();
		},
	},
});
