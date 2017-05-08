import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)


// 手机号码验证
Vue.validator('telPhone', function (val) {
 return /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/.test(val)
});


// 验证码验证
Vue.validator('verCode', function (val) {
 return /^[0-9]*$/.test(val)
});