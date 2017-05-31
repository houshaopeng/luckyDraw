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
		background:  url("http://marketactivity.oss-cn-shanghai.aliyuncs.com/%E5%85%AD%E4%B8%80/201705/362f6fdd63884cb999568020d458d86brule_bg.jpg") no-repeat center;
		height:pxTorem(1334px);
		width:pxTorem(750px) ;
		background-size: 100%;
		.back_home{
		  background:  url("../assets/canvassing2.png") no-repeat center;
		  height:pxTorem(60px) ;
		  width:pxTorem(240px) ;
		  background-size: 100%;
		  position: absolute;
		  left:50%;
		  margin-left:  pxTorem(-120px) ;
		  top: pxTorem(1080px) ;
		}
	}
</style>