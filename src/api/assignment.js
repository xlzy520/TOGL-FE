import base from '~/api/base';

const baseURL = '/assignment/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

export default {
	// 获取指派任务列表
	getAssignmentList(data) {
		return request('', data);
	},
	// 新增指派工作
	add(data) {
		return request('add', data);
	},
	// 修改
	update(data) {
		return request('update', data);
	},
	// 修改指派任务状态
	changeStatus(data) {
		return request('changeStatus', data);
	},
	// 获取指派任务工作时间列表
	workTime(data) {
		return request('workTime', data);
	},
	changeWorkTime(data) {
		return request('changeWorkTime', data);
	},
};
