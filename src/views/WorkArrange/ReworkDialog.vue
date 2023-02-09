<template>
	<el-dialog v-model="visible" title="提交返工信息" width="30%" :before-close="handleClose">
		<pro-form
			v-model="form"
			:columns="formColumns"
			:gutter="20"
			label-width="120px"
			:menu="menu"
			@submit="submit"
		/>
	</el-dialog>
</template>

<script setup lang="jsx">
	import workApi from '~/api/work';
	import { useMessage } from '~/utils/hooks';
	import { ReasonEnum, PriorityEnum } from '~/enum';
	import { useOptionsStore } from '~/store/modules/options';
	import orderApi from '~/api/order';
	import OtherWork from './otherWork.vue';

	const { fetchUserList } = useOptionsStore();

	const props = defineProps({
		workArrange: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['close', 'refresh']);
	const visible = true;
	const form = ref({
		stopOther: 1,
	});
	const checkWorker = (worker) => {
		orderApi.checkWorker({ worker }).then((res) => {
			const total = Number(res.total);
			const workerIndex = formColumns.value.findIndex((item) => item.prop === 'worker');
			const stopOtherIndex = formColumns.value.findIndex((item) => item.prop === 'stopOther');
			if (total > 0) {
				form.value.stopOtherCount = total;
				const stopOtherColumn = {
					label: '停止其他工作',
					prop: 'stopOther',
					component: 'el-switch',
					props: {
						activeText: '暂停',
						inactiveText: '不暂停',
						activeValue: 1,
						inactiveValue: 0,
					},
				};
				const stopOtherCountColumn = {
					label: '其他工作数量',
					prop: 'stopOtherCount',
					component: markRaw(OtherWork),
				};

				if (stopOtherIndex === -1) {
					formColumns.value.splice(
						workerIndex + 1,
						0,
						stopOtherColumn,
						stopOtherCountColumn,
					);
				} else {
					formColumns.value.splice(workerIndex + 1, 2);
				}
			} else if (stopOtherIndex !== -1) {
				formColumns.value.splice(workerIndex + 1, 2);
			}
		});
	};

	const formColumns = ref([
		{
			label: '生產部門',
			prop: 'departID',
			component: 'DepartmentSelect',
			props: {
				onChange: (val) => {
					form.value.worker = '';
					fetchUserList({ processId: val });
				},
			},
		},
		{
			label: '工人',
			prop: 'worker',
			component: 'UserSelect',
			props: {
				onChange: checkWorker,
			},
		},
		{
			label: '数量',
			prop: 'Qty',
			component: 'el-input-number',
			props: {
				class: 'w-full',
				controls: false,
				step: 1,
				min: 0,
			},
		},
		{
			label: '重量',
			prop: 'weight',
			component: 'el-input-number',
			props: {
				class: 'w-full',
				controls: false,
				step: 0.01,
				min: 0,
			},
		},
		{
			label: '優先級',
			prop: 'priority',
			component: 'pro-select',
			props: {
				data: PriorityEnum,
			},
		},
	]);

	const menu = {
		reset: false,
		submitText: '确认修改',
	};

	const handleClose = () => {
		emits('close');
	};

	const submit = defineFormSubmit((done, isValid, invalidFields) => {
		if (isValid) {
			console.log(props.workArrange);
			workApi
				.rework({
					...form.value,
					processOrderWorkID: props.workArrange.processOrderWorkId,
				})
				.then((res) => {
					useMessage('提交成功');
				})
				.finally(() => {
					done();
					emits('refresh');
					handleClose();
				});
		}
	});
</script>

<style lang="scss" scoped></style>
