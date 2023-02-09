<template>
	<div>
		<div class="mb-2">
			<pro-form
				ref="form123Ref"
				v-model="state.searchForm"
				inline
				:columns="searchFormColumns"
				@submit="submitSearch"
			/>
			<div class="layout-items-center">
				<el-button type="primary" @click="batchDownload"> 批量下载 </el-button>
				<el-upload
					class="ml-2"
					with-credentials
					:action="action"
					:headers="headers"
					accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
					:data="uploadData"
					:show-file-list="false"
					:on-success="onUploadSuccess"
				>
					<el-button type="primary"> 上传更新 </el-button>
				</el-upload>
			</div>
		</div>
		<pro-table
			v-model:current-page="pageOption.page"
			v-model:page-size="pageOption.limit"
			v-loading="state.loading"
			:data="state.tableData"
			:columns="tableColumns"
			:total="state.total"
			@load="getData"
		>
		</pro-table>
	</div>
</template>

<script setup>
	import { useMessage, useRuleRequired } from '~/utils/hooks';
	import { searchFormColumns, tableColumns } from './columns';
	import assignmentApi from '~/api/assignment';
	import fileApi from '~/api/file';
	import saveAs from 'file-saver';
	import { useLayoutStore } from '~/store/modules/layout';
	import { baseURL } from '~/utils/request';

	const action = `${baseURL}fileImport`;
	const state = reactive({
		searchForm: {},
		loading: false,
		tableData: [],
		total: 0,
	});

	const pageOption = reactive({
		page: 1,
		limit: 10,
	});
	const { getStatus } = useLayoutStore();
	const headers = {
		token: getStatus.ACCESS_TOKEN,
	};
	const uploadData = {
		type: 'assignmentTime',
	};

	const getData = () => {
		state.loading = true;
		return assignmentApi
			.workTime({
				...state.searchForm,
				...pageOption,
				sort: 'dateAdded',
				order: 'DESC',
			})
			.then((res) => {
				state.tableData = res.orderWork;
				state.total = Number(res.total);
			})
			.finally(() => {
				state.loading = false;
			});
	};

	const batchDownload = () => {
		const ids = state.tableData.map((item) => Number(item.assignmentTimeId));
		fileApi
			.assignmentTimeDownload({
				ids,
			})
			.then((res) => {
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

	const submitSearch = defineFormSubmit((done, isValid, invalidFields) => {
		getData().finally(() => {
			done();
		});
	});

	onMounted(() => {
		getData();
	});

	const menu = defineTableMenuColumns({
		label: '操作',
		align: 'center',
		width: '210',
	});
</script>

<style lang="scss">
	.time-picker-in-table-cell.el-date-editor.el-input,
	.time-picker-in-table-cell.el-date-editor.el-input__inner {
		width: auto;
	}
</style>
