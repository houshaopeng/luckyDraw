<template>
	<div class="activity_description">
		<div class="title"><span>活动说明</span></div>
		<p>1.绑定手机的账号才能领取奖品。</p>
		<p>2.每位用户分享给好友，好友注册成功即可在抽奖一次。</p>
		<p>3.每位用户每天抽奖次数上限为5次。</p>
		<p>4.中奖之后奖品为iPhone或者kindle电子阅读器，客服会在中奖后3个工作日内联系您。</p>
		<p>5.虚拟商品有效期为15日，请尽快登录善林金融APP使用，超出时间自动失效。</p>
		<p>6.活动最终解释权归善林金融所有。</p>
	</div>
</template>
<script>
	export default{
		name: "Rule",
		data(){
			return {

			}
		},
	}
</script>
<style lang= 'scss' scoped>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	/*rule start*/
	.activity_description {
		width: pxTorem(690px);
		padding: 0 pxTorem(30px);
	    margin-top: pxTorem(30px);
	    height: pxTorem(280px);
	}

	.activity_description .title {
	    width: pxTorem(674px);
	    height: pxTorem(14px);
	    margin: 0 auto;
	    margin-bottom: pxTorem(20px);
	    background: url("~ASSET/img/sljr/活动说明.png") no-repeat center;
	    background-size: 100%;
	    color: #fff;
	    text-align: center;
	    line-height: pxTorem(16px);
	    font-size:pxTorem(32px);
	}

	.activity_description p {
	    color: #fff;
	    font-size: pxTorem(32px);
	    margin-top: pxTorem(15px);
	    line-height:pxTorem(40px);
	}
	/*rule end*/
</style>	