export const PriorityEnum = [
	{
		value: '0',
		label: '一般',
	},
	{
		value: '1',
		label: '優先',
	},
	{
		value: '2',
		label: '緊急',
	},
	{
		value: '3',
		label: '馬上',
	},
];

export interface WorkArrangeStatus {
	type: string;
	color?: string;
	label: string;
	name: string;
	routeSort: number;
	status: string;
	icon: string;
}

// 路由才使用routeSort，需要交换已完成和已交付的位置
export const workArrangeStatusEnum: WorkArrangeStatus[] = [
	{
		type: '',
		label: '进行中',
		name: 'processing',
		routeSort: 0,
		status: '0',
		icon: 'icon-svg-processing',
	},
	{
		type: 'success',
		label: '已完成',
		name: 'success',
		routeSort: 2,
		status: '1',
		icon: 'icon-svg-done',
	},
	{
		type: '',
		color: '#FCD34D',
		label: '已交付',
		name: 'delivered',
		routeSort: 1,
		status: '2',
		icon: 'icon-svg-delivered',
	},
	{
		type: 'danger',
		label: '已暂停',
		name: 'pause',
		routeSort: 3,
		status: '3',
		icon: 'icon-svg-pause',
	},
	{
		type: 'info',
		label: '预发布',
		name: 'prerelease',
		routeSort: 4,
		status: '4',
		icon: 'icon-svg-prerelease',
	},
	{
		type: 'warning',
		label: '已验收',
		name: 'acceptance',
		routeSort: 5,
		status: '5',
		icon: 'icon-svg-acceptance',
	},
];

export const SortRouteWorkArrangeStatusEnum: WorkArrangeStatus[] = [...workArrangeStatusEnum].sort(
	(a, b) => a.routeSort - b.routeSort,
);

export const reworkStatusEnum = ['正常单', '返工'];

export const ReasonEnum = ['其他', '请假', '调用', '下班', '放假', '交付'];

// 改变工作安排状态
export const workArrangeChangeStatusEnum = {
	done: {
		value: 1,
		label: '完成',
	},
	deliver: {
		value: 2,
		label: '交付',
	},
};

export const TransferStatusEnum = {
	WaitReceive: {
		value: 0,
		label: '待接收',
	},
	Done: {
		value: 9,
		label: '已完成',
	},
	Return: {
		value: 2,
		label: '已退回',
	},
	Cancel: {
		value: 4,
		label: '已取消',
	},
};
export const AssignmentStatusEnum = ['开始', '完成', '交付', '暂停'];
