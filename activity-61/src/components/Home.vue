<template>
  <div class="home">
    <div class="topPage">
      <h1>主页面</h1>
      <button @click="func">我要参加</button>
    </div>
    <div class="production">
      <h3>全部作品</h3>
      <span class="num">
        <input type="number" placeholder="请输入作品编号"/><span class="serch">搜索</span>
      </span>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
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
      location.hash = '/join/1111';
    },
    /*活动查询接口*/
    queryActive:function(){
      $.ajax({
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
      })
    },

  },
  mounted:function(){
    this.queryActive();//活动查询接口
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topPage{
    position: relative;
    width: 100%;
    background-color: #cccfda;
    height: 8rem;
  }
  .topPage button{
    position: absolute;
    width:4rem;
    top:4rem;
    left:50%;
    transform:translate(-50%, 0);
  }

  .production{
    width:100%;
    margin-top:0.13rem;
    background-color: #cccfda;
    position: relative;
    padding-top:2.5rem;
    padding-left:0.8rem;
    overflow:hidden;
  }
  .production h3{
    position:absolute;
    top: 0.4rem;
    font-size:0.4rem;
    text-align:center;
    left: 50%;
    transform:translate(-50%, 0);
  }
  .production .num{
    position:absolute;
    top: 2rem;
    left: 50%;
    transform:translate(-50%, 0);
    font-size:0.3rem;
  }
  .production .item{
    width:40%;
    height:5rem;
    margin-bottom:0.4rem;
    margin-right:0.4rem;
    background-color:gray;
    float:left;
  }
</style>
