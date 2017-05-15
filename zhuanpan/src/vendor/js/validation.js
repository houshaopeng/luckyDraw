
import VeeValidate, { Validator } from 'vee-validate';
import messages from 'assets/js/zh_CN';
Validator.updateDictionary({
    zh_CN: {
        messages
    }
});
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VeeValidate,config);



// 手机号码验证
// Vue.validator('telPhone', function (val) {
//  return /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/.test(val)
// });
import { Validator } from 'vee-validate';
Validator.extend('mobile', {
    messages: {
      en:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
// 验证码验证
// Vue.validator('verCode', function (val) {
//  return /^[0-9]*$/.test(val)
// });