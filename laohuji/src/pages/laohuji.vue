<template>

    <div id="laohujipage" v-show="laohujishow">
        <div class="title" >
            <span class="login" @click="login">欢迎您，{{userName}}</span>
            <span class="winning_record"@click="gozjjl"></span>
        </div>
        <div class="tigerji">
          <div class="content">
              <div class="times">本日剩余次数：{{times}} </div>
              <div class="images">
                <img class="img1" src="../assets/jiangpin.png" alt="">
                <img class="img2" src="../assets/jiangpin.png" alt="">
                <img class="img3" src="../assets/jiangpin.png" alt="">
                <div class="btn" @click="caonima()"></div>
              </div>
          </div>
        </div>
        <div class="activity_description">
            <div class="tit"><img src="../assets/laohuji (2).png" alt=""></div>
            <ol>
                <li>绑定手机的账号才能领取奖品。</li>
                <li>每位用户分享给好友，好友注册成功即可在抽奖一次。</li>
                <li>每位用户每天抽奖次数上限为5次。</li>
                <li>三个西瓜的奖品为5000元理财金，三个金币的奖品为10000元理财金，三个红包奖品为20000元理财金。</li>
                <li>理财红包有效期为15日，请尽快登录善林金融APP使用，超出时间自动失效。</li>
                <li @click="resetLocal">活动最终解释权归善林金融所有。</li>
            </ol>
        </div>
        <!-- 中奖弹出层 -->
            <div class="drawn" v-show="drawn">
                <div class="content">
                    <div class="tip">
                        <span>恭喜您,中奖了！~</span>
                    </div>
                    <div class="receive"@click="login">马上领取</div>
                </div>
                <div class="close" @click="close2"><img src="../assets/laohuji (8).png" alt="" /></div>
            </div>
            <!-- 未中奖弹出层 -->
            <div class="drawf" v-show="notwinning">
                <div class="content">
                </div>
                <div class="close" @click="close1"><img src="../assets/laohuji (8).png" alt="" /></div>
            </div>
    </div>

</template>

