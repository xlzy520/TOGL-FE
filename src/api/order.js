import base from '~/api/base';

const baseURL = '/order/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

export default {
	orderPage(data) {
		return request('', data);
	},
	// 通过订单id获取订单详情
	getDetail(ids) {
		return request('', { ids });
	},
	// 获取部门可选择工序
	getProceduresList(data) {
		return request('getProceduresList', data);
	},
	// 获取工单工序
	getProcedure(data) {
		return request('getProcedure', data);
	},
	// 为工单配置/重置工序
	addProcedure(data) {
		return request('addProcedure', data);
	},
	// 获取转入转出记录
	getTransferReport(data) {
		return request('getTransferReport', data, 'get');
	},
	// 工单发布
	release(data) {
		return request('release', data);
	},
	// 彻底完成工单 processOrderId
	completeOrder(data) {
		return request('completeOrder', data);
	},
	// 检查工人是否有工作正在进行 worker
	checkWorker(data) {
		return request('checkWorker', data, 'get');
	},
};
