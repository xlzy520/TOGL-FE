<template>
	<el-tabs v-model="activeTab" v-loading="loading" class="" @tab-click="handleClick">
		<el-tab-pane label="工作安排" name="workArrange">
			<pro-table :data="tableData" :columns="tableColumns" :menu="menu">
				<!--				<template #menu>-->
				<!--					<el-button type="primary" size="small" @click="onRollback"> 回退 </el-button>-->
				<!--				</template>-->
			</pro-table>
		</el-tab-pane>
		<el-tab-pane label="转入记录" name="1">
			<pro-table :data="transferTableData" :columns="transferInTableColumns" :menu="menu">
				<template #menu="{ row }">
					<div v-if="handleInAction(row)" class="">
						<el-popconfirm title="确认验收吗？" @confirm="onReceive(row)">
							<template #reference>
								<el-button type="primary" size="small"> 验收 </el-button>
							</template>
						</el-popconfirm>
						<el-popconfirm title="确认回退吗？" @confirm="onRollback(row)">
							<template #reference>
								<el-button type="primary" size="small"> 回退 </el-button>
							</template>
						</el-popconfirm>
					</div>
				</template>
			</pro-table>
		</el-tab-pane>
		<el-tab-pane label="转出记录" name="0">
			<pro-table :data="transferTableData" :columns="transferOutTableColumns" :menu="menu">
				<template #menu="{ row }">
					<div class="">
						<el-button
							v-if="handleOutAction(row)"
							type="primary"
							size="small"
							@click="onReTurn(row)"
						>
							重发
						</el-button>
						<el-popconfirm title="确认取消吗？" @confirm="onCancel(row)">
							<template #reference>
								<el-button
									v-if="handleCancelShow(row)"
									type="primary"
									size="small"
									@click="row;"
								>
									取消
								</el-button>
							</template>
						</el-popconfirm>
					</div>
				</template>
			</pro-table>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup>
	import orderApi from '~/api/order';
	import workApi from '~/api/work';
	import { tableColumns, transferOutTableColumns, transferInTableColumns } from './columns';
	import { TransferStatusEnum } from '~/enum';
	import { useMessage } from '~/utils/hooks';

	const router = useRouter();

	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	});

	const activeTab = ref('workArrange');

	const handleClick = (tab) => {
		console.log(tab);
		// if (['1', '0'].includes(tab.paneName)) {
		// 	getRecordData();
		// }
	};

	const menu = defineTableMenuColumns({
		width: '140',
		label: '操作',
		align: 'center',
		fixed: 'right',
	});
	const handleOutAction = (row) => {
		return row.status_id === TransferStatusEnum.Return.value;
	};
	const handleInAction = (row) => {
		return row.status_id === TransferStatusEnum.WaitReceive.value;
	};
	const handleCancelShow = (row) => {
		return handleOutAction(row) || handleInAction(row);
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
		router.push({
			path: '/Turn/index',
			query: {
				id: row.processOrderId,
			},
		});
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

		console.log('onCancel', row);
	};

	const tableData = ref([]);

	const loading = ref(false);

	const recordData = ref([]);
	const transferTableData = computed(() => {
		const type = activeTab.value;
		return recordData.value.filter((v) => v.type === type);
	});

	const getRecordData = () => {
		loading.value = true;
		orderApi
			.getTransferReport({
				processOrderId: props.id,
			})
			.then((res) => {
				recordData.value = res.list;
				console.log(res);
			})
			.finally(() => {
				loading.value = false;
			});
	};
	const getWorkList = () => {
		workApi
			.getWorkList({
				processOrderID: props.id,
			})
			.then((res) => {
				tableData.value = res.orderWork;
			});
	};

	onMounted(() => {
		getWorkList();
		getRecordData();
	});
</script>

<style lang="scss" scoped></style>
