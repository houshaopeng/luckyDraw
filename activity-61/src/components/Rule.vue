<template>
	<div class="rule">
		<div class="back_home" @click="backHome">
		  
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			backHome(){
			   location.hash = '/home';
			},
		}
	}
</script>
<style scoped lang='scss'>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	.rule{
		background:  url("../assets/rule_bg.jpg") no-repeat center;
		height:pxTorem(1334px);
		width:pxTorem(750px) ;
		background-size: 100%;
		.back_home{
		  background:  url("../assets/back_home.png") no-repeat center;
		  height:pxTorem(40px) ;
		  width:pxTorem(158px) ;
		  background-size: 100%;
		  position: absolute;
		  right:  pxTorem(30px) ;
		  top: pxTorem(30px) ;
		  
		}
	}
</style>