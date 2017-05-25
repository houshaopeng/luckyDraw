<template>
  <div class="join">
    <div class="topLine">
      <h3>家长信息</h3>
    </div>
    <div class="nickName">
      <span>主人</span>
      <span>ding</span>
      <span class="headImg"><!--<img src="#" alt=""/>--></span>
    </div>
    <div class="telNum">
      <span>手机号</span>
      <input type="number" placeholder="请输入手机号" v-model="telNum" @keydown="setLength(11)"/>
    </div>
    <div class="info">
      <h3>报名信息</h3>
    </div>
    <div class="infoitem">
      <textarea name="" id="" cols="20" rows="2" placeholder="请输入参赛宣言，15-30个字"></textarea>
      <div class="camera" @click='getPhoto'>
        <img src="../assets/photo.jpg" alt=""/>
      </div>
      <!-- <p>请上传一张照片<input type="file"/></p> -->
      <p>请上传一张照片</p>
    </div>
    <div class="bottom">
      <div class="sign">提交</div>
      <p class="p1">提交报名后，您的作品将进入审核系统</p>
      <p class="p2">请留意【作品】随时获取审核信息</p>
    </div>
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
    },
    mounted:function(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .join{
    background-color: #f4f4f4
  }
  .topLine{
    width: 100%;
    height: 1.2rem;
    overflow: hidden;
  }
  .topLine h3{
    height: 0.32rem;
    margin-top: 0.6rem;
    margin-left: 0.47rem;
    color: #999999;
  }
  .nickName{
    width: 100%;
    height: 1.44rem;
    background-color: white;
    position: relative;
  }
  .nickName span:nth-child(1){
    font-size: 0.4rem;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 0.6rem;
  }
  .nickName span:nth-child(2){
    font-size: 0.35rem;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 1.8rem;
    color: #9999a5;
  }
  .nickName .headImg{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 0.53rem;
    background-color: chocolate;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 0.45rem;
  }
  .telNum{
    width: 100%;
    height: 1.44rem;
    background-color: white;
    position: relative;
    margin-top: 2px;
  }
  .telNum span:nth-child(1){
    font-size: 0.4rem;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 0.6rem;
  }
  .telNum input{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 0.55rem;
    height: 1rem;
    line-height: 1rem;
    border: none;
    font-size: 0.43rem;
    width: 2.6rem;
    color: #cccfda;
  }
  .info{
    width: 100%;
    height: 1.2rem;
    position: relative;
  }
  .info h3{
    font-size: 0.32rem;
    color: #999999;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    left: 0.53rem;
  }
  .infoitem{
    position: relative;
    width: 100%;
    height: 6.06rem;
    background-color: white;
  }
  .infoitem textarea{
    width: 8.4rem;
    height: 2.3rem;
    position: absolute;
    top: 0.46rem;
    left: 0.46rem;
    font-size: 0.37rem;
    border: none;
  }
  .infoitem .camera{
    position: absolute;
    width: 2.46rem;
    height: 2.46rem;
    border: 1px dashed gray;
    border-radius: 10px;
    top: 2.83rem;
    left: 0.4rem;
  }
  .camera img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 0.91rem;
    height: 0.8rem;
  }
  .infoitem p{
    position: absolute;
    bottom: 0;
    height: 0.86rem;
    line-height: 0.86rem;
    left: 0.46rem;
  }
  .bottom{
    width: 100%;
    height: 5.8rem;
    position: relative;
  }
  .bottom .sign{
    width: 8.53rem;
    height: 1.2rem;
    position: absolute;
    background-color: #f2473d;
    top: 0.53rem;
    left: 50%;
    transform: translate(-50%,0);
    border-radius: 0.24rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1.2rem;
    color: white;
  }
  .bottom .p1{
    width: 6.1rem;
    font-size: 0.35rem;
    position: absolute;
    top: 4.6rem;
    left: 50%;
    transform: translate(-50%,0);
  }
  .bottom .p2{
    width: 5.3rem;
    font-size: 0.35rem;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translate(-50%,0);
  }
</style>
