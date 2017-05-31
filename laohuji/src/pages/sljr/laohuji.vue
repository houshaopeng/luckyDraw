<template>
    <div id="sljr">
        <!-- 登录页 -->
        <div id="login" v-show="loginshow">
            <p class="title" >
                <span class="login" @click="login">欢迎您，{{userName}}</span>
            </p>
            <Loginbox @newNodeEvent="parentLisen"></Loginbox>
        </div>
        <!-- 中奖记录页 -->
        <div id="winning_record" v-show="jilu">
            <p class="title" >
                <span class="login" @click="backhome">&lt;返回抽奖页</span>
            </p>
            <div id="container">
                <div id="zhongjiang_list">
                    <div id="zhongjiang_title">
                        <div>中奖时间</div>
                        <div>获得奖品</div>
                    </div>
                    <ul id="item">
                        <li v-for="item in items"><span>{{item[0]}}</span><span>{{item[1]}}</span></li>
                    </ul>
                    <div id="see_more">查看更多记录</div>
                </div>
            </div>
        </div>
        <!-- 老虎机抽奖页 -->
        <div id="laohujipage" v-show="laohujishow">
            <p class="title" >
                <span class="login" @click="login">欢迎您，{{userName}}</span>
                <span class="winning_record"@click="gozjjl"></span>
            </p>
            <div class="tigerji">
                <div class="prize">
                    <img class="img1" src="~ASSET/img/laohujiImg/scroll1.png" alt="">
                    <img class="img2" src="~ASSET/img/laohujiImg/scroll2.png" alt="">
                    <img class="img3" src="~ASSET/img/laohujiImg/scroll3.png" alt="">
                    <div class="topbox"></div>
                    <div class="bottombox"></div>
                </div>
                <div class="start">
                    <img v-show="start1" @touchstart="start" @touchend="end" src="~ASSET/img/laohujiImg/开始按钮未点击.png">
                    <img v-show="started"src="~ASSET/img/laohujiImg/开始按钮点击后.png">
                </div>
            </div>
            <div class="activity_description">
                    <div class="tit"><img src="~ASSET/img/laohujiImg/活动说明.png" alt=""></div>
                    <p>1.绑定手机的账号才能领取奖品。</p>
                    <p>2.每位用户分享给好友，好友注册成功即可在抽奖一次。</p>
                    <p>3.每位用户每天抽奖次数上限为5次。</p>
                    <p>4.三个福袋的奖品为5000元理财金，三个红包的奖品为10000元理财金，三个金币奖品为20000元理财金。</p>
                    <p>5.理财红包有效期为15日，请尽快登录善林金融APP使用，超出时间自动失效。</p>
                    <p @click="resetLocal">6.活动最终解释权归善林金融所有。</p>
            </div>
            </div>
            <!-- 中奖弹出层 -->
            <div class="drown" v-show="drawn">
                    <div class="content">
                        <div class="tip">
                            <span>恭喜您！中了</span>
                            <p>{{span}}元理财红包!</p>
                        </div>
                        <div class="receive"@click="login">马上领取</div>
                    </div>
                    <div class="close" @click="close2"><img src="~ASSET/img/laohujiImg/关闭按钮.png" alt="" /></div>
                </div>
            <!-- 未中奖弹出层 -->
            <div class="drowf" v-show="notwinning">
                <div class="bar">
                    <img src="~ASSET/img/laohujiImg/引导箭头.png" alt="">
                </div>
                <div class="content">
                    <div class="tip">
                        <span>很遗憾，没有中奖！</span>
                        <p>分享给好友赢取更多机会吧!</p>
                    </div>
                </div>
                <div class="close" @click="close1"><img src="~ASSET/img/laohujiImg/关闭按钮.png" alt="" /></div>
            </div>
         </div>

