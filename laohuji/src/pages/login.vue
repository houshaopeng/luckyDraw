<template>
    <div id="login">
        <div class="title" >
            <span class="login" @click="goHome()">返回首页</span>
            <span class="winning_record" v-show="jilubtnshow"></span>
        </div>
        <div class="loginbox" v-show="loginbox">
            <div class="telnumbox">
                <img src="../assets/laohuji (12).png" alt="">
                <input class="telnum" type="number" placeholder="请输入手机号码" v-model= "telPhone">
                <button class="btn" @click="getOtp">获取验证码</button>
            </div>
            <div class="codebox">
                <img src="../assets/laohuji (5).png" alt="">
                <input class="telnum" type="number" placeholder="请输入验证码" v-model = "VerificationCode">
            </div>
            <img class="confrim" src="../assets/laohuji (6).png" @click="confrim()">
        </div>
        <!-- 中奖记录页 -->
        <div id="jilubox" v-show="jilubox">
            <ul>
                <li v-for="item in items"><span>2017.06.06</span><span class="money">20000元理财金</span></li>

            </ul>
            <div class="more"@click="more">查看更多记录</div>
        </div>
    </div>
</template>
<script>
export default{
    name:'login',
    data(){
        return{
            userName:"请登录",
            jilubox:false,
            loginbox:true,
            jilubtnshow:true,
            items:'',
            telPhone:'',
            VerificationCode : "",
        }
    },
    methods:{
        goHome(){
            this.loginbox=true;
            this.jilubox=false;
            this.jilubtnshow=true;
            window.location.hash="/";

        },
        //去确认登录
        confrim(){

            var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
                // alert(this.UUID);
                if(!rule.test(this.telPhone)) {
                    Toast("请输入正确的手机号");
                }else{
                    this.$http.post(
                        "http://120.27.220.25:8083/login/checkOptverify",
                        {
                            "mobileNo":this.telPhone,
                            "otp" : this.VerificationCode,
                            "otpUUID" : this.UUID,
                        },
                        {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                    ).then(function(response){
                        if(response.data.code=="000000"){
                            this.loginbox=false;
                            this.jilubtnshow=false;
                            this.jilubox=true;
                        }else{
                            Toast('验证码错误');
                            // this.errorTitle = true;
                        }
                    },function(){
                        Toast('网络请求错误');
                    })
                }

        },
        more(){
            alert("暂无数据！")
        },
        // 获取验证码
            getOtp(){
                if(this.testTelPhone()){
                    this.$http.post(
                        "http://120.27.220.25:8083/login/sendLoginotp",
                        {
                            "mobileNo":this.telPhone,
                        },
                        {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                    ).then(function(response){

                        if(response.data.code == "000000"){
                            this.UUID = response.data.otpInfo.otpUUID;      //获取uuid
                            console.log(this.UUID)
                        }else {
                            console.log(response);
                            Toast("网络数据错误")
                        }
                    },function(response){
                        Toast("网络请求失败")
                    })
                }
            },
            // 确认登录
            sureLogin(){
                var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
                // alert(this.UUID);
                if(!rule.test(this.telPhone)) {
                    Toast("请输入正确的手机号");
                }else{
                    this.$http.post(
                        "http://120.27.220.25:8083/login/checkOptverify",
                        {
                            "mobileNo":this.telPhone,
                            "otp" : this.VerificationCode,
                            "otpUUID" : this.UUID,
                        },
                        {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                    ).then(function(response){
                        if(response.data.code=="000000"){
                            Bus.$emit('moveTelPhone', this.telPhone);
                            Bus.$emit('newNodeEvent', this.winningShow);
                            this.loginShow=false;
                        }else{
                            Toast('验证码错误');
                            // this.errorTitle = true;
                        }
                    },function(){
                        Toast('网络请求错误');
                    })
                }
            },
            testTelPhone(){
                var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
                if(!rule.test(this.telPhone)) {
                    Toast("请输入正确的手机号");
                }else {
                    return true;
                }
            }
    },
    mounted:function(){
        this.items=JSON.parse(localStorage.prize);
    }
}
</script>

<style scoped>
     html,body,h1, h2,h3,h4,h5,ul,li,img,ol,li{
      font-weight: normal;
      margin:0;
      padding: 0;
    }
    ul,li{
      list-style:none;
      padding: 0;
    }
    a {
      text-decoration: none;
      color:#fff;
    }
    input{
       background:none;
       outline:none;
       border:0px;
    }
    #login{
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
      background-size:80px 24px;
      width:64px;
      height: 24px;
      padding-left:15px;
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
    .loginbox{
        width: 320px;
        height: 300px;
        background:rgba(225,225,225,0.85);
        margin:200px auto 0;
        border-radius:5px;
        overflow:hidden;
        text-align:center;
    }
    .telnumbox{
        width: 280px;
        height: 40px;
        line-height: 40px;
        margin:50px auto 0;
        border:1px solid #898989;
        border-radius: 10px;
        position: relative;
    }
    .codebox img,
    .telnumbox img{
        width: 24px;
        transform:translate(0, 25%);
    }
    .codebox .telnum,
    .telnumbox .telnum{
        margin-left:5px;
        padding-left: 15px;
        border-left:1px solid #898989;
        height: 25px;
        font-size:16px;
    }
    .telnumbox .btn{
        position: absolute;
        right: 5px;
        top:50%;
        transform:translate(0,-50%);
    }
    .codebox{
        width: 280px;
        height: 40px;
        line-height: 40px;
        margin:30px auto 0;
        border:1px solid #898989;
        border-radius: 10px;
    }
    .confrim{
        width: 180px;
        margin-top: 30px;
    }
    #jilubox{
        color:black;
        width: 320px;
        height: 300px;
        background: url('../assets/laohuji (7).png')no-repeat center;
        background-size:320px 300px;
        margin:200px auto 0;
        position: relative;
    }
    #jilubox ul{
        position: absolute;
        padding:70px 30px 0;
    }
    #jilubox ul li{
        padding:5px 0;
    }
    .money{
        margin-left:50px;
    }
    .more{
        text-align: center;
        position: absolute;
        bottom: 5px;
        left:50%;
        transform:translate(-50%,0);
    }
</style>