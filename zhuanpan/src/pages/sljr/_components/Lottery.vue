<template>
	<div class="rotary">
		<div class="container">
			<div class="dial">
				<div class="bigrotary"></div>
				<div class="hand">
					<img src="~ASSET/img/sljr/转盘中心_03.png" alt="">
				</div>
			</div>
		</div>
		<div :class="['button',{'buttonHave':buttonTogg,'buttonOver':!buttonTogg}]" @click = "startGame"></div>
	</div>
</template>
<script>
import Lottery from "VENDOR/js/dial.js"
import Bus from "VENDOR/js/bus.js"
import { Toast } from 'mint-ui';
	export default{
		name: "lottery",
		props:["luckPrize"],
		data(){
			return {
				priceIndex : -1,
				lotteryTimes:20,
			}
		},
		methods:{
			startGame(){
				this.lotteryTimes--;
				console.log(this.lotteryTimes);
				if(this.lotteryTimes>=0){
					let that = this;              // 插件原因 this指向不是vue  实例
					let pointer = document.getElementsByClassName('hand')[0];
					let lottery = new Lottery(pointer, { // eslint-disable-line
						speed: 60, // 每帧速度
						areaNumber: 8 // 奖区数量
					})
					lottery.draw();                  
					that.priceIndex = Math.round(Math.random() * 7);
					lottery.setResult(that.priceIndex);
					lottery.on('end', function () {
						Bus.$emit("prizeType",that.priceIndex);
					})
				}else{
					Toast("抽奖次数已用完");
					return false;
				}
			}
		},
		computed:{
			buttonTogg:function(){
				if(this.lotteryTimes<0){
					return false;
				}else {
					return true;
				}
			}
		},
		mounted: function(){

		}
	}
</script>
<style lang= 'scss' scoped>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	/*lottery start*/
	.rotary{
		overflow: hidden;
	}
	.rotary .container .dial {
	    width: 100%;
	    height: pxTorem(343px);
	    position: relative;
	}
	.rotary .container .bigrotary {
	    background: url("~ASSET/img/sljr/大转盘.png") no-repeat center;
	    background-size: 100%;
	    width:pxTorem(602px);
	    height: pxTorem(604px);
	    position: absolute;
	    top: pxTorem(265px);
	    left: 50%;
	    margin-left: pxTorem(-301px);
	}
	.container .hand{
		width: pxTorem(116px);
		height: pxTorem(167px);
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: pxTorem(300px);
		margin-left: pxTorem(-58px);
	}
	.container .hand  img{
	    width: pxTorem(116px);
	    height: pxTorem(167px);
	    /*animation: myfirst ease 2s infinite;*/
	}
	.rotary .button{
	    width: pxTorem(374px);
	    height: pxTorem(113px);
	  
	    margin: pxTorem(560px) auto 0;
	}
	.rotary  .buttonHave{
		background: url("~ASSET/img/sljr/开始抽奖.png") no-repeat center;
		background-size: 100%;
	}
	.rotary .buttonOver{
		background: url("~ASSET/img/sljr/机会已用完.png") no-repeat center;
		background-size: 100%;
	}
	/*lottery end*/
</style>	