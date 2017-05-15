/**
 * 微信分享
 * @param  {[Boolen]} debug  [是否是Debug模式，Debug模式会有alert]
 * @param  {[String]} RequestSignUrl    [获取微信签名的接口URL,接口返回的数据对象中必须包含：appId、timestamp、nonceStr、signature 等字段]
 * @param  {[String]} RequestSignParam  [获取微信签名的接口请求时参数]
 * @param  {[String]} RequestSignMethod [获取微信签名的接口Method类型 get、post]
 * @param  {[String]} onShareSuccess    [微信分享成功回调]
 * @param  {[String]} onShareError      [微信分享失败回调]
 * @param  {[String]} ShareList         [需要开启]
 *
 * power by cjsasdf @2017/5/12
 */

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD
        
        define(['jquery'], factory);

    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        
        module.exports = factory(require('jquery'));

    } else {
        // 浏览器全局变量(root 即 window)
        
        root.WXShare = factory(root.jQuery);
    }

}(this, function ($) {
    
    var __cfg = {
        'debug':false,
        'RequestSignUrl':'',
        'RequestSignParam':null,
        'RequestSignMethod':'post',
        'onShareSuccess':null,
        'onShareError':null,
        'ShareList':['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
    }

    var log = function(msg){

        __cfg.debug?alert(msg):console.log(msg);
    }

    /*
     ** 解决接口返回数据结构差异化问题
     ** 从获取签名的接口中递归搜索 signature 字段，并将包含 signature字段的对象返回
     */
    var _findSignatureInResult = function(result){

        var _signobj = null;

        for(var key in result){

            if(key == 'signature'){

                _signobj = result;

                break;

            }else if(typeof result[key] == 'object'){

                _signobj = _findSignatureInResult(result[key]);

                if(_signobj != null){

                    break;
                }

            }else{

                _signobj = null;
            }
        }

        return _signobj;
    }

    var getSignFromCustomApi = function () {

        if(!__cfg.RequestSignUrl)

            return;

        $.ajax({

            url: __cfg.RequestSignUrl,

            data: __cfg.RequestSignParam,

            type: __cfg.RequestSignMethod,

            headers: {

                "Content-Type": "application/json",
            },

            success: function (data) {
                
                var signobj = _findSignatureInResult(data);

                setupWXConfig(signobj);
            }
        })
    };

    var setupWXConfig = function(signobj){

        if(signobj == null){

            log('获取微信签名失败！');

            return;
        }

        if(!signobj.appId){

            log('微信签名数据中缺少 appId ！'); return;

        }else if(!signobj.timestamp){

            log('微信签名数据中缺少 timestamp ！'); return;

        }else if(!signobj.nonceStr){

            log('微信签名数据中缺少 nonceStr ！'); return;
        }

        wx.error(function(err){});

        wx.config({
            debug: __cfg.debug,
            appId: signobj.appId,                   //公众号的唯一标识
            timestamp: signobj.timestamp,           //生成签名的时间戳
            nonceStr: signobj.nonceStr,             //生成签名的随机串
            signature: signobj.signature,           //签名
            jsApiList: __cfg.ShareList
        });

        wx.ready(function(){

            for(var i=0;i<__cfg.ShareList.length;i++){

                wx[ __cfg.ShareList[i] ]({
                    title: __cfg.title,                 // 分享标题
                    desc: __cfg.desc,                   // 分享描述
                    link: __cfg.link,                   // 分享链接
                    imgUrl: __cfg.imgUrl,               // 分享图标
                    type: 'link',                       // 分享类型,music、video或link，不填默认为link
                    dataUrl: '',                        // 如果type是music或video，则要提供数据链接，默认为空
                    success: __cfg.onShareSuccess?(function(channel , success){
                        
                        var callback = function(){

                            success(arguments.callee.channel);
                        }

                        callback.channel = channel;

                        return callback;

                    })(__cfg.ShareList[i] , __cfg.onShareSuccess):function(){},

                    cancel: __cfg.onShareError?(function(channel , faild){
                        
                        var callback = function(){

                            faild(arguments.callee.channel);
                        }

                        callback.channel = channel;

                        return callback;

                    })(__cfg.ShareList[i] , __cfg.onShareError):function(){},
                });
            }

            
        });
    }

    var wxshare = function(){
        
        wxshare.config(arguments[0]).setup();
    }

    wxshare.config = function(){

        if(typeof arguments[0] != 'object'){

            log('警告：WXShare.config 传入参数有误');
        }

        __cfg = $.extend(__cfg,arguments[0]);

        return wxshare;
    };

    wxshare.setup = function(){

        $(function(){

            getSignFromCustomApi();
        });
    }

    return wxshare;
}));