</template>
<script>
    import Login from "./_components/Login.vue"
    // import Lottery from "./_components/Lottery.vue"
    // import Rule from "./_components/Rule.vue"
    import Loginbox from "./_components/Loginbox.vue"
    import wxshare from "VENDOR/js/wxshare.js"
    import {GetRequest} from "VENDOR/js/util.js"
    import {getNowFormatDate} from "VENDOR/js/util1.js"
    import Bus from "VENDOR/js/bus.js"
    export default{
        data(){
            return{
                drawntext:{
                    a:"20000",
                    b:"10000",
                    c:"5000"
                },
                span:"",
                start1:true,
                started:false,
                notwinning:false,
                drawn:false,
                laohujishow:true,
                loginshow:false,
                jilu:false,
                userName:"",
                items:'',
            }
        },
        methods:{

            start(){
                this.start1=false;//按钮切换
                this.started=true;
                --localStorage.times;
                if(localStorage.times<0){
                    alert("您当日抽奖次数已用完")
                }else{
                /*===================================================*/
                var flag=false;
                var index=5;
                var num1;
                var num2;
                var num3;

                function letGo(){
                    var TextNum1=parseInt(Math.random()*4)//随机数
                    var TextNum2=parseInt(Math.random()*4)
                    var TextNum3=parseInt(Math.random()*4)

                    num1=[-33,-103,-173,-243][TextNum1];//在这里随机
                    num2=[-33,-103,-173,-243][TextNum2];
                    num3=[-33,-103,-173,-243][TextNum3];

                    // num1=[-103,-103,-103,-103][TextNum1];//在这里随机
                    // num2=[-103,-103,-103,-103][TextNum2];
                    // num3=[-103,-103,-103,-103][TextNum3];

                    // $(".img1").css("top",0).animate({"top":num1},800,"linear");
                    // $(".img2").css("top",0).animate({"top":num2},1100,"linear");
                    // $(".img3").css("top",0).animate({"top":num3},1400,"linear");
                    // for(var i=0; i<=3; i++){
                    //     $(".img1").css("top",0).animate({"top":-243},600,"linear");
                    //     $(".img2").css("top",0).animate({"top":-242},500,"linear");
                    //     $(".img3").css("top",0).animate({"top":-241},550,"linear");
                    // }

                    $(".img1").animate({"top":-243},400,"linear", function () {
                        $(this).css("top",0).animate({"top":num1},1000,"linear");
                    });
                    $(".img2").animate({"top":-243},500,"linear", function () {
                        $(this).css("top",0).animate({"top":num2},1100,"linear");
                    });
                    $(".img3").animate({"top":-243},600,"linear", function () {
                        $(this).css("top",0).animate({"top":num3},1300,"linear");
                    });

                }
                function reset(){
                    $(".prize img").css({"top":-33});
                }
                /*=================================================*/
                if(!flag){
                    flag=true;
                    reset();
                    letGo();
                    setTimeout(()=>{
                        flag=false;
                        if(num1==num2&&num2==num3&&num3==-33){
                            this.drawn=true;
                            this.span=this.drawntext.a;//三个金币20000元理财金
                            /*保存奖品*/
                            var getTime = getNowFormatDate();//抽奖时间
                            var goods=this.drawntext.a+"元理财金";
                            if (!localStorage.prize) {
                                localStorage.prize = JSON.stringify([[getTime, goods]]);
                            } else {
                                var arrNew = JSON.parse(localStorage.prize);
                                arrNew.push([getTime, goods]);
                                localStorage.prize = JSON.stringify(arrNew);
                            }
                        }else if(num1==num2&&num2==num3&&num3==-103){
                            this.drawn=true;
                            this.span=this.drawntext.b;//三个福袋10000元理财金


                            var getTime = getNowFormatDate();//抽奖时间
                            var goods=this.drawntext.a+"元理财金";
                            if (!localStorage.prize) {
                                localStorage.prize = JSON.stringify([[getTime, goods]]);
                            } else {
                                var arrNew = JSON.parse(localStorage.prize);
                                arrNew.push([getTime, goods]);
                                localStorage.prize = JSON.stringify(arrNew);
                            }
                        }else if(num1==num2&&num2==num3&&num3==-173){
                            this.drawn=true;
                            this.span=this.drawntext.c;//三个红包5000元理财金
                            var getTime = getNowFormatDate();//抽奖时间
                            var goods=this.drawntext.a+"元理财金";
                            if (!localStorage.prize) {
                                localStorage.prize = JSON.stringify([[getTime, goods]]);
                            } else {
                                var arrNew = JSON.parse(localStorage.prize);
                                arrNew.push([getTime, goods]);
                                localStorage.prize = JSON.stringify(arrNew);
                            }
                        }else{
                            this.notwinning=true;
                        }
                        this.items=JSON.parse(localStorage.prize);
                    },2000);
                    index--;
                }
                }
            },
            end(){
                this.start1=true;
                this.started=false;
            },
            close1(){
                this.notwinning=false;
            },
            close2(){
                this.drawn=false;
            },
            login(){

                    this.laohujishow=false;
                    this.loginshow=true;
                    this.drawn=false;
                // if(this.userName!==undefined){
                //     alert("您已经登录")
                // }else{
                //     this.laohujishow=false;
                //     this.loginshow=true;
                //     this.drawn=false;
                // }

            },
            gozjjl(){
                if(localStorage.usertoken){
                    this.jilu=true;
                    this.laohujishow=false;
                }else{
                    alert("您还没有中奖记录,请登录")
                }
            },
            parentLisen(loginshow){
                alert(loginshow)
            },
            /*调试用，清本地数据*/
            resetLocal(){
                localStorage.clear();
                window.location.reload();
            },
            backhome(){
                this.jilu=false;
                this.laohujishow=true;
            }
        },
        created() {
            Bus.$on('moveTelPhone', a=> {
                this.userName = a;
            });
            Bus.$on('newNodeEvent', b=> {
                this.jilu = b;
                this.loginshow=false;
            });
        },
        mounted (){
            console.log( window.location.href);
            console.log( localStorage.usertoken);
            console.log( window.location.href);
            localStorage.times=5;//当日抽奖次数
            if(localStorage.usertoken=='undefined'){
                localStorage.usertoken = GetRequest('userToken');
                localStorage.gameId = GetRequest('gameId');
                localStorage.nickname = GetRequest('nickname');
            }
            this.userName = localStorage.nickname;
            var __config = {
                'RequestSignUrl':'http://120.27.220.25:8083/weiXin/getSign',
                'RequestSignParam':JSON.stringify({                   //验证签名接口的参数
                    'shareUrl': window.location.href,
                    'userToken':localStorage.usertoken,
                    'gameId': localStorage.gameId,
                }),
                'onShareSuccess':function(channel){
                    var type = 0;
                    if(!channel){
                        log("缺少分享渠道");
                    }else{
                        switch(channel)
                        {
                            case "onMenuShareAppMessage":
                                type = 1;
                                break;
                            case "onMenuShareTimeline":
                                type = 2;
                                break;
                            case "onMenuShareQQ":
                                type = 3;
                                break;
                            case "onMenuShareWeibo":
                                type = 4;
                                break;
                            case "onMenuShareQZone":
                                type = 5;
                                break;
                            default:

                        }
                        var param = {
                            'shareUrl': "http://shanlingame.oneforce.cn/game-app/weiXin/index?gameId=1001",
                            'userToken': localStorage.usertoken,
                            'shareType': type
                        }
                        var saveData = JSON.stringify(param);
                        $.ajax({
                            url: "http://120.27.220.25:8083/weiXin/saveShareRecord",//hostUrl + saveShareUrl,
                            type: "post",
                            data: saveData,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            success: function (data) {
                                console.log(data);
                                if (data.code == "000000") {
                                    //alert("success");
                                }
                            }
                        })
                    }
                },
                'title':'老虎机抽奖啦',
                'desc':'关注微信号，踊跃抽奖，最高可得50000元理财金',
                'link':"http://shanlingame.oneforce.cn/game-app/weiXin/index?gameId=1001" + "&userToken=" + localStorage.usertoken,
                'imgUrl':"http://shanlingame.oneforce.cn/laohuji/static/img/laohuji.png",//todo
            }
            console.log(__config)
            wxshare(__config);
        },
        components:{
            Login,
            // Lottery,
            // Rule,
            Loginbox,
        }
    }

