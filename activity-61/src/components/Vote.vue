<template>
	<div class="vote">
		<div class="nav">
			<h1><span>0001</span>号&nbsp;&nbsp;&nbsp;&nbsp;<span>丁小通</span></h1>
			<div class="peopleMsg">
				<div class="rank">排名：<span>11</span></div>
				<div class="voteNum">票数：<span>22</span></div>
			</div>
		</div>
		<div class="container">
			<div class="peopleImg">
				<img src="../assets/0.jpg" alt="" />
			</div>
			<div class="btn"><button>我要投票</button></div>
			<div class="btn"><button>我要参加</button></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'vote',
		data() {
			return {
				activityId: this.$route.params.activityId,
			}
		},
		methods: {
			func: function() {
				location.hash = '/join';
			}

		}
		/*create: function(){
			this.$http.get("",{activityId:this.activityId}),
		}*/
	}
</script>

<style lang="scss" scoped>
	.vote {
		.nav {
			width: 100%;
			background-color: #CCCCCC;
			h1 {
				font-size: 1.5em;
				font-weight: 700;
				height: 50px;
				line-height: 50px;
				background-color: cornflowerblue;
				color: #FFFFFF;
				text-align: center;
			}
			.peopleMsg {
				height: 50px;
				line-height: 50px;
				padding: 0 15px;
				background-color: #fff;
				margin-bottom: 20px;
				border-bottom: 1px solid #C4C4C4;
			}
			.rank {
				float: left;
			}
			.voteNum {
				float: right;
			}
		}
		.container {
			width: 100%;
			.peopleImg {
				width: 80%;
				height: auto;
				margin: 0 auto 20px;
				img {
					width: 100%;
					height: auto;
					vertical-align: middle;
				}
			}
			.btn {
				margin: 10px;
				button {
					width:100%;
					height: 50px;
					line-height: 50px;
					border:1px solid cornflowerblue;
					background-color: cornflowerblue;
					box-sizing: border-box;
					color:#FFFFFF;
				}
				button:hover{
					background-color: #719ef1;
				}
			}
		}
	}
</style>