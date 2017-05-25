<template>
  <div class="home">
    <div class="topPage">
      <p @click="func" class="join_btn"></p>
      <p class="rule_btn"></p>
      <div class="swiper-container banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul>
                <li>
                  <div class="gift_box">
                    <img src="../assets/gift_1.png" alt="">
                    <p>360儿童智能手表</p>
                  </div>
                  <div class="gift_box">
                    <img src="../assets/gift_2.png" alt="">
                    <p>步步高点读机</p>
                  </div>
                  <div class="gift_box">
                    <img src="../assets/gift_3.png" alt="">
                    <p>智能机器人</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="swiper-slide" style="background:yellow">slider2</div>
            <div class="swiper-slide">slider3</div>
          </div>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
      </div>
    </div>
    <div class="production">
     <input type="text" class="search" placeholder="请输入编号">
      <div class="pictice_box">
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
          <div class="vote_btn">
            
          </div>
        </div>
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
          <div class="vote_btn">
            
          </div>
        </div>
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
          <div class="vote_btn">
            
          </div>
        </div>
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
          <div class="vote_btn">
            
          </div>
        </div>
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
          <div class="vote_btn">
            
          </div>
        </div>
        <div class="pictice">
          <h3>1846号</h3>
          <div class="pic">
            
          </div>
          <div class="headPortrait">
            
          </div>
          <p class="name">多多妈妈</p>
          <p class="ticket">1000票</p>
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

    }
  },
  methods:{
    func:function(){
      location.hash = '/join';
    },
    bannerScroll(){
      var mySwiper = new Swiper('.swiper-container', {
       autoplay: 2000,//可选选项，自动滑动
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      })
    },
    /*活动查询接口*/
   queryActive:function(){
     /*  $.ajax({
        url: "http://10.1.16.22:9005/queryActive",
        type: "post",
        data: JSON.stringify({
          //"gameId":Vue.prototype.$gameId
          "gameId":1
        }),
        headers: {
            "Content-Type": "application/json",
        },
        success: function (data) {
            console.log(data);
            if (data.code == "000000") {

            }
        }
      })*/
    },

  },
  mounted:function(){
    
    this.queryActive();//活动查询接口
    this.bannerScroll();
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
      margin: pxTorem(160px) pxTorem(160px) 0;
      border: none;
      width: pxTorem(460px) ;
    }
    .pictice_box{
      height:  pxTorem(1730px) ;
      width: pxTorem(750px) ;
      margin-top: pxTorem(80px) ;
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
          background: red  url("../assets/logo.png") no-repeat center;
          background-size: 100%;
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
