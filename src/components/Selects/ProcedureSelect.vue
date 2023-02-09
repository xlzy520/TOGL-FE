<template>
	<pro-select :config="config" :model-value="props.select" :data="data" @input="input" />
</template>

<script setup>
	import { useOptionsStore } from '~/store/modules/options';

	const optionsStore = useOptionsStore();
	const { fetchProceduresList } = optionsStore;
	const props = defineProps({
		select: {
			type: String,
			default: '',
		},
		// 如果被父级控制，那么由父级统一请求
		control: {
			type: Boolean,
			default: false,
		},
	});
	const emits = defineEmits(['input']);
	const config = { value: 'id', label: 'title' };
	const input = (value) => {
		emits('input', value);
	};
	const data = computed(() => {
		return optionsStore.getProceduresList;
	});
	console.log(data);
	onMounted(() => {
		if (!props.control) {
			fetchProceduresList();
		}
	});
</script>

<style lang="scss" scoped></style>
