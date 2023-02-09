import base from '~/api/base';

const baseURL = '/';
const request = (url, ...arg) => base(baseURL + url, ...arg);

export default {
	login(data) {
		return Promise.resolve({
			token: '123456',
		});
		return request('login', data);
	},
	getUser(data) {
		return Promise.resolve({
			name: 'admin',
			role: ['admin'],
		});
		return request('user', data);
	},
};