<script>
    import {GetRequest,getNowFormatDate} from '../util.js'
    export default {
      name: 'laohuji',
      data () {
        return {
          drawntext:{
                        a:"20000",
                        b:"10000",
                        c:"5000"
                    },
          span:"",
          notwinning:false,
          drawn:false,
          laohujishow:true,
          loginshow:false,
          jilu:false,
          userName:"请登录",
          times:localStorage.times,
          flag:false,
        }
      },
      methods:{
        caonima(){
                localStorage.times--;
                this.times=localStorage.times;
                if(localStorage.times<0){
                    this.times=localStorage.times=0;
                    alert("您当日抽奖次数已用完");
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

                    num1=[-20,-108,-196,-284,-372,-460,-548,-636,-724][TextNum1];//在这里随机
                    num2=[-20,-108,-196,-284,-372,-460,-548,-636,-724][TextNum2];
                    num3=[-20,-108,-196,-284,-372,-460,-548,-636,-724][TextNum3];


                    // $(".img1").css("top",0).animate({"top":num1},800,"linear");
                    // $(".img2").css("top",0).animate({"top":num2},1100,"linear");
                    // $(".img3").css("top",0).animate({"top":num3},1400,"linear");


                    $(".img1").animate({"top":-724},1200,"linear", function () {
                        $(this).css("top",-20).animate({"top":num1},1000,"linear");
                    });
                    $(".img2").animate({"top":-724},1300,"linear", function () {
                        $(this).css("top",-20).animate({"top":num2},1100,"linear");
                    });
                    $(".img3").animate({"top":-724},1400,"linear", function () {
                        $(this).css("top",-20).animate({"top":num3},1300,"linear");
                    });

                }
                letGo();
                function reset(){
                    $(".images img").css({"top":-20});
                }
                /*=================================================*/
                if(!this.flag){
                    this.flag=true;
                    reset();
                    letGo();
                    setTimeout(()=>{

                        if((num1==-20||num1==-284||num1==-548)&&(num2==-20||num2==-284||num2==-548)&&(num3==-20||num3==-284||num3==-548)){
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



                        }else if((num1==-108||num1==-372||num1==-636)&&(num2==-108||num2==-372||num2==-636)&&(num3==-108||num3==-372||num3==-636)){
                            this.drawn=true;
                            alert("三个西瓜5000");




                        }else if((num1==-196||num1==-460||num1==-724)&&(num2==-196||num2==-460||num2==-724)&&(num3==-196||num3==-460||num3==-724)){
                            this.drawn=true;
                            alert("三个金币10000");



                        }else{
                            this.notwinning=true;
                        }
                        this.flag=false;
                         this.items=JSON.parse(localStorage.prize);
                    },4500);
                 }
                }
            },
            close1(){
                this.notwinning=false;
            },
            close2(){
                this.drawn=false;
            },
            login(){
                    window.location.hash="/login"

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
            }
      },
      mounted:function(){
        localStorage.times=5;
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     html,body,h1, h2,h3,h4,h5,ul,li,img,ol,li{
      font-weight: normal;
      margin:0;
      padding: 0;
    }
    ul,li{
      padding: 0;
    }
    a {
      text-decoration: none;
      color:#fff;
    }
    #laohujipage{
      width: 100%;
      height: 100vh;
      background: url("../assets/beijing.png")no-repeat center center;
      background-size:cover;
      color:#fff;
      padding-top: 25px;
      box-sizing: border-box;
    }
    .title{
      position: relative;
    }
    .title .login{
      display: inline-block;
      background:url('../assets/laohuji (9).png')no-repeat center;
      background-size:122px 24px;
      width:102px;
      height: 24px;
      padding-left:20px;
      font-size: 12px;
      line-height: 24px;
    }
    .title .winning_record{
      position: absolute;
      right: 0;
      top: -10px;
      background:url('../assets/laohuji (14).png')no-repeat center;
      background-size:110px 48px;
      width:122px;
      height: 48px;
    }
    .tigerji{
      text-align:center;
    }

    .tigerji .content{
      width: 300px;
      height: 180px;
      background: url('../assets/1 (16).png')no-repeat center;
      background-size:300px 180px;
      margin:194px auto 0;
      position: relative;
    }
    .tigerji .content .images{
      position: absolute;
      top: 6px;
      width: 300px;
      height: 170px;
      overflow:hidden;
    }
    .tigerji .content .times{
      position: absolute;
      width:245px;
      height: 26px;
      line-height: 26px;
      top: -30px;
      left:0;
      background:url('../assets/laohuji (1).png')no-repeat center;
      background-size:245px 28px ;
    }
    .tigerji .content img{
      position: absolute;
      width: 88px;
      height: 844px;
    }
    .tigerji .content img:nth-child(1){
      top: -20px;
      left:-2px;
    }
    .tigerji .content img:nth-child(2){
      top: -108px;
      left:76px;
    }
    .tigerji .content img:nth-child(3){
      top: -196px;
      left:152px;
    }
    .tigerji .content .images .btn{
      width: 50px;
      height: 100px;
      position: absolute;
      right: 5px;
      top:-10px;
      -webkit-transform: translate(0,50%);
      -ms-transform: translate(0,50%);
      -o-transform: translate(0,50%);
      transform: translate(0,50%);
    }
    .activity_description .tit{
      text-align: center;
      margin:20px auto 0;
    }
    .activity_description .tit img{
      width: 140px;
      height: 32px;
    }
    .activity_description li{
      font-size:12px;
      padding: 3px 12px;
      color:#f8b62d;
      /* list-style-position: outside; */

    }
    ol{list-style-type:demical;
      margin-left: 20px;
      padding: 3px 12px;
    }
    ol li{ list-style-position:outside;}

    .drawn,.drawf {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.3);
      }
      .drawn .close,.drawf .close{
          position: absolute;
          bottom: 15%;
          left:50%;
          transform:translate(-50%,0);
      }
      .drawn .content {
            width: 300px;
            height: 377px;
            background: url("../assets/laohuji (3).png")no-repeat center;
            background-size: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            margin: -175px 0 0 -150px;
            text-align: center;
      }
      .drawn .content .tip {
            margin-top: 140px;
            font-weight: normal;
            color:#fff;
            font-size:22px;
        }
        .drawn .content .receive {
            width: 180px;
            height: 50px;
            margin: 120px auto 0;
            line-height: 50px;
            font-size:20px;
        }
        .drawf .close img,
        .drawn .close img{
            width: 60px;
            height: 60px;
        }
        .drawf .content {
            width: 220px;
            height: 300px;
            background: url("../assets/laohuji (11).png")no-repeat center;
            background-size: 100%;
            position: absolute;
            top: 40%;
            left: 50%;
            transform:translate(-50%, -40%);
            text-align: center;
      }
</style>
