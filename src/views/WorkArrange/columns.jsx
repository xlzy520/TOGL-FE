import { PriorityEnum, reworkStatusEnum, workArrangeStatusEnum } from '~/enum';
import { ElTag, ElDatePicker } from 'element-plus';
import workApi from '~/api/work';
import { useMessage } from '~/utils/hooks';

export const DepartArray = ['切粒部', '成型部', '打磨部', '打孔部', '抛光部', '串选部', '转打孔部'];
export const DepartIDArray = ['3', '4', '5', '6', '9', '10', '暂无'];

// sortMap 规则: 根据索引对应上面不同的部门，填写的数字就是排序号，不填就不显示

export const tableColumns = defineTableColumns([
	// {
	// 	label: '工作安排ID',
	// 	prop: 'process_order_work_id',
	// 	width: '100',
	// 	fixed: 'left',
	// },
	{
		label: 'MO单号',
		prop: 'MONumber',
		width: 100,
		fixed: 'left',
		sortMap: [1, 1, 1, 1, 1, 1, 1],
	},
	{
		label: '状态',
		prop: 'status',
		width: 80,
		fixed: 'left',
		sortMap: [19, 21, 21, 21, 21, 21, 21],
		render: (row) => {
			const item = workArrangeStatusEnum[row.status];
			return (
				<ElTag effect="dark" type={item.type} color={item.color ?? null}>
					{item.label}
				</ElTag>
			);
		},
	},
	{
		label: '客户编码',
		prop: 'customer_code',
		width: 100,
		sortMap: [2, 2, 2, 2, 2, 2, 2],
	},
	{
		label: '序号',
		// label: '产品在MO中的序号',
		prop: 'number',
		width: 60,
		sortMap: [3, 3, 3, 3, 3, 3, 3],
	},
	{
		label: '产品编号',
		prop: 'product_code',
		width: 120,
		sortMap: [4, 4, 4, 4, 4, 4, 4],
	},
	{
		label: '工作安排编号',
		prop: 'orderWorkNumber',
		width: 120,
		sortMap: [5, 5, 5, 5, 5, 5, 5],
	},
	{
		label: '工人名称',
		prop: 'worker_name',
		width: 100,
		sortMap: [6, 6, 6, 6, 6, 6, 6],
	},

	{
		label: '工序名称',
		prop: 'procedure_title',
		width: 80,
		sortMap: [7, 7, 7, 7, 7, 7, 7],
	},
	{
		label: '优先级',
		prop: 'priority',
		width: 80,
		sortMap: [8, 8, 8, 8, 8, 8, 8],
		render: (row) => {
			return PriorityEnum[row.priority].label;
		},
	},
	{
		label: '发布时间',
		prop: 'dateAdded',
		width: 100,
		sortMap: [9, 9, 9, 9, 9, 9, 9],
	},
	{
		label: '发布数量',
		prop: 'quantity',
		width: 80,
		sortMap: [10, 10, 10, 10, 10, 10, 10],
	},
	{
		label: '发布重量',
		prop: 'weight',
		width: 80,
		sortMap: [11, 11, 11, 11, 11, 11, 11],
	},
	{
		label: '交付数量',
		prop: 'restore_qty',
		width: 80,
		sortMap: [12, 12, 12, 12, 12, 12, 12],
	},
	{
		label: '交付重量',
		prop: 'restore_weight',
		width: 80,
		sortMap: [13, 13, 13, 13, 13, 13, 13],
	},
	{
		label: '次品数量',
		prop: 'inferior_quantity',
		width: 80,
		sortMap: [16, 14, 14, 14, 14, 14, 14],
	},
	{
		label: '次品重量',
		prop: 'inferior_weight',
		width: 80,
		sortMap: [17, 15, 15, 15, 15, 15, 15],
	},
	{
		label: '废品数量',
		prop: 'waste_quantity',
		width: 80,
		sortMap: ['', 16, 16, 16, 16, 16, 16],
	},
	{
		label: '废品重量',
		prop: 'waste_weight',
		width: 80,
		sortMap: ['', 17, 17, 17, 17, 17, 17],
	},
	{
		label: '退粒数量',
		prop: 'turn_quantity',
		width: 100,
		sortMap: ['', 18, 18, 18, 18, 18, 18],
	},
	{
		label: '退粒重量',
		prop: 'turn_weight',
		width: 80,
		sortMap: ['', 19, 19, 19, 19, 19, 19],
	},
	{
		label: '是否返工',
		prop: 'rework',
		width: 80,
		sortMap: [18, 20, 20, 20, 20, 20, 20],
		render: (row) => {
			return reworkStatusEnum[row.rework];
		},
	},

	{
		label: '退回原料重量',
		prop: 'return_material_weight',
		width: 80,
		sortMap: [14, '', '', '', '', '', ''],
	},
	{
		label: '边料重量',
		prop: 'leftover_weight',
		width: 80,
		sortMap: [15, '', '', '', '', '', ''],
	},
]);

