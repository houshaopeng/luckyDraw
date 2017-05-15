<template>
	<div id="telnumber">
		<span id="bg"></span>
		<div id="input_padding">
				<div class="l_number">
					<ul>
						<li><img src="~ASSET/img/sljr/l_tel_33.png" alt="" /></li>
						<li>|</li>
						<li><input type="number" placeholder="请输入手机号码" id="num" v-model= "telPhone"/></li>
						<li><input type="button" value="获取验证码" id="getOtp" @click= "getOtp"/></li>
					</ul>
				</div>
				<div class="l_number">
					<ul>
						<li><img src="~ASSET/img/sljr/l_te_36.png" alt="" /></li>
						<li>|</li>
						<li><input type="number" placeholder="请输入验证码" id="otp" v-model = "VerificationCode"/></li>
					</ul>
				</div>
				<!-- <span id="yz_error" v-show= "errorTitle">
					* 验证码错误
				</span> -->
				<button id="sure" @click = "sureLogin"></button>
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
import Bus from "VENDOR/js/bus.js"
	export default{
		name: "Loginbox",
		props:["childSwitchPage"],    // todo
		data(){
			return {
				telPhone : "",  		// 用户手机号码
				VerificationCode : "",  // 验证码
				//errorTitle : false,      错误信息不提示显示
				UUID: "",               // 从/login/sendLoginotp获取 uuid
			}
		},
		methods:{
			// 获取验证码
			getOtp(){
				if(this.testTelPhone()){
					this.$http.post(
						"/api/login/sendLoginotp",
						{
							"mobileNo":this.telPhone,
						},
						{
							headers: {
								"Content-Type": "application/json"
							}
						}
					).then(function(response){

						if(response.data.code == "000000"){
							this.UUID = response.data.otpInfo.otpUUID;      //获取uuid
							console.log(this.UUID)
						}else {
							console.log(response);
							Toast("网络数据错误")
						}
					},function(response){
						Toast("网络请求失败")
					})
				}
			},
			// 确认登录
			sureLogin(){
				var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
				alert(this.UUID);
				if(!rule.test(this.telPhone)) {
				    Toast("请输入正确的手机号");
				}else{
					this.$http.post(
						"http://120.27.220.25:8083/login/checkOptverify",
						{
							"mobileNo":this.telPhone,
							"otp" : this.VerificationCode,
							"otpUUID" : this.UUID,
						},
						{
							headers: {
								"Content-Type": "application/json"
							}
						}
					).then(function(response){
						console.log(response);
						if(response.data.code=="000000"){
							Bus.$emit('moveTelPhone', this.telPhone);
							this.loginshow=false;
							this.jilu=true;
						}else{
							Toast('验证码错误');
							// this.errorTitle = true;
						}
					},function(){
						Toast('网络请求错误');
					})
				}
			},
			testTelPhone(){
				var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
				if(!rule.test(this.telPhone)) {
				    Toast("请输入正确的手机号");
				}else {
					return true;
				}
			}
		},
		computed: {

		},
		filters: {

		},
		watch: {
			telPhone: function(){
				if (this.telPhone.length==11 && !/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i.test(this.telPhone)){
					Toast('请输入正确的手机号');
				}else if (this.telPhone.length>=11){
					this.telPhone = this.telPhone.substring(0,11);
				}
			},
			VerificationCode : function(){
				if(this.VerificationCode.length>=6){
					this.VerificationCode = this.VerificationCode.substring(0,6);
				}
			},
		},
		mounted: function(){

		},
		/*computed:{
			errorTitle: function(){

			}
		}*/
	}
</script>
<style lang= 'scss' scoped>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	/*Loginbox start*/
	#telnumber {
	    margin: pxTorem(200px) auto 0;
	    width: pxTorem(600px);
	    height: pxTorem(600px);
	    position: relative;
	}

	#bg {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: pxTorem(600px);
	    height: pxTorem(500px);
	    display: block;
	    background-color: #fff;
	    border-radius: pxTorem(6px);
	    opacity: .6;
	}

	#input_padding {
	    position: absolute;
	    padding: pxTorem(33px)  pxTorem(28px) pxTorem(33px) pxTorem(46px);
	    z-index: 1;
	}

	#input_padding>div {
	    width: pxTorem(500px);
	    height: pxTorem(88px);
	    background-color: #fff;
	    margin-bottom: pxTorem(7px);
	    border-radius: pxTorem(4px);
	}
	.l_number{
		margin:pxTorem(35px) 0;;
	}
	.l_number ul{
		overflow: hidden;
	}
	.l_number ul li {
	    float: left;
	    height: pxTorem(88px);
	    line-height: pxTorem(88px);
	}

	.l_number ul li:nth-of-type(1) {
	    width: pxTorem(40px);
	}

	.l_number ul li:nth-of-type(1) img {
	    display: block;
	    width: pxTorem(28px);
	    height: pxTorem(40px);
	    margin: pxTorem(20px) auto;
	}
	.l_number ul li:nth-of-type(2){
		color:#bdbdbd;
	}
	.l_number ul li:nth-of-type(3) {
		padding: 0 pxTorem(10px);
	    width: pxTorem(240px);

	}
	.l_number ul li:nth-of-type(3) input {
	    border: none;
	    height:pxTorem(68px);
	    font-size: pxTorem(30px);

	}
		::-webkit-inner-spin-button {
	     -webkit-appearance: none;    /* 清除箭头按钮 */
	}
	#otp{
		width:pxTorem(220px);
	}
	.l_number ul li:nth-of-type(4) input {
	    width: pxTorem(160px);
	    height: pxTorem(56px);
	    margin: 0 pxTorem(6px);
	    font-size: pxTorem(16px);
	    background-color: #bdbdbd;
	    color: #ffffff;
	    border: pxTorem(1px) solid #bdbdbd;
	    border-radius: pxTorem(3px);
	    text-align: center;
	}

	#yz_error {
	    font-size: pxTorem(20px);
	    position: absolute;
	    color: #f55f57;
	}

	#sure {
	    width: pxTorem(500px);
	    height: pxTorem(100px);
	    position: absolute;
	    bottom: pxTorem(-130px);
	    display: block;
	    background-image: url("~ASSET/img/sljr/sure_get.png");
	    background-size: pxTorem(500px) pxTorem(100px);
	    border: none;
	    border-radius: pxTorem(4px);

	}
	/*Loginbox end*/
</style>