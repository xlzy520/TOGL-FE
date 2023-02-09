<template>
	<div id="printOrder" class="">
		<div id="print" region="center" title="" style="width: 254px">
			<div class="home_info">
				<div class="print_info">
					<div class="bar_code">
						<img
							class="bar-code-img"
							:src="getBarCodeImgUrl(order)"
							style="height: 36px"
						/>
						{{ order.orderWorkNumber }}
					</div>
					<div class="order_info">
						<div class="worker_name"> {{ order.worker_name }} </div>
						<div class="product_info">
							{{ order.product_code }}
							<br />{{ order.product_name }}
						</div>

						<div class="quantity">
							{{ order.customer_code }} &nbsp; {{ order.MONumber }} &nbsp; #
							{{ order.number }}
							&nbsp;
						</div>
						<div class="quantity">订单需求数量：{{ order.quantity }}</div>
						<div class="quantity">订单需求重量：{{ order.weight }}</div>
						<div class="quantity">发出形状：{{ order.shapeIssue }}</div>
						<div class="quantity">目标形狀：{{ order.shapeTarget }}</div>
						<div class="quantity">长：{{ order.long }}mm</div>
						<div class="quantity">宽：{{ order.wide }}mm</div>
						<div class="quantity">高：{{ order.high }}mm</div>
						<div class="remark no-wrap">备注：<br />{{ order.worker_remark }}</div>
					</div>
					<div class="user_info">
						<div style="float: left">{{ getUserInfo.name }}</div>
						<div style="float: right">{{ state.now }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { localPrint } from '~/utils/print/index';
	import { useLayoutStore } from '~/store/modules/layout';
	import dayjs from 'dayjs';
	import { baseDomain } from '~/utils/request';

	const props = defineProps({
		updateLoading: {
			type: Function,
		},
	});

	const { getUserInfo } = useLayoutStore();
	console.log(getUserInfo);

	const baseBarCodeImgUrl = `${baseDomain}/barcode/barcode2/html/image.php?filetype=PNG&dpi=72&scale=1&rotation=0&font_family=Arial.ttf&font_size=0&start=NULL&code=BCGcode128&text=`;

	const state = reactive({
		workOrder: {},
		now: dayjs().format('YYYY-MM-DD HH:mm:ss'),
	});
	const getBarCodeImgUrl = (order) => {
		return `${baseBarCodeImgUrl}${order.MONumber}`;
	};

	const order = ref({});

	const print = (data) => {
		console.log(data);
		order.value = data;
		nextTick(() => {
			localPrint({
				id: 'printOrder',
			});
		});
	};

	defineExpose({
		print,
	});
</script>

<style lang="scss">
	.home_info {
		font-size: 12px;
	}
	.print_info {
		font-size: 12px;
		padding: 5px 5px 20px 5px;
	}
	img {
		max-width: 100%;
	}
	.bar-code-img {
		margin: auto;
	}
	.no-wrap {
		white-space: nowrap;
	}
	.bar_code {
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 1px solid #000;
		margin-bottom: 10px;
	}
	.worker_name {
		font-size: 16px;
		font-weight: bold;
		white-space: nowrap;
	}
	.product_info {
		margin: 20px auto;
	}
	.order_info {
		border-bottom: 1px solid #000;
	}
	.user_info {
		margin-top: 10px;
		display: inline-block;
		width: 100%;
	}
	#printOrder {
		display: none;
		.remark {
			margin-bottom: 130px;
			font-size: 16px;
		}
	}
</style>

<style lang="scss" media="print">
	@media print {
		#printOrder {
			display: block !important;
		}
	}
</style>
