<template>
	<div class="scroll-tips" :class="props.count ? '' : 'is-empty'">
		Tips: Windows电脑按紧 <em>Shift</em> 按钮 + 鼠标滚轮可以左右滑动
	</div>
</template>

<script setup>
	const props = defineProps({
		count: {
			type: Number,
			default: 0,
		},
	});
</script>

<style lang="scss">
	.scroll-tips {
		position: relative;
		bottom: 45px;
		color: blueviolet;
		font-size: 12px;
		&.is-empty {
			bottom: 0px;
		}
	}
</style>
