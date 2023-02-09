import { ElDatePicker } from 'element-plus';
import assignmentApi from '~/api/assignment';
import { useMessage } from '~/utils/hooks';

export const searchFormColumns = [
	{
		label: '任务名称',
		prop: 'title',
		component: 'el-input',
	},
	{
		label: '工人',
		prop: 'worker',
		component: 'UserSelect',
	},
	{
		label: '任务描述',
		prop: 'description',
		component: 'el-input',
	},
	{
		label: '添加日期',
		prop: 'dateAdded',
		component: 'el-date-picker',
		props: {
			format: 'YYYY/MM/DD',
			valueFormat: 'YYYY-MM-DD',
		},
	},
];

export const tableColumns = defineTableColumns([
	{
		label: 'ID',
		prop: 'assignmentTimeId',
		width: 120,
	},
	{
		label: '工人姓名',
		prop: 'worker_name',
		width: 120,
	},
	{
		label: '任務名稱',
		prop: 'title',
		width: 240,
	},
	// {
	// 	label: '状态',
	// 	prop: 'status',
	// 	width: 80,
	// 	fixed: 'left',
	// 	render: (row) => {
	// 		const typeMap = ['', 'success', 'warning', 'danger'];
	// 		const type = typeMap[row.status];
	// 		const label = AssignmentStatusEnum[row.status];
	// 		return <ElTag type={type}>{label}</ElTag>;
	// 	},
	// },

	{
		label: '任務描述',
		prop: 'description',
		showOverflowTooltip: true,
	},
	{
		label: '开始时间',
		prop: 'date_start',
		width: 300,
		render: (row) => {
			const onEdit = () => {
				row.staerEdit = true;
			};
			const changeDate = (val) => {
				row.date_start = val;
				row.staerEdit = false;
				assignmentApi
					.changeWorkTime({
						assignmentTimeId: row.assignmentTimeId,
						date_time: val,
						type: '0', // 0:开始时间 1:结束时间
					})
					.then((res) => {
						useMessage('修改开始时间成功');
						refresh();
					});
			};
			if (row.staerEdit) {
				return (
					<ElDatePicker
						class="time-picker-in-table-cell"
						type="datetime"
						format="YYYY/MM/DD HH:mm:ss"
						valueFormat="YYYY/MM/DD HH:mm:ss"
						clearable={false}
						modelValue={row.date_start}
						onUpdate:modelValue={changeDate}
					/>
				);
			}
			return (
				<span class="cursor-pointer" ondblclick={onEdit}>
					{row.date_start ? row.date_start : '暂无时间'}
				</span>
			);
		},
	},
	{
		label: '暂停时间',
		prop: 'date_end',
		width: 300,
		render: (row) => {
			const onEdit = () => {
				row.endEdit = true;
			};
			const changeDate = (val) => {
				row.date_end = val;
				row.endEdit = false;
				assignmentApi
					.changeWorkTime({
						assignmentTimeId: row.assignmentTimeId,
						date_time: val,
						type: '1', // 0:开始时间 1:结束时间
					})
					.then((res) => {
						useMessage('修改结束时间成功');
						refresh();
					});
			};
			if (row.endEdit) {
				return (
					<ElDatePicker
						class="time-picker-in-table-cell"
						type="datetime"
						format="YYYY/MM/DD HH:mm:ss"
						valueFormat="YYYY/MM/DD HH:mm:ss"
						clearable={false}
						modelValue={row.date_end}
						onUpdate:modelValue={changeDate}
					/>
				);
			}
			return (
				<span class="cursor-pointer" ondblclick={onEdit}>
					{row.date_end ? row.date_end : '暂无时间'}
				</span>
			);
		},
	},
	{
		label: '用时',
		prop: 'total_time',
		width: 120,
	},
]);
