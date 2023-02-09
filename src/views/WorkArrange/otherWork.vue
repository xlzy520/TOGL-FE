<template>
	<span>
		{{ modelValue }}
	</span>
</template>

<script>
	export default {
		name: 'OtherWork',
		props: {
			modelValue: {
				type: String,
				default: '',
			},
		},
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
