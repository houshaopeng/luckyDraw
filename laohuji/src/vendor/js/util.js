/*
* @Author: Marte
* @Date:   2017-05-17 15:45:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-05-18 11:35:56
*/

'use strict';
/*截取url数据*/
export function GetRequest(key) {
    var url = '?' + window.location.href.split("?")[1]; //获取url中"?"符后的字串
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
}