<template>
	<div v-loading="loading" class="">
		<el-drawer
			v-model="drawer"
			custom-class="work-arrange-drawer"
			:title="workArrange.MONumber"
			:direction="direction"
			:before-close="handleClose"
			size="950px"
		>
			<!--		<div class="">-->
			<!--			<el-button type="primary" @click="onCancel">返回</el-button>-->
			<!--		</div>-->
			<div class="layout-slide">
				<div class="layout-items-center">
					<div class="">{{ workArrange.customer_code }}</div>
					<div class="ml-5">{{ subtitle }}</div>
				</div>
				<el-button type="primary" @click="onPrint">打印</el-button>
			</div>
			<el-divider />
			<div class="drawer-main">
				<div class="layout-slide">
					<div class="">
						<div class="layout-items-center">
							<el-space>
								<el-button v-if="showStart" type="primary" @click="onStart">
									启动
								</el-button>
								<el-button v-else type="primary" @click="onStop">暂停</el-button>
							</el-space>
						</div>
						<div class="layout-items-center mt-2">
							<div class="">工单号： </div>
							<div class="">{{ workArrange.processOrderId }}</div>
						</div>
						<div class="layout-items-center">
							<div class="">工作安排编号： </div>
							<div class="">{{ workArrange.orderWorkNumber }}</div>
						</div>
					</div>
					<div class="grid items-start justify-end flex-wrap">
						<el-space class="">
							<!--						<el-button type="primary" @click="recycle">收回</el-button>-->
							<el-button type="primary" @click="transfer">转出</el-button>
							<el-button type="primary" @click="done">完成</el-button>
							<el-button type="primary" @click="deliver">交付</el-button>
						</el-space>
						<el-space class="mt-4">
							<!--						<el-button type="primary" @click="transferRecord">转出记录</el-button>-->
							<el-button type="primary" @click="rework">返工</el-button>
						</el-space>
					</div>
				</div>
				<el-divider />
				<drawer-tabs
					v-if="drawer"
					ref="drawerTabsRef"
					:work-arrange="workArrange"
					:department-id="props.departmentId"
					@refresh="refresh"
				/>
			</div>
			<stop-reason-dialog
				v-if="dialogVisible"
				:work-arrange="workArrange"
				@close="closeStopReason"
				@refresh="refresh"
			/>
			<rework-dialog
				v-if="reworkVisible"
				:work-arrange="workArrange"
				@close="closeRework"
				@refresh="refresh"
			/>
			<PrintOrder ref="printOrderRef" />
		</el-drawer>
	</div>
</template>

<script setup>
	import workApi from '~/api/work';
	import { getColumnsByDepartID } from './columns';
	import { useOptionsStore } from '~/store/modules/options';
	import { useMessage } from '~/utils/hooks';
	import { workArrangeChangeStatusEnum } from '~/enum';
	import DrawerTabs from './DrawerTabs.vue';
	import StopReasonDialog from './StopReasonDialog.vue';
	import ReworkDialog from './ReworkDialog.vue';
	import PrintOrder from '~/components/PrintPage/PrintOrder.vue';

	const router = useRouter();

	const props = defineProps({
		departmentId: {
			type: String,
			default: '',
		},
	});
	const emits = defineEmits(['refresh', 'reload']);

	const loading = ref(false);
	const drawerTabsRef = ref(null);

	const { fetchUserList } = useOptionsStore();

	const formColumns = ref([]);

	const drawer = ref(false);
	const direction = ref('rtl');
	const workArrange = ref({
		work_process_id: '',
	});
	const route = useRoute();
	const { status } = route.meta;
	const isPreRelease = status === '4';

	const showStart = computed(() => {
		return isPreRelease || workArrange.value.status === '3';
	});

	const subtitle = computed(() => {
		const { number, product_code } = workArrange.value;
		return `#${number} ${product_code}`;
	});

	const reloadForm = ref(false);
	const showDrawer = (rowData) => {
		console.log(rowData);
		drawer.value = true;
		reloadForm.value = true;
		workArrange.value = { ...rowData };
	};
	const refresh = () => {
		emits('refresh');
	};
	const handleClose = (needRefresh = false) => {
		drawer.value = false;
		reloadForm.value = false;
		if (needRefresh) {
			emits('reload');
		}
	};

	const printOrderRef = ref(null);
	const printLoading = ref(false);
	const updateLoading = (loading) => {
		printLoading.value = loading;
	};

	const onPrint = () => {
		printOrderRef.value.print(workArrange.value);
	};

	const onStart = () => {
		if (isPreRelease) {
			const worker = drawerTabsRef.value.state.workArrange.worker;
			if (!worker) {
				useMessage('请选择工人');
				return;
			}
		}
		loading.value = true;
		const payload = {
			orderWork: [{ processOrderWorkId: workArrange.value.processOrderWorkId }],
		};
		workApi
			.start(payload)
			.then((res) => {
				useMessage('工作安排开始成功');
				refresh();
			})
			.finally(() => {
				loading.value = false;
			});
	};
	const dialogVisible = ref(false);
	const closeStopReason = () => {
		dialogVisible.value = false;
		handleClose(true);
	};
	const onStop = () => {
		dialogVisible.value = true;
	};

	const done = () => {
		console.log('done');
		loading.value = true;
		workApi
			.changeStatus({
				processOrderWorkIds: [workArrange.value.processOrderWorkId],
				status: workArrangeChangeStatusEnum.done.value,
			})
			.then((res) => {
				useMessage('工作安排完成成功');
				refresh();
			});
	};
	const deliver = () => {
		loading.value = true;
		workApi
			.changeStatus({
				processOrderWorkIds: [workArrange.value.processOrderWorkId],
				status: workArrangeChangeStatusEnum.deliver.value,
			})
			.then((res) => {
				useMessage('工作安排交付成功');
				refresh();
			});
	};

	const transfer = () => {
		router.push({
			path: '/Turn/index',
			query: {
				id: workArrange.value.processOrderId,
			},
		});
	};

	const reworkVisible = ref(false);
	const rework = () => {
		reworkVisible.value = true;
	};
	const closeRework = () => {
		reworkVisible.value = false;
	};

	onMounted(() => {
		loading.value = true;
		formColumns.value = getColumnsByDepartID(props.departmentId, 'form');
		loading.value = false;
	});

	defineExpose({
		showDrawer,
	});
</script>

<style lang="scss">
	.work-arrange-drawer {
		.el-drawer__header {
			margin-bottom: 0;
		}
		.pro-select {
			width: 100%;
		}
	}
	.w-full.el-date-editor.el-input {
		width: 100%;
		.el-input__inner {
			//padding-left: 30px !important;
		}
	}
</style>
