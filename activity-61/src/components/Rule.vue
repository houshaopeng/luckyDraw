<template>
	<div class="rule">
		
	</div>
</template>
<style scoped lang='scss'>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	.rule{
		background:  url("../assets/rule_bg.jpg") no-repeat center;
		height:pxTorem(1218px) ;
		width:pxTorem(750px) ;
		background-size: 100%;
	}
</style>