</script>
<style scoped lang='scss' rel="stylesheet/scss">
    $font-size-base:75px;
    @function pxTorem($px) {
        @return $px / $font-size-base * 1rem;
    }
    #sljr {
    width: 100%;
    height: 890px;
    background: url("~ASSET/img/laohujiImg/首页背景.png")no-repeat center;
    background-size:100% 890px;
    overflow:hidden;
        .title{
            margin-top:pxTorem(25px);
            position:relative;
            .login{
                display: inline-block;
                font-size:pxTorem(12px);
                color:#fff;
                background:url("~ASSET/img/laohujiImg/请登录.png")no-repeat left;
                background-size:147px 22px;
                width: 137px;
                height: 22px;
                line-height: 22px;
                padding-left:12px;
            }
            .winning_record{
                display:inline-block;
                width: 100px;
                height: 44px;
                background:url("~ASSET/img/laohujiImg/中奖记录按钮.png")no-repeat center;
                background-size:100px 44px;
                position: absolute;
                top: -13px;
                right: 0;
            }
        }
        .tigerji{
            width: 375px;
            height: 612px;
            overflow:hidden;
            margin:0 auto;
            background:url("~ASSET/img/laohujiImg/老虎机背景.png")no-repeat center;
            -webkit-background-size: 100% 612px;
            background-size: 100% 612px;
            .prize{
                width: 225px;
                height: 145px;
                overflow:hidden;
                text-align: center;
                margin:163px auto 0;
                background:rgba(0,0,0,0.5);
                position: relative;
                    img{
                        position: absolute;
                        width: 70px;
                        top:-33px;
                        left:3px;
                    }
                    img:nth-child(2){
                        left:76px;
                    }
                    img:nth-child(3){
                        left:149px;
                    }
                    .topbox{
                        width: 225px;
                        height: 37px;
                        position: absolute;
                        top:0;
                        margin:0 auto;
                        background:rgba(0,0,0,0.4);
                    }
                    .bottombox{
                        width: 225px;
                        height: 37.5px;
                        position: absolute;
                        bottom:0;
                        margin:0 auto;
                        background:rgba(0,0,0,0.4);
                    }
            }
            .start{
                margin-top: 15px;
                text-align: center;
                img{
                    width: 90px;
                    height: 66px;
                }

            }
        }
        .activity_description{
            overflow:hidden;
            color:#fff;
            .tit{
                text-align: center;
                img{
                    width: 108px;
                    height: 32px;
                }
            }
            p{
                font-size:12px;
                padding: 3px 12px;
            }
        }
        .drowf {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            .bar{
                float: right;
                margin-right: 20px;
                img{
                    width: 44px;
                    height: 94px;
                }
            }
        }

        .drown {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
        }
        .drown .close,.drowf .close{
            position: absolute;
            bottom: 15%;
            left:50%;
            margin-left:-25px;
            img{
                width: 50px;
                height: 50px;
            }
        }

        .drown .content {
            width: 300px;
            height: 377px;
            background: url("~ASSET/img/laohujiImg/中奖弹框.png")no-repeat center;
            background-size: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            margin: -175px 0 0 -150px;
            text-align: center;
        }
        .drown .content .tip {
            margin-top: 160px;
            font-weight: 600;
            color:#fff;
            span{
                font-size:18px;
            }
        }

        .drown .content .tip p {
            font-size: 24px;
            margin-top: 10px;
        }

        .drown .content .receive {
            width: 180px;
            height: 50px;
            background: url("~ASSET/img/laohujiImg/按钮.png")no-repeat center;
            background-size: 100%;
            margin: 70px auto 0;
            line-height: 50px;
            color:#fff;
            font-size:20px;
        }

        .drowf .content {
            width: 300px;
            height: 350px;
            background: url("~ASSET/img/laohujiImg/没有抽奖机会弹框.png")no-repeat center;
            background-size: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            margin: -150px 0 0 -150px;
            text-align: center;
        }
        .drowf .content .close img{
            width: 30px;
            height: 30px;
        }
        .drowf .content .tip {
            margin-top: 170px;
            font-weight: 600;
            span{
                font-size: 18px;
            }
        }

        .drowf .content .tip p {
            font-size: 24px;
            margin-top: 10px;
            padding: 0 28px;
            }
        }

        #zhongjiang_list {
            width: 330px;
            height: 420px;
            background-image: url("~ASSET/img/laohujiImg/中奖记录表.png");
            background-size: 330px 420px;
            margin: 100px auto 0;
            position: relative;
            #item {
                position:absolute;
                top: 120px;
                text-align: center;
                li{
                    width: 330px;
                    height: 30px;
                    line-height: 30px;
                    span{
                        padding: 20px;
                    }
                }
            }
        }

        #zhongjiang_title div {
            float: left;
            width: 50%;
            font-size: 16px;
            color: #ffffff;
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
            font-size: 16px;
            color: #f44336
        }

</style>