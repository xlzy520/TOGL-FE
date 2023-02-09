<template>
	<pro-select :config="config" :model-value="props.select" :data="data" @input="input" />
</template>

<script setup>
	import { useOptionsStore } from '~/store/modules/options';

	const optionsStore = useOptionsStore();
	const { fetchStandardRemarks } = optionsStore;
	const props = defineProps({
		select: {
			type: String,
			default: '',
		},
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
		return optionsStore.getStandardRemarks;
	});
	onMounted(() => {
		if (!props.control) {
			fetchStandardRemarks();
		}
	});
</script>

<style lang="scss" scoped></style>
