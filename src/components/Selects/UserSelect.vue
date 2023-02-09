<template>
	<pro-select
		:config="config"
		filterable
		:model-value="props.select"
		:data="data"
		remote
		:remote-method="search"
		@input="input"
	/>
</template>

<script setup>
	import { useOptionsStore } from '~/store/modules/options';

	const optionsStore = useOptionsStore();
	const { fetchUserList } = optionsStore;
	const props = defineProps({
		select: {
			type: String,
			default: '',
		},
		control: {
			type: Boolean,
			default: false,
		},
		data: {
			type: Array,
			default: null,
		},
	});
	const emits = defineEmits(['input']);
	const config = { value: 'id', label: 'title' };
	const input = (value) => {
		emits('input', value);
	};
	const data = computed(() => {
		const { data } = props;
		return data || optionsStore.getUserList;
	});
	const search = (val) => {
		if (val) {
			fetchUserList({ worker_name: val });
		}
	};
	onMounted(() => {
		if (!props.control) {
			fetchUserList();
		}
	});
</script>

<style lang="scss" scoped></style>
