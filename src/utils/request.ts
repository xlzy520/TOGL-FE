import { useLayoutStore } from '~/store/modules/layout';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { ElNotification } from 'element-plus';

// 创建 axios 实例
const isDev = process.env.NODE_ENV === 'development';
export const baseDomain = isDev ? 'https://masterep.sampras.cn' : 'https://login.sanwapgnow.com';
export const baseURL = `${baseDomain}/index.php/factory-api/`;
const request = axios.create({
	// API 请求的默认前缀
	// baseURL: 'http://localhost:5000/',
	baseURL,
	timeout: 60000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: { message: string }) => {
	// loading.close();
	console.log(`err${error}`);
	ElNotification({
		title: '请求失败',
		message: error.message,
		type: 'error',
	});
	return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
	const { getStatus } = useLayoutStore();
	// loading = ElLoading.service({
	// 	lock: true,
	// 	text: 'Loading',
	// 	spinner: 'icon-loading',
	// 	background: 'rgba(0, 0, 0, 0.4)',
	// });
	const token = getStatus.ACCESS_TOKEN;
	// 如果 token 存在
	// 让每个请求携带自定义 token 请根据实际情况自行修改
	if (token) {
		config.headers['token'] = token;
	}
	return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response: AxiosResponse<IResponse>) => {
	const { data } = response;
	const { getStatus, logout } = useLayoutStore();
	// loading.close();
	if (data.result !== 'success' && data.out !== 'success') {
		let title = '请求失败';
		if (data.Code === 401) {
			if (getStatus.ACCESS_TOKEN) {
				logout();
			}
			title = '身份认证失败';
		}
		const { errList } = data;
		if (errList?.length) {
			const errMsg = errList.map((item) => item.msg).join('\n');
			ElNotification({
				title,
				message: errMsg,
				type: 'error',
			});
		} else {
			ElNotification({
				title,
				message: data.errMsg,
				type: 'error',
			});
		}

		return Promise.reject(new Error(data.errMsg || 'Error'));
	}
	return response.data;
}, errorHandler);

export default request;
