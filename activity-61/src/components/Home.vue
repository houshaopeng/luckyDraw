<template>
  <div class="home">
    <div class="topPage">
      <router-link to="/Join">
      <p  class="join_btn"></p>
      </router-link>
      <p class="rule_btn" @click="getRule"></p>
      <div class="swiper-container banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li><!-- TODO -->
                  <div class="gift_box" v-for="item in prizes" >
                    <img :src="item.prizePicUrl" alt="">
                    <p>{{item.name}}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
      </div>
    </div>
    <div class="production">
      <input type="text" class="search" placeholder="请输入编号" @blur="findRegistrate" v-model="registrateId">

      <div class="pictice_box">
        <div class="pictice" v-for="item in registrates">
          <h3>{{item.formatId}}号</h3>
          <div class="pic" @click="getDetail(item.id)">
              <img :src="image.picUrl" v-for="image in item.activeUserPicDtos"/>
          </div>
          <div class="headPortrait">
            <img src="item.headUrl" />
          </div>
          <p class="name">{{item.name}}</p>
          <p class="ticket">{{item.votes}}票</p>
          <div class="vote_btn">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
       prizes :[],
       registrates: [],
       registrateId: "",

    }
  },
  methods:{

    // picticeList(){
    //   this.$http.post(
    //     // "http://shanlingame.oneforce.cn/game-app/registrate",
    //     "/game-app/seacherRegistrate",
    //     {
    //       // "userToken":"123",
    //       "direction":false,
    //       "id":"1",
    //       "pageNum":"1",
    //       "pageSize":"100",
    //       "sortName":"createdAt",
    //     },
    //   ).then((res)=>{
    //     console.log(res);
    //   },(res)=>{
    //     alert("error")
    //   })
    // },
    // 轮播滚动
    bannerScroll(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      })
    },
    /*规则查询*/
    getRule(){
      location.hash = 'Rule'
    },
    /*跳转到详情页*/
    getDetail(registrateId){
      location.hash = '/Detail/'+registrateId;
    },
    findRegistrate(){
        this.$http.post("/game-app/queryRegistrateDetail",{id:this.registrateId}).then(function(res){
            if(res.data.code != '000000'){
              alert(this.registrateId + "不存在")
            } else {
              location.hash='/Detail/'+this.registrateId;
            }
        })
    },
    initPrize(){
      this.$http.post("/game-app/queryAllPrize").then((res)=>{
        console.log(res.data);
        this.prizes = res.data.data;
      })
    },
    initRegistrate(){
      this.$http.post("/game-app/listRegistrate",{
        "direction":false,
        "id":1,
        "pageNum":"1",
        "pageSize":"10",
        "sortName":"votes"
      }).then((res)=>{
        this.registrates = res.data.registrateDtoList;
      })
    }

  },

  mounted:function(){

    // this.queryActive();    //活动查询接口
    // this.bannerScroll();
    // this.picticeList();
    this.initPrize();
    this.initRegistrate();
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
  .topPage{
    background:  url("../assets/home_bg.jpg") no-repeat center;
    height:pxTorem(1323px) ;
    width:pxTorem(750px) ;
    background-size: 100%;
    .rule_btn{
      background:  url("../assets/active_rule.png") no-repeat center;
      height:pxTorem(42px) ;
      width:pxTorem(179px) ;
      background-size: 100%;
      position: absolute;
      top: pxTorem(30px) ;
      right: pxTorem(30px) ;
    }
    .banner{
      width: pxTorem(750px) ;
      height: pxTorem(205px) ;
      position: absolute;
      top: pxTorem(1125px) ;
      .gift_box{
        text-align: center;
        display: inline-block;
        width: pxTorem(240px) ;
        height: 100%;
        p{
          margin-top:  pxTorem(-10px) ;
          color: #ffffff;
        }
      }
    }
  }

  .topPage .join_btn{
    background:  url("../assets/join_btn.png") no-repeat center;
    height:pxTorem(79px) ;
    width:pxTorem(302px) ;
    background-size: 100%;
    position: absolute;
    top: pxTorem(850px) ;
    left:50%;
    margin-left: pxTorem(-151px) ;
  }

  .production{
    background:  url("../assets/all_show-bg.jpg") no-repeat center;
    height:pxTorem(2069px) ;
    width:pxTorem(750px) ;
    background-size: 100%;
    .search{
      margin: pxTorem(160px) 0  0 pxTorem(160px) ;
      border: none;
      width: pxTorem(460px) ;
    }
    .pictice_box{
      height:  pxTorem(1730px) ;
      width: pxTorem(750px) ;
      margin-top: pxTorem(80px) ;
      background:red;
      .pictice{
        float: left;
        width: pxTorem(336px);
        height: pxTorem(542px);
        margin:pxTorem(19px);
        background:  url("../assets/pictice.png") no-repeat center;
        background-size: 100%;
        text-align: center;
        h3{
          margin-top: pxTorem(10px);
          font-weight: bloder;

          color: #ffffff;
        }
        .pic{
          margin: pxTorem(45px) auto;
          width: pxTorem(293px);
          background:  url("../assets/pic.jpg") no-repeat center;
          background-size: 100%;
          height: pxTorem(314px);
        }
        .headPortrait{
          width: pxTorem(60px);
          float: left;
          height: pxTorem(60px);

          margin: pxTorem(-30px)  pxTorem(10px) 0 pxTorem(20px);
          border-radius: 50%;
          /* background: red  url("../assets/logo.png") no-repeat center; */
          background-size: 100%;
          overflow:hidden;
        }
        .headPortrait img{
          width:100%;
          height:100%;
        }
        .name{
          text-align: left;
          color: #828282;
          line-height:  pxTorem(60px);
          margin-top:  pxTorem(-17px);
          padding-left:  pxTorem(50px);
        }
        .ticket{
          float: left;
          text-align: left;
          margin-top: pxTorem(5px);
          margin-left: pxTorem(23px);
          color: #007fd0;
        }
        .vote_btn{
          width: pxTorem(90px);
          height: pxTorem(36px);
          margin:pxTorem(5px) pxTorem(19px);
          float: right;
          background:  url("../assets/vote_bg.png") no-repeat center;
          background-size: 100%;
        }
      }
    }
  }


</style>
