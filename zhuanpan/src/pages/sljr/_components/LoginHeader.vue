<template>
	<div class="rotary">
		<div class="title">
			<div class="login"><span>欢迎您,<span id="telLogin">{{childUserName}}</span></span></div>
			<div class="winning_record" @click="prizeShow"></div>
		</div>
	</div>
</template>
<script>
import Bus from "VENDOR/js/bus.js"
	export default{
		name: "lottery",
		props:["prizeTogg"],
		data(){
			return {
				childUserName:"请登录",
				childPrizeTogg:"",
			}
		},
		methods:{
			// 初始化页面
			initPage(){
				this.childPrizeTogg=this.prizeTogg;
				console.log(this.childPrizeTogg);
				if(sessionStorage.getItem('userInfo')){
					var userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
					this.childUserName = userInfo.userName;
				}
			},
			prizeShow(){
				console.log("prizeShow")
				this.childPrizeTogg = true;
				Bus.$emit('prizeChild', this.childPrizeTogg); 
				
				console.log(this.childPrizeTogg);
			},
		},
		created() { 
			
		},
		mounted(){
			// Bus.$on('moveTelPhone',(a)=>{
			// 	console.log(a);
			//     this.childUserName=a;

			// })
			
			this.initPage();
		} 
	}
</script>
<style lang= 'scss' scoped>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	/*login start*/
	.rotary .title{
		overflow: hidden;
		padding-top: pxTorem(25px);
		font-size: pxTorem(30px);
	}
	.rotary .title .login {
	    float: left;
	    margin-left: pxTorem(15px);
	    margin-top: pxTorem(5px);
	    color: #f44336;
	}
	.rotary .title .winning_record {
	    float: right;
	    width: pxTorem(137px);
	    height: pxTorem(43px);
	    margin-right: pxTorem(22px);
	    background: url("~ASSET/img/sljr/中奖纪录.png") no-repeat center;
	    background-size: 100%;
	}
	/*login end*/
</style>	