// belong: deliver 属于交付信息, send 属于发出信息
export const formColumns = defineFormColumns([
	{
		label: '执行人部门',
		prop: 'worker_process_id',
		component: 'DepartmentSelect',
		props: {
			control: true,
		},
		span: 12,
		sortMap: [0, 0, 0, 0, 0, 0, 0],
	},
	{
		label: '执行人',
		prop: 'worker',
		props: {
			control: true,
		},
		component: 'UserSelect',
		span: 12,
		sortMap: [1, 1, 1, 1, 1, 1, 1],
	},
	{
		label: '发布数量',
		prop: 'quantity',
		component: 'el-input',
		span: 12,
		sortMap: [2, 2, 2, 2, 2, 2, 2],
	},
	{
		label: '发布重量',
		prop: 'weight',
		component: 'el-input',
		span: 12,
		sortMap: [3, 3, 3, 3, 3, 3, 3],
	},
	{
		label: '优先级',
		prop: 'priority',
		component: 'pro-select',
		props: {
			data: PriorityEnum,
		},
		span: 12,
		sortMap: [9, 9, 4, 4, 4, 4, 4],
	},
	{
		label: '工序名称',
		prop: 'procedure_title',
		component: 'el-input',
		span: 12,
		sortMap: [10, 10, 5, 5, 5, 5, 5],
	},
	{
		label: '发布时间',
		prop: 'dateAdded',
		component: 'el-date-picker',
		props: {
			format: 'YYYY/MM/DD',
			valueFormat: 'YYYY-MM-DD',
			class: 'w-full',
		},
		span: 12,
		sortMap: [11, 11, 6, 6, 6, 6, 6],
	},
	{
		label: '发布备注',
		prop: 'worker_remark',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [12, 12, 7, 7, 7, 7, 7],
	},

	{
		label: '交付数量',
		prop: 'restore_qty',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [13, 13, 8, 8, 8, 8, 8],
	},
	{
		label: '交付重量',
		prop: 'restore_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [14, 14, 9, 9, 9, 9, 9],
	},
	{
		label: '次品数量',
		prop: 'inferior_quantity',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [17, 15, 10, 10, 10, 10, 10],
	},
	{
		label: '次品重量',
		prop: 'inferior_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [18, 16, 11, 11, 11, 11, 11],
	},
	{
		label: '废品数量',
		prop: 'waste_quantity',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', 17, 12, 12, 12, 12, 12],
	},
	{
		label: '废品重量',
		prop: 'waste_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', 18, 13, 13, 13, 13, 13],
	},
	{
		label: '退粒数量',
		prop: 'turn_quantity',
		component: 'el-input',
		span: 12,
		sortMap: ['', 19, 14, 14, 14, 14, 14],
	},
	{
		label: '退粒重量',
		prop: 'turn_weight',
		component: 'el-input',
		span: 12,
		sortMap: ['', 20, 15, 15, 15, 15, 15],
	},
	{
		label: '验收备注',
		prop: 'deliver_remark',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [19, 21, 16, 16, 21, 16, 16],
	},
	{
		label: '退回原料重量',
		prop: 'return_material_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [15, '', '', '', '', '', ''],
	},
	{
		label: '边料重量',
		prop: 'leftover_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: [16, '', '', '', '', '', ''],
	},
	{
		label: '发出形狀',
		prop: 'shapeIssue',
		component: 'el-input',
		span: 12,
		sortMap: [4, 4, '', '', '', '', ''],
	},
	{
		label: '目标形狀',
		prop: 'shapeTarget',
		component: 'el-input',
		span: 12,
		sortMap: [5, 5, '', '', '', '', ''],
	},
	{
		label: '长',
		prop: 'long',
		component: 'el-input',
		span: 12,
		sortMap: [6, 6, '', '', '', '', ''],
	},
	{
		label: '宽',
		prop: 'wide',
		component: 'el-input',
		span: 12,
		sortMap: [7, 7, '', '', '', '', ''],
	},
	{
		label: '高',
		prop: 'high',
		component: 'el-input',
		span: 12,
		sortMap: [8, 8, '', '', '', '', ''],
	},
	{
		label: '打孔次品数量',
		prop: 'dri_defective_qty',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', '', '', '', 16, '', ''],
	},
	{
		label: '打孔次品重量',
		prop: 'dri_defective_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', '', '', '', 17, '', ''],
	},
	{
		label: '入库数量',
		prop: 'stock_qty',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', '', '', '', 18, '', ''],
	},
	{
		label: '入库重量',
		prop: 'stock_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', '', '', '', 19, '', ''],
	},
	{
		label: '每10粒重量',
		prop: 'ten_weight',
		component: 'el-input',
		span: 12,
		belong: 'deliver',
		sortMap: ['', '', '', '', 20, '', ''],
	},

	// {
	// 	label: '材料',
	// 	prop: 'material',
	// 	component: 'MaterialSelect',
	// 	span: 12,
	// },
	// {
	// 	label: '',
	// 	prop: 'el-divider',
	// 	labelWidth: '1px',
	// 	component: 'el-divider',
	// 	span: 24,
	// },
	// {
	// 	label: '工艺',
	// 	prop: 'procedure',
	// 	component: 'ProcedureSelect',
	// 	span: 12,
	// },
	// {
	// 	label: '收回形状',
	// 	prop: '312',
	// 	component: 'el-select',
	// 	span: 12,
	// },
	// {
	// 	label: '备注',
	// 	prop: 'remarks',
	// 	component: 'el-input',
	// 	props: {
	// 		type: 'textarea',
	// 		rows: 3,
	// 	},
	// 	span: 24,
	// },
]);

