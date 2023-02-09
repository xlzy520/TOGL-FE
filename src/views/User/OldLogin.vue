<template>
	<div class="w-screen h-screen login-page">
		<div class="layout-login" @keyup="enterSubmit">
			<div class="login-card">
				<div class="heading text-center">
					<div class="logo"> </div>
					<h3 class="text-2xl font-semibold text-center mb-6">系统登陆</h3>
				</div>
				<el-form ref="ruleForm" label-position="right" label-width="80px" :model="form" size="large" :rules="rules">
					<el-form-item class="mb-6 -ml-20" prop="name">
						<el-input v-model="form.name" placeholder="请输入用户名" prefix-icon="icon-user" />
					</el-form-item>
					<el-form-item class="mb-6 -ml-20" prop="pwd">
						<el-input v-model="form.pwd" placeholder="请输入密码" prefix-icon="icon-lock" show-password />
					</el-form-item>
					<el-form-item class="mb-6 -ml-20">
						<el-button :loading="loading" type="primary" size="large" class="w-full" @click="onSubmit"> 登录 </el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { reactive, ref } from 'vue';
	import { useUserStore } from '~/store/modules/user';
	import { ElNotification } from 'element-plus';
	import { validate } from '~/utils/formExtend';

	const loading = ref(false);
	const { login } = useUserStore();
	const form = reactive({
		name: 'admin',
		pwd: 'admin111',
	});
	const ruleForm = ref(null);
	const enterSubmit = (e) => {
		if (e.key === 'Enter') {
			onSubmit();
		}
	};
	const onSubmit = async () => {
		const { name, pwd } = form;
		if (!(await validate(ruleForm))) return;
		loading.value = true;
		login({ username: name, password: pwd })
			.then((res) => {
				ElNotification({
					title: '欢迎',
					message: '欢迎回来',
					type: 'success',
				});
			})
			.finally(() => {
				loading.value = false;
			});
	};
	const rules = reactive({
		name: [
			{
				validator: (rule, value, callback) => {
					if (!value) {
						return callback(new Error('用户名不能为空'));
					}
					callback();
				},
				trigger: 'blur',
			},
		],
		pwd: [
			{
				validator: (rule, value, callback) => {
					if (!value) {
						return callback(new Error('密码不能为空'));
					}
					callback();
				},
				trigger: 'blur',
			},
		],
	});
</script>

<style lang="scss">
	.login-page {
		&:before {
			background-color: #f4fdff;
			bottom: 0;
			content: '';
			left: 0;
			opacity: 0.97;
			position: fixed;
			right: 0;
			top: 0;
		}
		.el-input__inner {
			padding-left: 40px !important;
		}
	}
	.layout-login {
		width: 520px;
		margin: 0 auto;
		margin-top: 24vh;
	}
	.login-card {
		transform: scale(1.2);
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 4px 24px rgb(0 0 0 / 10%);
		margin: 30px auto 60px;
		max-width: 520px;
		padding: 50px 100px 50px;
		position: relative;
	}
	.heading .logo {
		margin-bottom: 20px;
		img {
			display: unset;
		}
	}

	.heading .tagline {
		color: #333;
		font-size: 16px;
		margin-bottom: 44px;
	}
</style>
