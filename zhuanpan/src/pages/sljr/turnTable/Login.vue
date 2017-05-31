<template>
	<div id="login">
		<LoginHeader ></LoginHeader>
		<Loginbox></Loginbox>
	</div>
</template>
<script>
import LoginHeader from "../_components/LoginHeader.vue"
import Loginbox from "../_components/Loginbox.vue"
	export default{
		name:"login",
		data(){
			return {
				lotteryPage: false,  // todo
				userName:"未登录",
			}
		},
		components:{
			LoginHeader,
			Loginbox
		}
	}
</script>
<style lang= 'scss' scoped>
	$font-size-base:75px;
	@function pxTorem($px) {
	    @return $px / $font-size-base * 1rem;
	}
	/*登录页面 start*/
	#login{
		width: pxTorem(750px);
		height: pxTorem(1334px);
		background: url("~ASSET/img/sljr/beijing_03.png") no-repeat center;
		background-size: 100% 100%; 
	}
	/*登录页面 end*/
</style>