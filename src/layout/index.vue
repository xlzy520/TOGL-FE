<template>
	<div class="nuxt_content" :style="{ minHeight: nuxt_height }">
		<app-header v-if="bNav"></app-header>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	import AppHeader from './components/header.vue';
	import Footer from './components/footer.vue';
	import LayoutContent from './components/content.vue';
	export default {
		components: {
			LayoutContent,
			AppHeader,
			Footer,
		},

		data() {
			return {
				bNav: true,
				nuxt_height: '',
			};
		},
		watch: {
			$route: {
				immediate: true,
				handler(route) {
					// if (/login|reg/.test(route.path) || /register|reg/.test(route.path)) {
					//   this.bNav = false;
					// } else {
					//   this.bNav = true;
					// }
				},
			},
		},
		mounted() {
			this.nuxt_height = `${document.documentElement.clientHeight}px`;
			window.addEventListener('resize', () => {
				this.nuxt_height = `${document.documentElement.clientHeight}px`;
			});
		},
	};
</script>

<style lang="scss" scoped>
	.nuxt_content {
		font-family: 'ManropeRegular', 'Helvetica Neue', Helvetica, Arial, 'Ã¤Â¿Âª Pro', 'LiHei Pro', 'STHeiti', 'Apple LiGothic Medium',
			'Ã¥Â¾Â®Ã¨Â½Â¯Ã¦Â­Â£Ã¤Â½â€œ', 'Microsoft JhengHei', sans-serif;
		background: url(/assets/image/hp_background.jpg) center center no-repeat;
		background-size: cover;
		margin: 0;
		padding: 0;
		color: #3b5974;
		font-weight: 500;
		font-size: 16px;
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