/**
 * 根据部门和类型获取显示且排序后的列表
 * @param departID DepartIDArray
 * @param type table | form
 * @param belong [deliver | send] 属于交付信息还是发出信息
 * @return {FormColumn<any>[]|*[]}
 */
export const getColumnsByDepartID = (departID, type, belong = 'deliver') => {
	const isTable = type === 'table';
	const columns = isTable ? tableColumns : formColumns;
	let departIndex = DepartIDArray.findIndex((d) => d === departID);
	if (departIndex === -1) {
		departIndex = 5; // 如果没有找到，那么就默认用串选部门的配置
	}
	const showColumns = columns.filter((column) => {
		if (!isTable) {
			if (belong === 'deliver') {
				return column.sortMap[departIndex] !== '' && column.belong === belong;
			} else {
				return column.sortMap[departIndex] !== '' && !column.belong;
			}
		}
		return column.sortMap[departIndex] !== '';
	});
	const sortShowColumns = showColumns.sort(
		(a, b) => a.sortMap[departIndex] - b.sortMap[departIndex],
	);
	return sortShowColumns;
};

export const timeColumns = defineTableColumns([
	{
		label: '工作安排编号',
		prop: 'orderWorkNumber',
		width: 180,
	},
	{
		label: '开始时间',
		prop: 'date_start',
		width: 220,
		render: (row) => {
			const onEdit = () => {
				row.staerEdit = true;
			};
			const changeDate = (val) => {
				row.date_start = val;
				row.staerEdit = false;
				workApi
					.changeWorkTime({
						processOrderWorkTimeId: row.processOrderWorkTimeId,
						date_time: val,
						type: '0', // 0:开始时间 1:结束时间
					})
					.then((res) => {
						useMessage('修改开始时间成功');
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
		width: 220,
		render: (row) => {
			const onEdit = () => {
				row.endEdit = true;
			};
			const changeDate = (val) => {
				row.date_end = val;
				row.endEdit = false;
				workApi
					.changeWorkTime({
						processOrderWorkTimeId: row.processOrderWorkTimeId,
						date_time: val,
						type: '1', // 0:开始时间 1:结束时间
					})
					.then((res) => {
						useMessage('修改结束时间成功');
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
	{
		label: '暂停原因',
		prop: 'reason',
		showOverflowTooltip: true,
		// width: 100,
	},
]);
