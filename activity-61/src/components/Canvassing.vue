<template>
  <div class="canvassing">
    <!-- <div class="back_home" @click="backHome"> -->

    <!-- </div> -->
    <div class="number">
      您的编号为{{registrate.formatId}}号
    </div>
    <div class="canvassing_pic">
         <img :src="image.picUrl" v-for="image in registrate.activeUserPicDtos"/>

    </div>
    <div class="btn_box">
      <div class="canvassing_btn1" @click="getMask">

      </div>
      <router-link to="/home">
      <div class="canvassing_btn2" >
      </div>
      </router-link>
    </div>
    <div class="mask" v-show="isMask" @click="dispearMask">

    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isMask : false,
      registrateId:this.$route.params.registrateId,
      registrate:{}
    }
  },
  methods:{
    /*弹出层消失*/
    dispearMask(){
      this.isMask = false;
    },
    /*拉票*/
    getMask(){
      this.isMask = true;
    },
    /*回到首页*/
    backHome(){
      location.hash = 'Home';
    },
  },
  mounted:function(){
        this.$http.post("/game-app/queryRegistrateDetail",{id:this.registrateId}).then(function(res){
            if(res.data.code != '000000'){
              alert(this.registrateId + "不存在")
            } else {
              this.registrate = res.data.data;
            }
        })
        window.$detailId=this.registrateId;
        window.getWxJsToken();

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../../static/css/swiper.css";
  $font-size-base:75px;
  @function pxTorem($px) {
      @return $px / $font-size-base * 1rem;
  }
  .canvassing{
    background:  url("../assets/canvassing_bg.jpg") no-repeat center;
    height:pxTorem(1218px) ;
    width:pxTorem(750px) ;
    background-size: 100%;
    color: #ffffff;
    padding-top: pxTorem(105px) ;
    font-size: pxTorem(42px) ;
    text-align: center;
    .back_home{
      background:  url("../assets/back_home.png") no-repeat center;
      height:pxTorem(40px) ;
      width:pxTorem(158px) ;
      background-size: 100%;
      position: absolute;
      right:  pxTorem(30px) ;
      top: pxTorem(30px) ;

    }
    .number{
      height:pxTorem(50px) ;
      width:pxTorem(750px) ;
    }
    .canvassing_pic{
      position: absolute;
      width: pxTorem(630px);
      height:pxTorem(840px);
      background:#cacaca;
      margin-left: pxTorem(-315px);
      top:  pxTorem(190px);
      left: 50%;
      background-size:100%;
      overflow: hidden;
    }
    .canvassing_pic img{
      width:100%;
      height:100%;
    }
    .btn_box{
      position: absolute;
      left: 50%;
      bottom: pxTorem(20px);
      height:pxTorem(160px) ;
      width:pxTorem(633px) ;
      margin-left: pxTorem(-316.5px);
    }
    .canvassing_btn1,.canvassing_btn2{
      float: left;
      margin-left: pxTorem(50px) ;
      background:  url("../assets/canvassing1.png") no-repeat center;
      height:pxTorem(60px) ;
      width:pxTorem(240px) ;
      background-size: 100%;
      margin-bottom: pxTorem(10px) ;
    }
    .canvassing_btn2{
      background:  url("../assets/canvassing2.png") no-repeat center;
       background-size: 100%;
    }
    .mask{
      background:  url("../assets/mask_bg.png") no-repeat center;
      height:pxTorem(1323px) ;
      width:pxTorem(750px) ;
      background-size: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
