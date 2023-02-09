<template>
	<el-dialog
		v-model="visible"
		title="确认暂停工作安排吗？"
		width="30%"
		:before-close="handleClose"
	>
		<pro-form
			v-model="form"
			:columns="formColumns"
			:gutter="20"
			label-width="100px"
			:menu="menu"
			@submit="submit"
		/>
	</el-dialog>
</template>

<script setup>
	import workApi from '~/api/work';
	import { useMessage } from '~/utils/hooks';
	import { ReasonEnum } from '~/enum';

	const props = defineProps({
		workArrange: {
			type: Object,
			default: () => ({}),
		},
	});

	const emits = defineEmits(['close', 'refresh']);
	const visible = true;

	const formColumns = ref([
		{
			label: '理由',
			prop: 'reason',
			component: 'pro-select',
			props: {
				data: ReasonEnum.map((v, i) => ({ label: v, value: i })),
			},
		},
		{
			label: '备注',
			prop: 'remark',
			component: 'el-input',
			props: {
				type: 'textarea',
				rows: 3,
			},
		},
	]);
	const form = ref({
		reason: 0,
	});

	const menu = {
		reset: false,
		submitText: '确认修改',
	};

	const handleClose = () => {
		emits('close');
	};

	const submit = defineFormSubmit((done, isValid, invalidFields) => {
		console.log(form.value, isValid, invalidFields);
		if (isValid) {
			workApi
				.stop({
					orderWork: [
						{ ...form.value, processOrderWorkId: props.workArrange.processOrderWorkId },
					],
				})
				.then((res) => {
					useMessage('工作安排暂停成功');
					emits('refresh');
				})
				.finally(() => {
					done();
					handleClose();
				});
		}
	});
</script>

<style lang="scss" scoped></style>
