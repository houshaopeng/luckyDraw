<template>
  <div class="join">
    <span class="joinNum">{{metrix.totalRegistrates}}</span>
    <span class="tikNum">{{metrix.totalVotesTime}}</span>
    <span class="openNUm">{{metrix.totalPageViews}}</span>

    <div class="Photo" @click="getPhoto()" >
      <img :src="imageUrl"/>
    </div>

    <input type="text" name="" class="name" v-model="userName" placeholder="请输入姓名" maxlength="10">
    <input type="number" name="" class="tel" v-model="telNum" placeholder="请输入手机号码"></input>

    <span class="tijiao" @click="submitInfo"></span>
    <router-link to="/home">
    <span class="back_home" ></span>
    </router-link>
    <button class="guize" ></button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'join',
    data(){
      return {
        telNum:'',
        userName:window.$nickName,
        metrix:{
        },
        imageUrl:'',
      }
    },
    methods:{
      backHome(){
         location.hash = '/home';
      },
      setLength:function(num){
        if(this.telNum.length>=num){
          this.telNum = this.telNum.substring(0,num-1);
        }
      },
      //调用摄像头,本地相册,渲染并上传
      getPhoto:function(){
        //this.serverId = Vue.prototype.$getPhoto();
        //alert("123++++"+this.serverId);

        //alert("调用摄像头开始");
        var that = this;
        wx.chooseImage({
           count: 1, // 默认9
           sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
           success: function (res) {
               var localIds = res.localIds[0].toString(); //
               localIds = res.localIds;
               //alert(localIds);
               //alert(window.__wxjs_is_wkwebview );
                  if(window.__wxjs_is_wkwebview ){
                    //alert(wx.getLocalImgData);
                    //alert(JSON.stringify(wx.getLocalImgData));
                    wx.getLocalImgData({
                        localId: localIds[0], // 图片的localID
                        success: function (res) {
                            //that.imageUrl = res.localData; // localData是图片的base64数据，可以用img标签显示
                            //alert("下载陈宫")
                            var base64 = res.localData;
                            that.$http.post("/game-app/file/uploadIosFile",{
                                  "acitveName":"1",
                                  "fileType":"png",
                                  "file" : base64
                                 }).then((res)=>{
                                     //alert("diaoyong");
                                     //alert(JSON.stringify(res.data));
                                    if(res.data.code == '000000') {
                                        //alert("上传后台成功，可以渲染");
                                        /*this.imageUrl=localId;//渲染上去
                                        this.fileUrl=res.data.fileInfo.fileUrl;*/
                                        //alert(this.fileUrl);
                                        that.imageUrl = base64;
                                        that.fileUrl=res.data.fileInfo.fileUrl;

                                    } else {
                                      alert(res.data.message);

                                    }
                                 },(error)=>{
                                    //alert(JSON.stringify(error));
                                    alert("服务器正忙,稍后重试");
                                    //alert("上传后台失败,稍后重试");
                                    //alert(JSON.stringify(error));
                                 })

                        },
                        fail: function(error){
                          alert("图片上传失败，稍后重试");
                        }
                    });
                  }else{
                     wx.uploadImage({
                         localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
                         isShowProgressTips: 1, // 默认为1，显示进度提示
                         success: function (res) {
                             var serverId = res.serverId; // 返回图片的服务器端ID
                             //alert("返回在服务器上的地址serverId===!!!" + serverId);
                             /*alert(JSON.stringify({
                              "acitveName":1,
                              "fileType":"png",
                              "mediaId":res.serverId,
                              "userToken":window.$userToken,
                             }));*/
                             that.uploadMediaId(serverId,localIds);
                         },
                         fail: function(error){
                             //alert(JSON.stringify(error));
                             alert("图片上传失败，稍后重试")
                         }
                     });
             }

           }
        });
      },
      uploadMediaId(mediaId,localId){
        this.$http.post("/game-app/file/upload",{
              "acitveName":"1",
              "fileType":"png",
              "mediaId":mediaId,
              "userToken": window.$userToken,
             }).then((res)=>{
                 //alert("diaoyong");
                 //alert(JSON.stringify(res.data));
                if(res.data.code == '000000') {
                    //alert("上传后台成功，可以渲染");
                    this.imageUrl=localId;//渲染上去
                    this.fileUrl=res.data.fileInfo.fileUrl;

                    //alert(this.fileUrl);
                } else {
                  //alert("failed");
                  alert(res.data.message);
                }
             },(error)=>{
                alert("服务器正忙,稍后重试");
                //alert("上传后台失败,稍后重试");
                //alert(JSON.stringify(error));
             })
      },
      submitInfo(){
        //alert("确认提交了")
        /*alert(JSON.stringify({
          "activeId":1,// TODO
          "mobileNo":this.telNum,
          "name":this.userName,
          "userToken":window.$userToken, // TODO
          "picUrl":this.fileUrl
        }))*/
        if(this.userName  && this.imageUrl){
          var rule = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\d{8}$/i;
          if(this.telNum && rule.test(this.telNum)){
              this.$http.post("/game-app/registrate",{
                "activeId":1,// TODO
                "mobileNo":this.telNum,
                "name":this.userName,
                "userToken":window.$userToken, // TODO
                "picUrl":this.fileUrl
              }).then((res)=>{
                if(res.data.code === '000000'){
                  //alert("chengong");
                  // todo
                  alert("微信公众号消息已发送至您的手机");
                  location.hash = '/Canvassing/'+res.data.data.id;

                } else {
                  alert(res.data.message);
                }
              },(error)=>{
                      //alert(JSON.stringify(error));
              })
          }else{
            alert("手机号码填写不正确")
          }
        }else{
          alert("请完善信息后再提交")
        }
      }
      //TODO,在这里拿到全局的activityID,这个是唯一的。
    },
    watch:{
      telNum:function(){
        if(this.telNum.length>11){
          return this.telNum=this.telNum.slice(0,11);
        }else{
          return  this.telNum;
        }
      }
    },
    mounted:function(){
      this.$http.post("/game-app/queryTotalTime").then((res)=>{
        this.metrix = res.data.data;
      })
      window.getWxJsToken();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
$font-size-base:75px;
@function pxTorem($px) {
    @return $px / $font-size-base * 1rem;
}
/* 最外层 */
.join{
  width:100%;
  height:17.64rem;
  background-image: url('http://marketactivity.oss-cn-shanghai.aliyuncs.com/%E5%85%AD%E4%B8%80/201705/b5fd2c69859e42a28d2a338168c276fcjoin_bg.jpg');
  background-size:100%;
  position:relative;
  overflow: hidden;

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
.Photo img{
  width:100%;
  height:100%;
}
/* input框 */
.join input{
  width:5.33rem;
  height:0.49rem;
  border-radius:0.24rem;
  border:none;
  position:absolute;
  left:2.8rem;
}
.name{
  top:6.93rem;
  padding: 0  0.2rem;
}
.tel{
  top:7.87rem;
  padding: 0  0.2rem;
}
.join .tijiao , .back_home{
  width:3.17rem;
  height:0.95rem;
  position:absolute;
  top:9.26rem;
}
.tijiao{
  background-image: url('../assets/join_tijiao.png') ;
  background-repeat: no-repeat;
  background-size:100%;
  left: pxTorem(100px) ;
}
.back_home{
   background: url('../assets/canvassing2.png') no-repeat;
   background-size:100%;
   right: pxTorem(100px) ;
}
.guize{
  width:3.13rem;
  height:0.85rem;
  position:absolute;
  background-color:transparent;
  background: url('../assets/join_guize.png') no-repeat;
  background-size:100%;
  border:none;
  top:12.5rem;
  left: 50%;
  transform:translate(-50%,0);
}
</style>
