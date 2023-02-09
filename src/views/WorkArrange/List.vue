<template>
	<div>
		<div class="mb-2 work-list">
			<pro-form v-model="form" inline :columns="searchFormColumns" @submit="submit" />
			<div class="layout-items-center">
				<el-button :disabled="disabledBatch" type="primary" @click="batchDeliver">
					批量交付
				</el-button>
				<el-button :disabled="disabledBatch" type="primary" @click="batchDone">
					批量完成
				</el-button>
				<el-button :disabled="disabledBatch" type="primary" @click="batchTurn">
					批量转出
				</el-button>
				<el-button :disabled="disabledBatch" type="primary" @click="batchAcceptance">
					批量验收
				</el-button>
				<el-button
					v-if="stockInPermission"
					class="ml-4"
					type="primary"
					@click="batchDownload"
				>
					批量下载
				</el-button>
				<el-upload
					v-if="stockInPermission"
					class="ml-2"
					with-credentials
					:action="action"
					accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
					:show-file-list="false"
					v-bind="uploadConfig"
					:on-success="onUploadSuccess"
				>
					<el-button type="primary"> 上传更新 </el-button>
				</el-upload>
			</div>
		</div>
		<pro-table
			v-model:current-page="pageOption.page"
			v-model:page-size="pageOption.limit"
			v-loading="loading"
			:data="tableData"
			:columns="tableColumns"
			:total="total"
			:selection="true"
			@load="load"
			@row-dblclick="rowDblclick"
			@selection-change="onSelectChange"
		>
		</pro-table>
		<!--		<scroll-tips :count="total.value" />-->
		<edit-drawer
			v-if="showDrawer"
			ref="EditDrawerRef"
			:department-id="departmentID"
			@refresh="getData"
			@reload="reload"
		/>
	</div>
</template>

<script setup>
	import { getColumnsByDepartID } from './columns';
	import EditDrawer from './EditDrawer.vue';
	import workApi from '@/api/work';
	import orderApi from '@/api/order';
	import { workArrangeChangeStatusEnum, workArrangeStatusEnum } from '~/enum';
	import { useLayoutStore } from '~/store/modules/layout';
	import { useOptionsStore } from '~/store/modules/options';
	import { useMessage } from '~/utils/hooks';
	import { baseURL } from '~/utils/request';

	const action = `${baseURL}fileImport`;
	// import ScrollTips from '~/components/ScrollTips.vue';

	const route = useRoute();
	const router = useRouter();
	watch(route, (newVal, oldVal) => {
		const { status } = newVal.meta;
		form.value.status = status;
		getData();
	});
	const { getUserInfo } = useLayoutStore();
	const { fetchDepartList } = useOptionsStore();
	const departmentID = computed(() => getUserInfo.departmentID);
	const stockInPermission = computed(() => getUserInfo.stockInPermission);

	const tableColumns = ref([]);
	const form = ref({});
	const EditDrawerRef = ref(null);
	const searchFormColumns = [
		{
			label: '工作安排编号',
			prop: 'orderWorkNumber',
			component: 'el-input',
		},
		{
			label: '产品编号',
			prop: 'product_code',
			component: 'el-input',
		},
		{
			label: '执行人',
			prop: 'worker',
			component: 'UserSelect',
		},
		{
			label: '发布时间',
			prop: 'dateAdded',
			component: 'el-date-picker',
			props: {
				format: 'YYYY/MM/DD',
				valueFormat: 'YYYY-MM-DD',
			},
		},
		{
			label: '工作安排状态',
			prop: 'status',
			component: 'pro-select',
			props: {
				placeholder: '请选择',
				data: workArrangeStatusEnum.map((value, index) => ({
					label: value.label,
					value: String(index),
				})),
			},
		},
	];

	const tableData = ref([]);

	const pageOption = reactive({
		page: 1,
		limit: 10,
	});
	const total = ref(0);
	const load = () => {
		getData();
	};

	const { getStatus } = useLayoutStore();
	const uploadConfig = reactive({
		headers: {
			token: getStatus.ACCESS_TOKEN,
		},
	});

	const selections = ref([]);
	const disabledBatch = computed(() => selections.value.length === 0);

	const batchDeliver = () => {
		console.log(selections);
		loading.value = true;
		const processOrderWorkIds = selections.value.map((item) => item.processOrderWorkId);
		workApi
			.changeStatus({
				processOrderWorkIds,
				status: workArrangeChangeStatusEnum.deliver.value,
			})
			.then((res) => {
				useMessage('批量交付成功');
				getData();
			})
			.finally(() => {
				loading.value = false;
			});
	};

	const batchDone = () => {
		// 批量完成
		loading.value = true;
		const processOrderWorkIds = selections.value.map((item) => item.processOrderWorkId);
		workApi
			.changeStatus({
				processOrderWorkIds,
				status: workArrangeChangeStatusEnum.done.value,
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

	// 批量验收
	const batchAcceptance = () => {
		const ids = selections.value.map((item) => item.processOrderWorkId).join(',');
		router.push({
			path: '/Acceptance/batch',
			query: {
				id: ids,
			},
		});
	};

	const batchDownload = () => {
		workApi.exportWork(form.value).then((res) => {
			const fileName = res.file.split('/').pop();
			saveAs(res.file, fileName);
		});
	};
	const onUploadSuccess = (response) => {
		if (response.result_code === '200') {
			useMessage('上传成功');
			getData();
		} else {
			useMessage(response.out, 'error');
		}
	};

	const loading = ref(false);
	let orderWorkNumber = $ref('');

	const getData = () => {
		loading.value = true;

		return workApi
			.getWorkList({
				...form.value,
				...pageOption,
			})
			.then((res) => {
				console.log(res);
				tableData.value = res.orderWork;
				total.value = Number(res.total);
				nextTick(() => {
					showDrawer = true;
					if (orderWorkNumber && res.orderWork.length) {
						rowDblclick(tableData.value[0]);
					}
				});
			})
			.finally(() => {
				loading.value = false;
			});
	};

	let showDrawer = $ref(false);
	let preRoutePath = $ref('');

	onMounted(() => {
		fetchDepartList();
		preRoutePath = route.path;
		tableColumns.value = getColumnsByDepartID(departmentID.value, 'table');
		// eslint-disable-next-line prefer-destructuring
		const { status } = route.meta;
		form.value.status = status;
		orderWorkNumber = route.query.orderWorkNumber;
		if (orderWorkNumber) {
			form.value.orderWorkNumber = orderWorkNumber;
		}
		getData();
	});

	const submit = (done, isValid, invalidFields) => {
		console.log(form.value, isValid, invalidFields);
		getData().finally(() => {
			done();
		});
	};

	const rowDblclick = (row) => {
		nextTick(() => {
			EditDrawerRef.value.showDrawer(row);
		});
	};

	const onSelectChange = (selection) => {
		console.log(selection);
		selections.value = selection;
	};

	const reload = () => {
		if (orderWorkNumber) {
			router.push({
				path: preRoutePath,
			});
			orderWorkNumber = '';
			form.value.orderWorkNumber = '';
		}
	};
</script>
