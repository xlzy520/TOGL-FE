<template>
	<ElConfigProvider :locale="locale">
		<router-view />
	</ElConfigProvider>
</template>

<script setup>
	import locale from 'element-plus/lib/locale/lang/zh-cn';
	import { ElConfigProvider } from 'element-plus';

	// element-plus pro 语言包
	locale.pro = {
		form: {
			submit: '搜索',
			reset: '重置',
		},
	};
</script>

<style lang="scss"></style>
