<template>
	<div class="container">
		<el-collapse-transition>
			<div v-if="newsShow" class="login_new">
				<div class="login_new_but">
					<span><img src="/assets/image/btn_hp_newss.svg" @click="newsHide" /></span>
				</div>
				<div class="login_new_ct">
					<div class="login_new_ct_li">
						<div class="login_new_icon">
							<img src="/assets/image/Icon_hp_news.svg" />
						</div>
						<b>2022.5.16</b>
						<a href="news.html"
							>Removal Notice: Service Suspension of Map Sales and Survey Data Services Counter at District Survey Office / Yuen Long.</a
						>
					</div>
					<div class="login_new_ct_li">
						<div class="login_new_icon">
							<img src="/assets/image/Icon_hp_news.svg" />
						</div>
						<b>2022.3.20</b>
						<a href="news.html">Government to sell site in Kwun Tong by public tender.</a>
					</div>
				</div>
			</div>
		</el-collapse-transition>
		<div class="login_width">
			<div class="login_width_left">
				<b>Welcome to</b>
				Public Application Portal for Temporary Occupation of Government Land
			</div>
			<div v-if="registerHide" class="login_width_right">
				<div class="login_table">
					<div class="register_title"><b>Log in</b></div>
					<div class="login_table_ct">
						<div class="login_table_title"> <img src="/assets/image/Icon_hp_account.svg" /> Account </div>
						<div class="login_table_txt">
							<el-input v-model="account" class="form-input" placeholder="Type your account name"></el-input>
						</div>
						<div class="login_table_title">
							<img src="/assets/image/Icon_hp_password.svg" /> Password
							<span><a @click="showEMAILForget">Forget Password</a></span>
						</div>
						<div class="login_table_txt">
							<el-input v-model="password" placeholder="Type your password" class="form-input" show-password></el-input>
						</div>
						<div class="login_table_but">
							<nuxt-link to="/register">
								<el-button class="register_botton_a"> Register Account </el-button>
							</nuxt-link>
							<nuxt-link to="/accountSettings">
								<a class="register_botton_but">Login</a>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div v-if="registerEMHide" class="login_width_right">
				<div class="login_table">
					<div class="register_title"><b>Forget Password</b></div>
					<div class="login_table_ct">
						<div class="login_table_tu"> Forgot your password? Enter your email below and we'll send you a password reset mail. </div>
						<div class="login_table_title"> <img src="/assets/image/Email_icon.png" /> Email </div>
						<div class="login_table_txt">
							<el-input v-model="email" class="form-input" placeholder="input account registration email"></el-input>
						</div>
						<div class="login_table_but">
							<a class="register_botton_a" @click="showEMAILForget">Back</a>
							<a href="Forget Password-WrongEmail.html" class="register_botton_but">Reset</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				password: '',
				newsShow: true,
				registerHide: true,
				registerEMHide: false,
			};
		},
		methods: {
			login() {},
			newsHide() {
				this.newsShow = false;
			},
			showEMAILForget() {
				this.registerHide = !this.registerHide;
				this.registerEMHide = !this.registerEMHide;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.container {
		.login_new {
			position: absolute;
			left: 0px;
			border-radius: 0px 0px 30px 30px;
			width: 90%;
			max-width: 660px;
			padding: 0px 20px;
			z-index: 99;
			margin: 0 auto;
			display: block;
			top: 0px;
			right: 0px;
			background-color: rgba(255, 255, 255, 0.5);
			.login_new_but {
				display: block;
				text-align: center;
				padding: 10px;
				span {
					cursor: pointer;
					display: inline-block;
				}
			}
			.login_new_ct {
				display: block;
				.login_new_ct_li {
					position: relative;
					padding-left: 40px;
					padding-bottom: 15px;
					b {
						display: block;
					}
					a {
						color: #3b5974;
						&:hover {
							color: #2ca2b9;
							text-decoration: none;
							outline: none;
						}
					}
					.login_new_icon {
						position: absolute;
						left: 0px;
						top: 2px;
					}
				}
			}
		}
		.login_width {
			display: table;
			width: 100%;
			padding: 120px 20px;
			position: relative;
			padding-top: 8%;
			z-index: 3;
			.login_width_left {
				vertical-align: bottom;
				display: table-cell;
				font-family: 'ManropeBlack';
				font-size: 46px;
				line-height: 1.2;
				padding-right: 80px;
				b {
					display: block;
					font-size: 40px;
					padding-bottom: 15px;
				}
			}
			.login_width_right {
				display: table-cell;
				width: 45%;
				.login_table {
					width: 100%;
					max-width: 580px;
					min-width: 520px;
					box-shadow: 5px 5px 6px #00000029;
					padding: 20px;
					background: #fff;
					border-radius: 15px;
					.register_title {
						display: block;
						font-size: 36px;
						background: #2ca2b9;
						color: #fff;
						padding: 5px 10px;
						text-align: center;
						border-radius: 10px;
					}
					.login_table_ct {
						padding: 30px 0px 20px;
						width: 80%;
						margin: 0px auto;
						.login_table_tu {
							padding-bottom: 25px;
						}
						.login_table_title {
							font-size: 20px;
							font-family: 'ManropeBlack';
							color: #2079a9;
							overflow: hidden;
							padding-bottom: 10px;
							img {
								float: left;
								margin-right: 10px;
								height: 26px;
							}
							span {
								float: right;
								font-size: 16px;
								text-decoration: underline;
								font-family: 'ManropeRegular';
							}
						}
						.login_table_txt {
							padding-bottom: 20px;
							.form-input {
								&::v-deep .el-input__wrapper {
									border: 1px solid #3d9dd1;
									border-radius: 10px;
									background: #ecf6fb;
									padding: 10px 15px;
									font-size: 16px;
									width: 100%;
									&::placeholder {
										color: #2079a9;
									}
								}
							}
						}
						.login_table_but {
							text-align: right;
							padding-top: 10px;
							.register_botton_a {
								color: #2ca2b9;
								background: #fff;
								border: 2px solid #2ca2b9;
								margin: 0px 5px;
								border-radius: 36px;
								font-size: 20px;
								padding: 0px 30px;
								display: inline-block;
								height: 48px;
								line-height: 44px;
							}
							.register_botton_but {
								color: #2ca2b9;
								background: #2ca2ba;
								color: #fff !important;
								cursor: pointer;
								margin: 0px 5px;
								border: 2px solid #2ca2ba;
								border-radius: 36px;
								font-weight: 600;
								font-size: 20px;
								padding: 0px 30px;
								height: 48px;
								display: inline-block;
								line-height: 42px;
							}
						}
					}
				}
			}
		}
	}
</style>
