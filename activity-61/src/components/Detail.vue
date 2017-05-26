<template>
  <div class="detail">
    <div class="serial">
      {{registrate.formatId}}
    </div>
    <div class="ticket_number">
       {{registrate.votes}}
    </div>
    <div class="detail_pic">
        <img :src="image.picUrl" v-for="image in registrate.activeUserPicDtos"/>
    </div>
    <div class="btn_box">
      <div class="detail_btn1" @click="vote">

      </div>
      <router-link to="/Join">
      <div class="detail_btn2"/>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        registrateId: this.$route.params.registrateId,
        registrate:{}
    }
  },
  methods:{
    back(){
      location.hash = '/join';

    },
    vote(){
      this.$http.post("/game-app/registrate/votes",{
          "activeId":"1",
          "activeRegistrateId":this.registrateId,
          "sourceUser":window.$sourceUserToken, // TODO
          "voteUser":window.$userToken, //TODO
      }).then((res)=>{
          if(res.data.code == '100063'){
            alert('当天超过投票次数,限制每天三次,同一个作品每天一次');
          } else {
            alert("投票成功");// TODO
            this.registrate.votes++;// TODO
          }
      })
    }

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
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "../../static/css/swiper.css";
  $font-size-base:75px;
  @function pxTorem($px) {
      @return $px / $font-size-base * 1rem;
  }
  .detail{
    background:  url("../assets/detail_bg.jpg") no-repeat center;
    height:pxTorem(1323px) ;
    width:pxTorem(750px) ;
    background-size: 100%;
    color: #ffffff;
    font-size: pxTorem(42px) ;
    .serial{
      float: left;
      margin-top:  pxTorem(91px) ;
      margin-left: pxTorem(25px) ;
    }
    .ticket_number{
      float: right;
      margin-top:  pxTorem(93px) ;
      margin-right: pxTorem(65px) ;
    }
    .detail_pic{
      position: absolute;
      width: pxTorem(630px);
      height:pxTorem(840px);
      background:red;
      margin-left: pxTorem(-315px);
      top:  pxTorem(190px);
      left: 50%;
    }
    .btn_box{
      position: absolute;
      left: 50%;
      bottom: pxTorem(120px);
      height:pxTorem(160px) ;
      width:pxTorem(633px) ;
      margin-left: pxTorem(-316.5px);
    }
    .detail_btn1,.detail_btn2{
      background:  url("../assets/detail_2.png") no-repeat center;
      height:pxTorem(70px) ;
      width:pxTorem(633px) ;
      background-size: 100%;
      margin-bottom: pxTorem(10px) ;
    }
    .detail_btn2{
      background:  url("../assets/detail_1.png") no-repeat center;
       background-size: 100%;
    }
  }
</style>
