import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import WorkOrderList from '@/views/WorkOrder/WorkOrderList.vue';
import Layout from '~/layout/index.vue';
// import Redirect from '~/layout/redirect.vue';
// import LayoutBlank from '~/layout/blank.vue';

import Login from '~/views/User/Login.vue';

// 静态路由页面
export const routers = [
	{
		name: 'index',
		path: '/',
		component: Layout,
		redirect: '/Login',
		meta: { title: '登录', icon: 'icon-document' },
		children: [
			{
				name: 'WorkOrderList',
				path: '/WorkOrder/List',
				component: WorkOrderList,
				meta: { title: '工单列表', icon: 'icon-svg-work-order' },
			},
			{
				name: 'Login',
				path: '/Login',
				component: Login,
				meta: { title: '登录', icon: 'icon-eleme', hidden: true },
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(), // createWebHistory
	routes: routers as RouteRecordRaw[],
});

export default router;
