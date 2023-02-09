<template>
	<el-tabs v-model="state.activeTab" v-loading="loading" class="" @tab-click="handleClick">
		<el-tab-pane label="发出信息" name="send">
			<pro-form
				v-model="state.workArrange"
				:columns="state.sendFormColumns"
				:gutter="20"
				label-width="100px"
				:menu="state.formMenu"
				@submit="submit"
			/>
		</el-tab-pane>
		<el-tab-pane label="交付信息" name="deliver" lazy>
			<pro-form
				v-model="state.workArrange"
				:columns="state.deliverFormColumns"
				:gutter="20"
				label-width="100px"
				:menu="state.formMenu"
				@submit="submit"
			/>
		</el-tab-pane>
		<el-tab-pane label="转出记录" name="transferOut" lazy>
			<pro-table :data="transferTableData" :columns="transferOutTableColumns" :menu="menu">
				<template #menu="{ row }">
					<div v-if="handleOutAction(row)" class="">
						<el-button type="primary" size="small" @click="onReTurn(row)">
							重发
						</el-button>
						<el-button type="primary" size="small" @click="onCancel(row)">
							取消
						</el-button>
					</div>
				</template>
			</pro-table>
		</el-tab-pane>
		<el-tab-pane label="时间记录" name="time" lazy>
			<pro-table :data="state.timeTableData" :columns="timeColumns"> </pro-table>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup>
	import { transferOutTableColumns } from '../WorkOrder/columns';

	import orderApi from '~/api/order';
	import workApi from '~/api/work';
	import { getColumnsByDepartID, timeColumns } from './columns';
	import { TransferStatusEnum } from '~/enum';
	import { useMessage } from '~/utils/hooks';
	import { useOptionsStore } from '~/store/modules/options';

	const props = defineProps({
		workArrange: {
			type: Object,
			default: () => ({}),
		},
		departmentId: {
			type: String,
			default: '',
		},
	});

	const state = reactive({
		activeTab: 'send',
		deliverFormColumns: [],
		sendFormColumns: [],
		formMenu: {
			reset: false,
			submitText: '确认修改',
		},
		timeTableData: [],
		workArrange: {},
	});

	const emits = defineEmits(['refresh', 'close']);

	const submit = defineFormSubmit((done, isValid, invalidFields) => {
		const { workArrange } = state;
		if (isValid) {
			workApi
				.updateWork({
					...workArrange,
					process_order_work_id: workArrange.processOrderWorkId,
				})
				.then((res) => {
					useMessage('修改成功');
					emits('refresh');
				})
				.finally(() => {
					done();
				});
		}
	});

	const sss = (val, s) => {
		console.log('sss', val, s);
	};

	const getWorkTimeList = () => {
		workApi
			.workTime({
				processOrderID: props.workArrange.processOrderID,
			})
			.then((res) => {
				state.timeTableData = res.orderWork;
			});
	};

	const handleClick = (tab) => {
		const { paneName } = tab;
		if (paneName === 'time') {
			getWorkTimeList();
		} else if (paneName === 'transferOut') {
			getRecordData();
		}
	};

	const menu = defineTableMenuColumns({
		width: '140',
		label: '操作',
		align: 'center',
		fixed: 'right',
	});
	const recordData = ref([]);
	const transferTableData = computed(() => {
		// 转出记录
		return recordData.value.filter((v) => v.type === '0');
	});

	const getRecordData = () => {
		loading.value = true;
		orderApi
			.getTransferReport({
				processOrderId: props.workArrange.processOrderId,
			})
			.then((res) => {
				recordData.value = res.list;
				console.log(res);
			})
			.finally(() => {
				loading.value = false;
			});
	};
	const handleOutAction = (row) => {
		return row.status_id === TransferStatusEnum.Return.value;
	};

	const onRollback = (row) => {
		// 点了【回退】，那么状态就是已回退，这个时候两个按钮也都不需要了。
		console.log('onRollback');
		workApi
			.turnRefuse({
				ids: [row.process_order_out_id],
			})
			.then((res) => {
				useMessage('回退成功');
				getRecordData();
			});
	};

	const onReceive = (row) => {
		// 如果点了【接收】，那转移记录就是已接收，这个时候两个按钮都不需要了，这个转移记录算完成了。
		workApi
			.turnReceive({
				ids: [row.process_order_out_id],
			})
			.then((res) => {
				useMessage('接收成功');
				getRecordData();
			});

		console.log('onVerified');
	};

	const onReTurn = (row) => {
		// 重新转出】点击后，出现这个工单的转出界面。重新转出时带出这个转移记录的id。
		console.log('onReTurn', row);
	};

	const onCancel = (row) => {
		// 【取消】点击后，这个工单变成已取消状态。
		workApi
			.turnCancel({
				ids: [row.process_order_out_id],
			})
			.then((res) => {
				useMessage('取消成功');
				getRecordData();
			});
	};

	const loading = ref(false);

	const { fetchUserList } = useOptionsStore();

	const getFormColumns = () => {
		state.sendFormColumns = getColumnsByDepartID(props.departmentId, 'form', 'send');
		state.deliverFormColumns = getColumnsByDepartID(props.departmentId, 'form', 'deliver');
		const { sendFormColumns } = state;
		if (sendFormColumns.length && sendFormColumns[0].prop === 'worker_process_id') {
			const worker_process_id = props.workArrange.worker_process_id;
			if (worker_process_id) {
				fetchUserList({ processId: worker_process_id });
			}
			sendFormColumns[0].props = {
				...sendFormColumns[0].props,
				onChange: (val) => {
					console.log(val);
					props.workArrange.worker = '';
					fetchUserList({ processId: val });
				},
			};
		}
	};

	defineExpose({
		state,
	});

	onMounted(() => {
		getFormColumns();
		state.workArrange = props.workArrange;
	});
</script>

<style lang="scss">
	.time-picker-in-table-cell {
		&.el-date-editor {
			&.el-input,
			&.el-input__inner {
				width: 180px;
				//width: 80%;
			}
		}
	}
</style>
