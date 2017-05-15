<template>
	<!--中奖纪录 start-->
    <div id="content">
        <div id="container">
            <div id="login">
                <div class="no_login">
                    <span>◀返回</span>
                    <a href="">欢迎您，<span id="telNum"></span></a>
                </div>
            </div>
            <div id="zhongjiang_list">
                <div id="zhongjiang_title">
                    <div>中奖时间</div>
                    <div>获得奖品</div>
                </div>
                <ul>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>2017-05-03 11:12</li>
                            <li>500元理财金</li>
                        </ul>
                    </li>
                </ul>
                <div id="see_more">查看更多记录</div>
            </div>
        </div>
        <!--中奖说明-->
        <div id="zjsm">
            <div id="zjsm_title">
                <img src="images/title.png" alt="" />
            </div>
            <div id="zjsm_text">
                <ol>
                    <li>1. 理财劵请登录善林APP使用。</li>
                    <li>2. 实物奖品领取将有客服在3个工作日内联系您，请保持电话畅通。</li>
                </ol>
            </div>
        </div>
    </div>
   <!--中奖纪录 end-->
</template>
<script>
import Lottery from "VENDOR/js/dial.js"
	export default{
		name: "lottery",
		data(){
			return {
				luck: {},
			}
		},
		methods:{
			startGame(){
				let pointer = document.getElementsByClassName('hand')[0];
				let lottery = new Lottery(pointer, { // eslint-disable-line
					speed: 30, // 每帧速度
					areaNumber: 8 // 奖区数量
				})
				lottery.draw();
				let index = -1
				index = Math.round(Math.random() * 7);
					lottery.setResult(index);
				lottery.on('end', function () {
					console.log('中奖奖区：' + index)
				})
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
	#content,.rotary {
	    width: 100%;
	    background: url(../images/beijing_03.png) no-repeat center center;
	    background-size: 100% 800px;
	    height: 800px;
	}

	#container {
	    padding: 0 10px;
	}

	#login,.rotary .title {
	    height: 50px;
	    line-height: 50px;
	    font-size: 14px;
	}

	.no_login {
	    float: left;
	}

	.no_login a {
	    color: #f44336;
	}
	.no_login span{
	    margin-left: 23px;
	}
	.zjjl {
	    float: right;
	}

	.zjjl button {
	    width: 70px;
	    height: 22px;
	    background-color: #f44336;
	    color: #ffffff;
	    border: 1px solid #f44336;
	    border-radius: 6px;
	}

	#telnumber {
	    margin: 100px auto 0;
	    width: 300px;
	    height: 300px;
	    position: relative;
	}

	#bg {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 300px;
	    height: 300px;
	    display: block;
	    background-color: #fff;
	    border-radius: 6px;
	    opacity: .6;
	}

	#input_padding {
	    position: absolute;
	    padding: 33px 25px;
	    z-index: 1;
	}

	#input_padding>div {
	    width: 250px;
	    height: 44px;
	    background-color: #fff;
	    margin-bottom: 7px;
	    border-radius: 4px;
	}

	.l_number ul li {
	    float: left;
	    height: 44px;
	    line-height: 44px;
	}

	.l_number ul li:nth-of-type(1) {
	    width: 50px;
	}

	.l_number ul li:nth-of-type(1) img {
	    display: block;
	    width: 14px;
	    height: 20px;
	    margin: 13px auto;
	}
	.l_number ul li:nth-of-type(2){
		color:#bdbdbd;
	}
	.l_number ul li:nth-of-type(3) {
	    width: 115px;
	}

	.l_number ul li:nth-of-type(3) input {
	    border: none;
	    width:100%;
	    height:34px;
	    font-size: 15px;
	    /*border-left: 1px solid #bdbdbd;*/
	}
	#otp{
		width:190px;
	}
	.l_number ul li:nth-of-type(4) input {
	    width: 68px;
	    height: 28px;
	    margin: 0 6px;
	    font-size: 10px;
	    background-color: #bdbdbd;
	    color: #ffffff;
	    border: 1px solid #bdbdbd;
	    border-radius: 3px;
	    text-align: center;
	}

	#yz_error {
	    font-size: 12px;
	    color: #f55f57;
	}

	#sure {
	    width: 250px;
	    height: 50px;
	    display: block;
	    background-image: url(../images/sure_get.png);
	    background-size: 250px 50px;
	    border: none;
	    border-radius: 4px;
	    margin-top: 10px;
	}


	/*************************************/

	#zhongjiang_list {
	    width: 330px;
	    height: 420px;
	    background-image: url(../images/bg_list.png);
	    background-size: 330px 420px;
	    margin: 10px auto;
	    position: relative;
	}

	#zhongjiang_title {
	    border-bottom: 1px solid #eeeeee;
	}

	#zhongjiang_title div {
	    float: left;
	    width: 50%;
	    font-size: 16px;
	    color: #f44336;
	    text-align: center;
	    margin-top: 30px;
	}

	#zhongjiang_title div:nth-of-type(2) {
	    border-left: 2px solid #f44336;
	    box-sizing: border-box;
	}

	#zhongjiang_list ul li ul {
	    padding: 0 15px;
	}

	#zhongjiang_list ul li ul li {
	    float: left;
	    width: 50%;
	    height: 44px;
	    line-height: 44px;
	    font-size: 12px;
	    text-align: center;
	}

	#see_more {
	    width: 100%;
	    position: absolute;
	    bottom: 10px;
	    text-align: center;
	    font-size: 12px;
	    color: #f44336
	}

	#zjsm_title img {
	    width: 100%;
	    height: auto;
	}

	#zjsm_text {
	    padding: 0 15px;
	    line-height: 25px;
	    color: #ffffff;
	    font-size: 14px;
	}
	#yz_error{
		display: none;
	}
	/*lottery end*/
</style>	