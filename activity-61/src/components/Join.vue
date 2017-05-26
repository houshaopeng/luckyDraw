<template>
  <div class="join">
    <span class="joinNum">{{metrix.totalRegistrates}}</span>
    <span class="tikNum">{{metrix.totalVotesTime}}</span>
    <span class="openNUm">{{metrix.totalPageViews}}</span>

    <div class="Photo" @click="getPhoto()"></div>
    <img :src="imageUrl"/>
    <input type="text" name="" class="name" v-model="userName">
    <input type="number" name="" class="tel" v-model="telNum"></input>

    <button class="tijiao" @click="submitInfo"></button>
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
        userName:'',
        getserverId:'',
        metrix:{
        },
        imageUrl:'',
      }
    },
    methods:{
      setLength:function(num){
        if(this.telNum.length>=num){
          this.telNum = this.telNum.substring(0,num-1);
        }
      },
      //调用摄像头,本地相册,渲染并上传
      getPhoto:function(){
        //this.serverId = Vue.prototype.$getPhoto();
        //alert("123++++"+this.serverId);
        alert("调用摄像头开始");
        wx.chooseImage({
           count: 1, // 默认9
           sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
           success: function (res) {

               var localIds = res.localIds[0].toString(); //
               localIds = res.localIds;
               alert("返回图片本地IDlocalIds===!!!" + localIds);
               wx.uploadImage({
                   localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
                   isShowProgressTips: 1, // 默认为1，显示进度提示
                   success: function (res) {
                       var serverId = res.serverId; // 返回图片的服务器端ID
                       alert("返回在服务器上的地址serverId===!!!" + serverId);
                       this.$http.post("/game-app/file/upload",{
                        "acitveName":1,
                        "fileType":"png",
                        "mediaId":res.serverId,
                        "userToken":window.$userToken,
                       }).then((res)=>{
                           alert("diaoyong");
                           alert(res.data);
                           alert(JSON.stringify(res.data));
                          if(res.data.code == '000000') {
                              //
                              this.imageUrl=localIds[0]
                          } else {
                            alert("failed");
                          }
                       },(error)=>{
                          alert(error);
                          alert(JSON.stringify(error));
                       })



                   },
                   fail: function(error){
                       alert(error);
                       alert(JSON.stringify(error));
                   }
               });
           }
        });
      },

      submitInfo(){
        this.$http.post("/game-app/registrate",{
          "activeId":1,// TODO
          "mobileNo":this.telNum,
          "name":this.userName,
          "userToken":Vue.prototype.$userToken, // TODO
          "picUrl":this.imageUrl
      }).then((res)=>{
          if(res.data.code === '000000'){
            alert("chengong");
            // todo
            location.hash = '/Canvassing/'+res.data.data.id;
          } else {
            alert("错误信息");
          }
      })
      }


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
