// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.config.productionTip = false



/*公共方法*/
var GetRequest = function(key){
    var url = "?" + location.href.split("?")[1]; //获取url中"?"符后的字串
    var theRequest = new Object();
    var strs = [];
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);//openid=123456
      if(str.indexOf("&")!=-1){
        strs = str.split("&")
      }else{
        strs[0] = str;
      }
      for(var i = 0; i < strs.length; i ++) {
        //theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
              theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return theRequest[key];
};
/*获取到url后面的参数，并保存到全局*/
Vue.prototype.$nickName = decodeURI(GetRequest('nickname'));
Vue.prototype.$userToken = GetRequest('userToken');
Vue.prototype.$gameId = GetRequest('gameId');

/*调用接口得到签名*/
var getSignParam = {
    'shareUrl': window.location.href,
    'userToken':GetRequest('userToken'),
    'gameId':GetRequest('gameId'),
};
var getSignUrl = '/weiXin/getSign';
var isDebug = false;
var hostUrl = "http://120.27.220.25:8083";

var getWxJsToken = function () {  // 获取微信签名验证，得到config
    var saveData = JSON.stringify(getSignParam);
    $.ajax({
        url: hostUrl + getSignUrl,
        type: "post",
        data: saveData,
        headers: {
            "Content-Type": "application/json",
        },
        success: function (data) {
            console.log(data);
            if (data.code == "000000") {
                var dataConf = data.weiXinJsSign;
                wxConfig(dataConf);
            }
        }
    })
};
var wxConfig = function (conf) {
    wx.config({
        debug: isDebug,
        appId: conf.appId, //公众号的唯一标识
        timestamp: conf.timestamp, //生成签名的时间戳
        nonceStr: conf.nonceStr, //生成签名的随机串
        signature: conf.signature, //签名
        jsApiList: ['chooseImage', 'previewImage']
    });

    wx.ready(function () {

    });

    wx.error(function(res){
        console.log('error',res);
    });
}
window.onload = function(){
    getWxJsToken();
}
/*提供一个全局方法，用来开启摄像头*/
Vue.prototype.$getPhoto = function(){
    alert("调用摄像头开始")
    wx.chooseImage({
       count: 1, // 默认9
       sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
       sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
       success: function (res) {
           var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
           alert("fsdfsfsd");
       }
    });
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
