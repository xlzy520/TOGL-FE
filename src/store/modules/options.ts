// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineStore } from 'pinia';

import OptionsApi from '~/api/options';
export const useOptionsStore = defineStore({
	id: 'options',
	state: () => {
		return {
			proceduresList: [],
			departList: [],
			userList: [],
			materialList: [],
			standardRemarks: [],
		};
	},
	getters: {
		getProceduresList() {
			return this.proceduresList;
		},
		getDepartList() {
			return this.departList;
		},
		getUserList() {
			return this.userList;
		},
		getMaterialList() {
			return this.materialList;
		},
		getStandardRemarks() {
			return this.standardRemarks;
		},
	},
	actions: {
		async fetchProceduresList(data) {
			const res = await OptionsApi.procedure(data);
			this.proceduresList = res.list;
		},
		async fetchDepartList(data) {
			const res = await OptionsApi.getDepartList(data);
			this.departList = res.list;
		},
		async fetchUserList(data) {
			const res = await OptionsApi.getUserList(data);
			this.userList = res.list;
		},
		async fetchMaterialList(data) {
			const res = await OptionsApi.getMaterialList(data);
			this.materialList = res.list;
		},
		async fetchStandardRemarks(data) {
			const res = await OptionsApi.getStandardRemarks(data);
			this.standardRemarks = res.list;
		},
	},
});
