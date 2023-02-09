import base from '~/api/base';

const baseURL = '/work/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

export default {
	getWorkList(data) {
		return request('', data);
	},
	// 修改工作安排
	editWork(data) {
		return request('edit', data);
	},
	// 修改工作安排（用这个）
	updateWork(data) {
		return request('update', data);
	},
	// 通过id获取工作详情
	getDetail(id) {
		return request('', { ids: id });
	},
	checkOtherOrdersPrepare(data) {
		return request('checkOtherOrdersPrepare', data, 'post');
	},
	// 交付验收
	deliver(data) {
		return request('deliver', data, 'post');
	},
	// 返工
	rework(data) {
		return request('rework', data);
	},
	// 停止工作安排
	stop(data) {
		return request('stop', data, 'post');
	},
	// 开始工作安排
	start(data) {
		return request('start', data, 'post');
	},
	// 修改订单状态
	changeStatus(data) {
		return request('changeStatus', data, 'post');
	},
	// 工单/工作安排转出
	turn(data) {
		return request('turn', data, 'post');
	},
	// 转出记录 - 完成  "ids":[1,2,3] 数组内容是 转出记录 ID process_order_out_id
	turnReceive(data) {
		return request('turnReceive', data, 'post');
	},
	// 转出记录 - 回退 参数同上
	turnRefuse(data) {
		return request('turnRefuse', data, 'post');
	},
	// 转出记录 - 取消 参数同上
	turnCancel(data) {
		return request('turnCancel', data, 'post');
	},
	// 获取工作安排开始、暂停操作记录（工作时间列表）
	workTime(data) {
		return request('workTime', data);
	},
	// 工作时间统计
	workTimeReport(data) {
		return request('workTimeReport', data);
	},
	// 修改工作时间
	changeWorkTime(data) {
		return request('changeWorkTime', data);
	},
	// 工作安排文件下载
	exportWork(data) {
		return base('export', data);
	},
};
