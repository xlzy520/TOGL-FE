import base from '~/api/base';

const baseURL = '/arrange/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

export default {
	getDetail(data) {
		return request('detail', data, 'post');
	},
	checkOtherOrdersPrepare(data) {
		return request('checkOtherOrdersPrepare', data, 'post');
	},
};
