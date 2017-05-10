<template>
<div id="sljr">
	<div id="login">
		<Login :userName = "userName"></Login>
		<Loginbox></Loginbox>
	</div>
	<div id="lottery" v-show="lotteryPage">
		<Login></Login>
		<Lottery></Lottery>
		<Rule></Rule> 
		<!--中奖弹出层-->
		<div class="drown">
			<div class="content">
				<div class="close" @click = "closeWinningPage"><img src="~ASSET/img/sljr/关闭按钮.png" alt="" /></div>
				<div class="tip">
					<span>恭喜您！</span>
					<p>抽到5000元理财金!</p>
				</div>
				<div class="receive"></div>
			</div>
		</div>
		<!--未中奖弹出层-->
		<div class="drowf">
			<div class="content">
				<div class="close"><img src="~ASSET/img/sljr/关闭按钮.png" alt="" /></div>
				<div class="tip">
					<span>差一点就中奖了！</span>
					<p>分享给好友增加抽奖机会吧!</p>
				</div>
			</div>
		</div>
	</div>
	<div class="prize_box">
		
	</div>
</div>
	
</template>
<script>
import Login from "./_components/Login.vue"
import Lottery from "./_components/Lottery.vue"
import Rule from "./_components/Rule.vue"
import Loginbox from "./_components/Loginbox.vue"
	export default{
		name: "Sljr",
		data(){
			return {
				lotteryPage: false,  // todo

				userName:"未登录",
			}
		},
		methods:{
			// 关闭中奖页面
			closeWinningPage(){

			}
		},
		components:{
			Login,
			Lottery,
			Rule,
			Loginbox,
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
	/*活动页面 start*/
	#lottery{
		width: pxTorem(750px);
		height: pxTorem(1713px);
		background: url("~ASSET/img/sljr/beijing_03.png") no-repeat center;
		background-size: 100% 100%; 
	}
	.rotary .container .dial {
	    width: 100%;
	    height: pxTorem(343px);
	    position: relative;
	}
	.drowf {
	    display: none;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    background: rgba(0, 0, 0, 0.3);
	}

	.drown {
	    display: none;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    background: rgba(0, 0, 0, 0.3);
	}

	.drown .content {
	    width: pxTorem(600px);
	    height: pxTorem(755px);
	    background: url("~ASSET/img/sljr/背景图案.png")no-repeat center;
	    background-size: 100%;
	    position: absolute;
	    left: 50%;
	    margin: pxTorem(200px) 0 0 pxTorem(-300px);
	    text-align: center;
	}
	.drown .content .close{
		width: pxTorem(60px);
	    height: pxTorem(60px);
	    position: absolute;
	    top: pxTorem(80px);
	    right: pxTorem(20px);
	    font-size: pxTorem(30px);
	    line-height: pxTorem(30px);
	    color: white;
	    text-align: center;
	}
	.drown .content .close img{
		width: pxTorem(60px);
	    height: pxTorem(60px);
	}
	.drown .content .tip {
	    margin-top: pxTorem(340px);
	    font-weight: 600;
	}
	.drown .content .tip span{
		font-size: pxTorem(40px);
	}
	.drown .content .tip p {
	    font-size: pxTorem(42px);
	    margin-top: pxTorem(10px);
	}

	.drown .content .receive {
	    width: pxTorem(360px);
	    height: pxTorem(98px);
	    background: url("~ASSET/img/sljr/马上领取.png")no-repeat center;
	    background-size: 100%;
	    margin: pxTorem(100px) auto 0;
	}

	.drowf .content {
	    width: pxTorem(600px);
	    height: pxTorem(700px);
	    background: url("~ASSET/img/sljr/未中奖背景图案.png")no-repeat center;
	    background-size: 100%;
	    position: absolute;
	    left: 50%;
	    margin: pxTorem(220px) 0 0 pxTorem(-300px);
	    text-align: center;
	}
	.drowf .content .close{
	    width: pxTorem(60px);
	    height: pxTorem(60px);
	    position: absolute;
	    top: pxTorem(20px);
	    right: pxTorem(20px);
	    font-size: pxTorem(30px);
	    line-height: pxTorem(30px);
	    color: white;
	    text-align: center;
	}
	.drowf .content .close img{
		width: pxTorem(60px);
	    height: pxTorem(60px);
	}
	.drowf .content .tip {
	    margin-top: pxTorem(340px);
	    font-weight: 600;
	}
	.drowf .content .tip span{
		font-size: pxTorem(40px);
	}
	.drowf .content .tip p {
	    font-size: pxTorem(42px);
	    margin-top: pxTorem(10px);
	}
	/*活动页面 end*/
</style>	