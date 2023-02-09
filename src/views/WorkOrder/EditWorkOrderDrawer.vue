<template>
	<el-drawer
		v-model="drawer"
		custom-class="work-order-drawer"
		:title="workOrder.MONumber"
		:direction="direction"
		:before-close="handleClose"
		size="950px"
	>
		<div class="layout-slide">
			<div class="layout-items-center">
				<div class="">SET-01</div>
				<div class="ml-5">{{ productText }}</div>
			</div>
			<!--			<el-button type="primary" :loading="printLoading" @click="onPrint">打印</el-button>-->
		</div>
		<el-divider />
		<div class="drawer-main">
			<div class="layout-slide">
				<div class="layout-items-center">
					<div class="">工单号： </div>
					<div class="">{{ workOrder.orderNumber }}</div>
				</div>
				<div class="layout-items-center">
					<el-space>
						<el-button type="primary" @click="publish">发布</el-button>
						<el-button type="primary" @click="multiPublish">多人发布</el-button>
						<el-button type="primary" @click="done">完成工单</el-button>
						<el-button type="primary" @click="transfer">转出</el-button>
					</el-space>
				</div>
			</div>
			<pro-descriptions :column="2" :columns="columns" :detail="detail" />
			<el-divider />

			<div class="">
				<DrawerTabs v-if="drawer" :id="workOrder.processOrderId" />
			</div>
		</div>
		<PrintOrder ref="printOrderRef" />
	</el-drawer>
</template>

<script setup>
	import DrawerTabs from '~/views/WorkOrder/DrawerTabs.vue';
	import orderApi from '@/api/order';
	import { pick } from 'lodash-es';
	import { useMessage } from '~/utils/hooks';
	import PrintOrder from '~/components/PrintPage/PrintOrder.vue';

	const emits = defineEmits(['refresh']);

	const router = useRouter();

	const drawer = ref(false);
	const direction = ref('rtl');
	const handleClose = () => {
		drawer.value = false;
	};
	const workOrder = ref({});
	const productText = computed(() => {
		const { numbrer, product_code } = workOrder.value;
		return `#${numbrer}-${product_code}`;
	});

	const showDrawer = (rowData) => {
		console.log(rowData);
		drawer.value = true;
		workOrder.value = rowData;
	};

	const printOrderRef = ref(null);
	const printLoading = ref(false);
	const updateLoading = (loading) => {
		printLoading.value = loading;
	};

	const onPrint = () => {
		printOrderRef.value.print(workOrder.value);
	};

	const publish = () => {
		router.push({
			path: '/Publish',
			query: {
				id: workOrder.value.processOrderId,
			},
		});
		console.log('publish');
	};

	const multiPublish = () => {
		router.push({
			path: '/Publish/multi',
			query: {
				id: workOrder.value.processOrderId,
			},
		});
		console.log('multiPublish');
	};

	const done = () => {
		orderApi.completeOrder({ processOrderId: [workOrder.value.processOrderId] }).then((res) => {
			console.log(res);
			useMessage('完成工单成功');
			handleClose();
			emits('refresh');
		});
	};

	const transfer = () => {
		router.push({
			path: '/Turn/index',
			query: {
				id: workOrder.value.processOrderId,
			},
		});
		console.log('transfer');
	};

	const columns = [
		{ label: '订单要求数量：', prop: 'mo_qty' },
		{ label: '订单要求重量（g）：', prop: 'mo_weight' },
		{ label: '累计转入数量：', prop: 'in_quantity' },
		{ label: '累计转入重量（g）：', prop: 'in_weight' },
		{ label: '累计转出数量：', prop: 'out_quantity' },
		{ label: '累计转出重量（g）：', prop: 'out_weight' },
	];
	const detail = computed(() => {
		console.log(workOrder.value);
		return pick(
			workOrder.value,
			columns.map((item) => item.prop),
		);
	});

	defineExpose({
		showDrawer,
	});
</script>

<style lang="scss">
	.work-order-drawer {
		.el-drawer__header {
			margin-bottom: 0;
		}
	}
</style>
