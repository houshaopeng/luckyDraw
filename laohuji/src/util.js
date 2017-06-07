/*
* @Author: Marte
* @Date:   2017-06-06 19:45:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-06 20:09:37
*/

'use strict';
export{
    GetRequest,getNowFormatDate
}

 function GetRequest(key) {
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
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    if (second >= 0 && second <= 9) {
        second = "0" + second;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hour + seperator2 + minute
            + seperator2 + second;
    return currentdate;
}
