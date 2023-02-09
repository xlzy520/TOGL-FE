import { workArrangeStatusEnum } from '~/enum';
import router from '~/router';
// import { ElButton } from 'element-plus';

export const searchFormColumns = defineFormColumns([
	{
		label: '工单号',
		prop: 'orderNumber',
		component: 'el-input',
	},
	{
		label: '产品编号',
		prop: 'product_code',
		component: 'el-input',
	},
	{
		label: '首次转入时间',
		prop: 'transferInTime',
		component: 'el-date-picker',
		props: {
			format: 'YYYY/MM/DD',
			valueFormat: 'YYYY-MM-DD',
		},
	},
	{
		label: '状态',
		prop: 'status',
		component: 'pro-select',
		props: {
			placeholder: '请选择',
			value: 0,
			data: [
				{
					label: '工单',
					value: 0,
				},
				{
					label: '历史工单',
					value: 1,
				},
			],
		},
	},
]);

export const WorkOrderTableColumns = defineTableColumns([
	{
		label: 'MO单号',
		prop: 'MONumber',
		width: '100',
		fixed: 'left',
	},
	{
		label: '客户',
		prop: 'custmoer_code',
	},
	{
		label: '序号',
		prop: 'numbrer',
		width: 60,
	},
	{
		label: '产品名称',
		prop: 'product_code',
		width: 150,
	},
	{
		label: '工单号',
		prop: 'orderNumber',
		width: 150,
	},
	{
		label: '转入时间',
		prop: 'transferInTime',
		width: 150,
	},
	{
		label: '订单要求数量',
		prop: 'mo_qty',
		width: 150,
	},
	// {
	// 	label: '实际要求数量',
	// 	prop: 'actual_quantity',
	// 	width: 150,
	// },
	{
		label: '累计转入重量',
		prop: 'in_weight',
		width: 120,
	},
	{
		label: '累计转入数量',
		prop: 'in_quantity',
		width: 120,
	},
	{
		label: '累计转出重量',
		prop: 'out_weight',
		width: 120,
	},
	{
		label: '累计转出数量',
		prop: 'out_quantity',
		width: 120,
	},
	{
		label: '累计发布数量',
		prop: 'release_quantity',
		width: 150,
	},
	{
		label: '累计交付数量',
		prop: 'QuantityDelivered',
		width: 150,
	},
	// {
	// 	label: '优先级',
	// 	prop: 'priority',
	// 	width: 150,
	// },

	// {
	// 	label: 'Name',
	// 	prop: 'name',
	// 	render: (row) => {
	// 		return <span>{row.address}</span>;
	// 	},
	// },
]);

export const tableColumns = defineTableColumns([
	// {
	// 	label: 'MO单号',
	// 	prop: 'MO',
	// 	width: '150',
	// 	fixed: 'left',
	// },
	{
		label: '工作安排编码',
		prop: 'orderWorkNumber',
		// width: 150,
		fixed: 'left',
		render: (row) => {
			const onToWorkOrder = () => {
				router.push(`/WorkArrange/List?orderWorkNumber=${row.orderWorkNumber}`);
			};
			return (
				<a
					type="link"
					className="cursor-pointer text-blue-500 hover:text-blue-700"
					onClick={onToWorkOrder}
				>
					{row.orderWorkNumber}
				</a>
			);
		},
	},
	{
		label: '产品编码',
		prop: 'product_code',
		width: 150,
	},
	// {
	// 	label: '关联工作安排',
	// 	prop: 'WorkOrder',
	// 	width: 150,
	// },
	{
		label: '发布数量',
		prop: 'quantity',
		width: 100,
	},
	{
		label: '发布重量',
		prop: 'weight',
		width: 100,
	},
	{
		label: '执行人',
		prop: 'worker_name',
		width: 100,
	},
	{
		label: '发布时间',
		prop: 'dateAdded',
		width: 160,
	},
	{
		label: '状态',
		width: 100,
		render: (row) => {
			return workArrangeStatusEnum[row.status].label;
		},
	},
]);

export const transferInTableColumns = ref([
	{
		label: '转入部门',
		prop: 'processName',
	},
	// {
	// 	label: '关联工作安排',
	// 	prop: 'workNum',
	// 	width: '150',
	// },
	{
		label: '转入數量',
		prop: 'quantity',
		width: 120,
	},
	{
		label: '转入重量（g）',
		prop: 'weight',
	},
	{
		label: '转入时间',
		prop: 'transferOutTime',
	},
	// {
	// 	label: '转移操作人',
	// 	prop: 'user',
	// 	width: 150,
	// },
	{
		label: '狀態',
		prop: 'status',
		width: 120,
	},
	// {
	// 	label: '退回日期',
	// 	prop: 'RollbackTime',
	// 	width: 150,
	// },
	// {
	// 	label: '退回操作員',
	// 	prop: 'man',
	// 	width: 150,
	// },
	// {
	// 	label: '退回備註',
	// 	prop: 'remarks',
	// 	width: 150,
	// },
]);

export const transferOutTableColumns = ref([
	{
		label: '转出部门',
		prop: 'receiveName',
	},
	// {
	// 	label: 'MO',
	// 	prop: 'processOrderId',
	// 	width: '80',
	// 	fixed: 'left',
	// },
	// {
	// 	label: '产品编码',
	// 	prop: 'product_code',
	// 	width: '150',
	// },
	// {
	// 	label: '关联工作安排',
	// 	prop: 'workNum',
	// 	width: '150',
	// },
	{
		label: '转出數量',
		prop: 'quantity',
	},
	{
		label: '转出重量（g）',
		prop: 'weight',
	},
	{
		label: '转出时间',
		prop: 'transferOutTime',
	},
	// {
	// 	label: '转移操作人',
	// 	prop: 'user',
	// 	width: 150,
	// },
	{
		label: '狀態',
		prop: 'status',
		width: 120,
	},
	// {
	// 	label: '退回日期',
	// 	prop: 'RollbackTime',
	// 	width: 150,
	// },
	// {
	// 	label: '退回操作員',
	// 	prop: 'man',
	// 	width: 150,
	// },
	// {
	// 	label: '退回備註',
	// 	prop: 'remarks',
	// 	width: 150,
	// },
]);
