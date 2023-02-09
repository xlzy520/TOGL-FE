import request from '~/api/base';

export default {
	// 工作时间文件下载
	workTImeDownload(data) {
		return request('/export/workTIme', data);
	},
	// 指派任务文件下载
	assignmentTimeDownload(data) {
		return request('export/assignmentTime', data);
	},
	// 工作安排，工作时间 文件上传更新
	// file,
	// type: 无/空  = 工作安排更新
	// workTime = 工作时间更新
	// assignmentTime = 指派任务时间更新
	fileImport(data) {
		return request('fileImport', data);
	},
};
