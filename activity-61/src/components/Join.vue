<template>
  <div class="join">
    <span class="joinNum">1000</span>
    <span class="tikNum">1000</span>
    <span class="openNUm">1000</span>

    <div class="Photo" @click="getPhoto()"></div>

    <input type="text" name="" class="name">
    <input type="number" name="" class="tel"></input>

    <button class="tijiao"></button>
    <button class="guize"></button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'join',
    data(){
      return {
        telNum:'',
      }
    },
    methods:{
      setLength:function(num){
        if(this.telNum.length>=num){
          this.telNum = this.telNum.substring(0,num-1);
        }
      },
      //调用摄像头,本地相册
      getPhoto:function(){
        Vue.prototype.$getPhoto();
      },




      //TODO,在这里拿到全局的activityID,这个是唯一的。
    },
    mounted:function(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 最外层 */
.join{
  width:100%;
  height:17.64rem;
  background-image: url('../assets/join_bg.jpg');
  background-size:100%;
  position:relative;
}
.join>span{
  width:1.87rem;
  height:0.67rem;
  position:absolute;
  top: 1.6rem;
  font-size:0.32rem;
  text-align:center;
  color: #008fe5;
  line-height:0.67rem;
}
.joinNum{
  left: 1.18rem;
}
.tikNum{
  left: 4.2rem;
}
.openNUm{
  left: 7.35rem;
}

/* 图片预览 */
.Photo{
  width:2.33rem;
  height:2.33rem;
  background-size:100%;
  background-image:url('../assets/join_getPhoto.png');
  position:absolute;
  top: 4rem;
  left: 2.67rem;
}
/* input框 */
.join input{
  width:5.73rem;
  height:0.49rem;
  border-radius:0.24rem;
  border:none;
  position:absolute;
  left:2.8rem;
}
.name{
  top:6.93rem;
}
.tel{
  top:7.87rem;
}
.tijiao{
  width:3.13rem;
  height:0.85rem;
  position:absolute;
  background-color:transparent;
  background-image: url('../assets/join_tijiao.png');
  background-size:100%;
  border:none;
  top:9.26rem;
  left: 50%;
  transform:translate(-50%,0);
}
.guize{
  width:3.13rem;
  height:0.85rem;
  position:absolute;
  background-color:transparent;
  background-image: url('../assets/join_guize.png');
  background-size:100%;
  border:none;
  top:12.5rem;
  left: 50%;
  transform:translate(-50%,0);
}
</style>
