<template>
<div id="sljr">
	<div id="lottery">
		<LoginHeader :prizeTogg="prizeTogg"></LoginHeader>
		<Lottery :luckPrize="luckPrize"></Lottery>
		<Rule></Rule> 
		<!--中奖弹出层-->
		<div class="drown" v-show="drowTogg">
			<div class="content">
				<div class="arrow">
					
				</div>
				<div class="close" @click="closePage()">
					<img src="~ASSET/img/sljr/关闭按钮.png" alt="" />
				</div>
				<div class="tip">
					<span>恭喜您！</span>
					<p>抽到{{prizeName}}!</p>
				</div>
				<div class="receive"></div>
			</div>
		</div>
		<!--未中奖弹出层-->
		<div class="drowf" v-show="drowfTogg">
			<div class="content">
				<div class="close" @click="closePage()"><img src="~ASSET/img/sljr/关闭按钮.png" alt="" /></div>
				<div class="tip">
					<span>差一点就中奖了！</span>
					<p>分享给好友增加抽奖机会吧!</p>
				</div>
			</div>
		</div>
		<!-- 礼品展示页面 -->
		<div class="prize_box" v-show="prizeTogg">
			<div class="close" @click="closePage()">
				<span>&times;</span>
			</div>
			<div class="prize_content">
				<p class="tit"><span>中奖时间</span>|<span>获得奖品</span></p>
				<div class="prize_list" id="wrapper">
					<ul >
						<li v-for="item in prizeArr" >
							<span class="prize_time">{{item.prizeTime | timeFormat}}</span>
							<span class="prize_good">{{item.prizeGood}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>
<script>
import LoginHeader from "../_components/LoginHeader.vue"
import Lottery from "../_components/Lottery.vue"
import Rule from "../_components/Rule.vue"
import Bus from "VENDOR/js/bus.js"
import IScroll from 'VENDOR/js/iscroll.js'
	export default{
		name: "Sljr",
		data(){
			return {
				drowTogg:false,
				drowfTogg:false,
				prizeTogg:false,
				luckPrize : ["5000元理财金","未中奖" ,"20000元理财金","电子书阅读器","未中奖" ,"50000元理财金","苹果手机一部","未中奖"] ,
				userName:"未登录",
				prizeName:"",
				prizeArr:[],
			}
		},
		methods:{
			initPage(){
				Bus.$on('prizeType',(a)=>{
				    this.prizeName=a;
				    if(this.prizeName==1 || this.prizeName==4 || this.prizeName==7){
				    	this.drowfTogg=true;
				    }else{
				    	this.drowTogg=true;
				    	this.prizeName = this.luckPrize[this.prizeName];
				    	this.prizeArr.push({prizeTime: new Date().getTime(),prizeGood:this.prizeName});
				    }
				});
				Bus.$on('prizeChild',(a)=>{
				    this.prizeTogg=a;
				});
				// 滚动中间列表
				this.scroll = new IScroll('#wrapper', {
		            scrollbars: true
		        });
			},
			// 关闭中奖页面
			closePage(val){
				this.drowTogg=false;
				this.drowfTogg=false;
				this.prizeTogg=false;
			},
			
		},
		// 时间格式过滤器
		filters:{
			timeFormat:function(timeStamp){
				var oDate=new Date(timeStamp);
				return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
			}
		},
		updated:function(){
			setTimeout(() => {
                this.scroll.refresh();
            }, 0);
		},
		created:function(){
			setTimeout(()=>{
				this.scroll.refresh();
			},0)
			
		},
		components:{
			LoginHeader,
			Lottery,
			Rule,
		},
		mounted:function(){
			this.initPage();
		}
	}
</script>
<style lang= 'scss' scoped>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
	
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
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    background: rgba(0, 0, 0, 0.3);
	}

	.drown {
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	    background: rgba(0, 0, 0, 0.6);
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
	.drown .content .arrow{
		width: pxTorem(100px);
		height: pxTorem(225px);
		position: absolute;
		background:  url("~ASSET/img/sljr/arrow.png")no-repeat center;
		background-size: 100%;
		right: pxTorem(-20px);;
		top:pxTorem(-175px);
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
	    margin-top: pxTorem(360px);
	    font-weight: 600;
	}
	.drowf .content .tip span{
		font-size: pxTorem(40px);
	}
	.drowf .content .tip p {
	    font-size: pxTorem(42px);
	    margin-top: pxTorem(10px);
	}


	.prize_box{
		/*display: none;*/
		width: pxTorem(646px);
		height: pxTorem(830px);
		background: url("~ASSET/img/sljr/bg_list.png")no-repeat center;
		background-size: 100%;
		position: absolute;
		left: 50%;
		text-align: center;
		top: pxTorem(240px);
		margin-left: pxTorem(-323px);
		.close{
			position: absolute;
			width: pxTorem(50px);
			height: pxTorem(50px);
			border-radius: 50%;
			right: pxTorem(30px);
			text-align: center;
			z-index: 10;
			color: #ffffff;
			background:red; 
			top: pxTorem(40px);
			font-size:  pxTorem(50px);
			span{
				position: absolute;
				right:pxTorem(7px);
				top:  pxTorem(-12px);
			}
		}
		.prize_content{
			width: pxTorem(580px);
			height: pxTorem(750px);
			margin: pxTorem(50px) auto;
			.tit{
				color: #f44336;
				width: 100%;

				font-size: pxTorem(36px);
				font-weight:bolder;
				span{
					margin:0  pxTorem(70px);
				}
			}
			#wrapper{
				overflow: hidden;
				width: 100%;
				height: pxTorem(720px);
				position: relative;
			}
			.prize_list{
				text-align: left;
				font-weight: bloder;
				line-height: pxTorem(60px);
				ul{
					overflow: hidden;
					position: absolute;
				}
				
				.prize_time{
					float: left;
					text-align: center;
					width: pxTorem(280px);
					height:  pxTorem(60px);
				}
				.prize_good{
					float: right;
					text-align: center;
					display: inline-block;
					width: pxTorem(280px);
					height:  pxTorem(60px);
					
				}
			}
		}
	}
	/*活动页面 end*/
</style>	