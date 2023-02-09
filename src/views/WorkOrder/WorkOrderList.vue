<template>
	<div>
		<div class="mb-2">
			<pro-form v-model="searchForm" inline :columns="searchFormColumns" @submit="submit" />
			<div class="">
				<el-button type="primary" :disabled="disableBatch" @click="batchPublish">
					批量发布
				</el-button>
				<el-button type="primary" :disabled="disableBatch" @click="batchDone">
					批量完成
				</el-button>
				<el-button type="primary" :disabled="disableBatch" @click="batchTurn">
					批量转出
				</el-button>
				<el-popconfirm title="确认暂停吗？" @confirm="onStopAll">
					<template #reference>
						<el-button type="primary"> 一键暂停 </el-button>
					</template>
				</el-popconfirm>
				<el-popconfirm title="确认开启吗？" @confirm="onStartAll">
					<template #reference>
						<el-button type="primary"> 一键开启 </el-button>
					</template>
				</el-popconfirm>
			</div>
		</div>
		<pro-table
			v-model:current-page="pageOption.page"
			v-model:page-size="pageOption.limit"
			v-loading="loading"
			:data="tableData"
			:columns="WorkOrderTableColumns"
			:total="total"
			:selection="true"
			:row-class-name="rowClassName"
			@load="load"
			@row-dblclick="rowDblclick"
			@selection-change="onSelectChange"
		>
		</pro-table>
		<!--		<scroll-tips />-->
		<edit-work-order-drawer v-if="drawerVisible" ref="EditWorkOrderRef" @refresh="getData" />
	</div>
</template>

<script setup>
	import EditWorkOrderDrawer from './EditWorkOrderDrawer.vue';
	import OrderApi from '@/api/order';
	// import ScrollTips from '~/components/ScrollTips.vue';
	import workApi from '~/api/work';
	import orderApi from '@/api/order';
	import { searchFormColumns, WorkOrderTableColumns } from './columns';
	import { workArrangeChangeStatusEnum } from '~/enum';
	import { useMessage } from '~/utils/hooks';

	const router = useRouter();
	const searchForm = ref({
		status: 0,
	});
	const EditWorkOrderRef = ref(null);
	const batchPublish = () => {
		const ids = selections.value.map((item) => item.processOrderId).join(',');
		router.push({
			path: '/Publish',
			query: {
				id: ids,
			},
		});
		// 批量发布
	};

	const batchDone = () => {
		// 批量完成
		loading.value = true;
		const processOrderIds = selections.value.map((item) => item.processOrderId);
		orderApi
			.completeOrder({
				processOrderId: processOrderIds,
			})
			.then((res) => {
				useMessage('批量完成成功');
				getData();
			})
			.finally(() => {
				loading.value = false;
			});
	};

	const batchTurn = () => {
		const ids = selections.value.map((item) => item.processOrderId).join(',');
		// 批量转出
		router.push({
			path: '/Turn/batch',
			query: {
				id: ids,
			},
		});
	};

	const onStopAll = () => {
		workApi
			.stop({
				orderWork: 'ALL',
			})
			.then((res) => {
				useMessage('一键暂停成功');
			});
	};

	const onStartAll = () => {
		workApi
			.start({
				orderWork: 'ALL',
			})
			.then((res) => {
				useMessage('一键开启成功');
			});
	};

	const loading = ref(false);
	const getData = () => {
		loading.value = true;

		return OrderApi.orderPage({
			...searchForm.value,
			...pageOption,
		})
			.then((res) => {
				tableData.value = res.worklist;
				total.value = Number(res.total);
			})
			.finally(() => {
				loading.value = false;
				drawerVisible = true;
			});
	};

	let drawerVisible = $ref(false);

	onMounted(() => {
		getData();
	});

	const submit = (done, isValid, invalidFields) => {
		console.log(searchForm.value, isValid, invalidFields);
		getData().finally(() => {
			done();
		});
	};

	const rowClassName = ({ row }) => {
		const { receive_total, refuse_total } = row;
		if (receive_total || refuse_total) {
			return 'order-rejected';
		}
		return '';
	};

	const rowDblclick = (row) => {
		EditWorkOrderRef.value.showDrawer(row);
	};

	const tableData = ref([]);

	const pageOption = reactive({
		page: 1,
		limit: 10,
	});
	const total = ref(0);
	const load = () => {
		getData();
	};
	const selections = ref([]);
	const disableBatch = computed(() => {
		return selections.value.length === 0;
	});
	const onSelectChange = (selection) => {
		selections.value = selection;
	};
</script>

<style lang="scss">
	@mixin initial-row {
		background: rgb(239, 68, 68) !important;
		color: #fff;
	}

	@mixin rejected-row {
		@apply bg-red-100 text-gray-600;
	}
	.el-table {
		.order-rejected,
		.order-rejected .el-table-fixed-column--left {
			@include rejected-row;
		}
		.order-rejected {
			&:hover {
				@include initial-row;
				& > td {
					@include initial-row;
				}
				.el-table-fixed-column--left {
					color: inherit;
				}
			}
		}
	}
</style>
