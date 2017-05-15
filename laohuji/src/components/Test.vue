<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h1>{{ isIos }}</h1>
        <h1>{{ isAndroid }}</h1>
        <h1>{{ isClient }}</h1>
        <h1>{{ isWx }}</h1>
        <h1>{{ isApp }}</h1>
        <br/>
        <br/>
        <button @click="checkUserAgent">检测UserAgent!!</button>
        <br/>
        <br/>
        <button @click="needLogin">点我进行登陆判断</button>
        <br/>
        <br/>
        <button @click="changeShareConfig">修改分享信息</button>
        <br/>
        <p>登陆信息:{{ user }}</p>
        <br/>
        <br/>
        <h1>打印Cookie key为 FOUNQ_TOKEN  值为 {{ cookie }}</h1>
        <br/>
        <p>
            <a href="javascript:JSBridge._handleMessageFromNative('{&quot;handlerName&quot;:&quot;hasShare&quot;,&quot;data&quot;:{&quot;isShare&quot;:&quot;true&quot;,&quot;sex&quot;:1},&quot;callbackId&quot;:&quot;123123123&quot;}')">触发监听:正确类型应该为 javascript:JSBridge._handleMessageFromNative('{&quot;handlerName&quot;:&quot;hasShare&quot;,&quot;data&quot;:{&quot;isShare&quot;:&quot;true&quot;,&quot;sex&quot;:1},&quot;callbackId&quot;:&quot;123123123&quot;}')</a>
        </p>
        <br/>
        <p>是否分享:{{hasShare}}</p>
        <br/>
        <br/>
        <p>
            <a href="FQ-SMGFSQ-JSBridge://app_bridge:cb_1_1481297342586/initShareConfig?{}">点我你就跳转 URL SCHEME: FQ-SMGFSQ-JSBridge://app_bridge:cb_1_1481297342586/initShareConfig?{}</a>
        </p>
        <br/>
        <br/>
    </div>
</template>
<script>
import VueCookie from 'vue-cookie'
import {
    MessageBox
} from 'mint-ui';
import 'mint-ui/lib/style.css';

export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            outmsg: "暂未检测",
            name: '等待ajax请求',
            sex: '等待ajax请求',
            point: '等待ajax请求',
            ip: '等待ajax请求',
            server_ip: 'loading',
            isIos: '',
            isAndroid: '',
            isClient: '',
            isWx: '',
            isApp: '',
            hasShare: false,
            cookie: '',
            isLogin: false,
            user:''
        }
    },
    methods: {
        checkUserAgent() {
            this.msg = "My UserAgent is" + navigator.userAgent;
            if (this.$client.isIos())
                this.isIos = '在IOS打开';
            if (this.$client.isAndroid())
                this.isAndroid = '在安卓打开';
            if (this.$client.isClient())
                this.isClient = '在客户端打开';
            if (this.$client.isWx())
                this.isWx = '在微信打开';
            if (this.$client.isApp())
                this.isApp = '在App打开';
        },
        needLogin() {
            console.log('login');
            //未登录DEMO
            if(!this.isLogin){
                MessageBox("未登录!!", "此时应该跳转到登陆页面"); // title, message, type
                if(!this.$client.isClient()){
                    MessageBox("路由到PC", "此时应该跳转到www.shumensy.com"); // title, message, type
                    window.location = "http://www.shumensy.com";
                    return false;
                }
                if(!this.$client.isApp()){
                    MessageBox("调用H5引导", "此时应该跳转到H5引导页面"); // title, message, type
                    window.location = "http://h5.shumensy.com";
                    return false;
                }
                MessageBox("调用native", "此时应该跳转到登陆页面"); // title, message, type
                this.JsBridge.H2N_login();
                return false;
            }else{
                this.user = this.userinfo;
            }
        },
        changeShareConfig(){
            //设置分享信息DEMO
            this.JsBridge.H2N_initShareConfig('测试分享标题', '测试分享描述', 'http://h5.shumensy.com', 'http://founq-shumen.oss-cn-shanghai.aliyuncs.com/88/gm.png');
        }
    },
    created: function() {
        console.log('created!');
        let token = sessionStorage.getItem('token')
        let userinfo = sessionStorage.getItem('userinfo')
        if (token && userinfo) {
            console.log('user login');
            this.token = token;
            this.userinfo = JSON.parse(userinfo);
            this.isLogin = true;
        }
    },
    mounted: function() {
        console.log('mounted!');
        //注册分享回调事件Demo
        this.JsBridge.N2H_hasShare(() => {
            this.hasShare = true;
        });
        this.cookie = VueCookie.get('FOUNQ_TOKEN');
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    display: block;
    color: red;
    width: 7rem;
}
</style>
