import base from '~/api/base';

const baseURL = '/order/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

const basicRequest = (url, ...arg) => base(`/basic/${url}`, ...arg);

export default {
	orderPage(data) {
		return request('', data, 'post');
	},
	// 获取部门可选择工序
	getProceduresList(data) {
		return request('getProceduresList', data);
	},
	// 获取工单工序
	getProcedure(data) {
		return request('getProcedure', data);
	},
	// 获取工序列表
	procedure(data) {
		return basicRequest('procedure', data, 'get');
	},
	// 为工单配置/重置工序
	addProcedure(data) {
		return request('addProcedure', data);
	},
	getDepartList(data) {
		return basicRequest('department', data);
	},
	// 11.获取工人列表
	getUserList(data) {
		return basicRequest('worker', data);
	},
	// 9.获取材料列表
	getMaterialList(data) {
		return basicRequest('material', data, 'get');
	},
	getStandardRemarks(data) {
		return basicRequest('standardRemarks', data);
	},
};
