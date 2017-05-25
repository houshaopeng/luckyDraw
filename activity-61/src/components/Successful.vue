<template>
	<div class="successful">
		<div class="castVote">
			<div class="bg">
				<div class="newsText"></div>
				<button @click="maskShow=!maskShow">拉票</button>&nbsp;&nbsp;
				<button>返回首页</button>
			</div>
		</div>
		<div class="masked" v-if="maskShow" @click="maskShow=!maskShow">
			<div class="masked_bg"></div>
			<div class="up_arrow">

				<img src="../assets/up_03.png" alt="" />

				<span class="up_text">喊朋友来搞事</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'successful',
		data() {
			return {
				maskShow: false
			}
		},
		methods: {
			func: function() {
				location.hash = '/join';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.successful {
		width: 100%;
		height: 100vh;
		background-color: lightblue;
		div.castVote {
			padding: 5vh 15px 0;
			.bg {
				height: 70vh;
				width: 90%;
				margin: 0 auto;
				background-color: lightcoral;
				text-align: center;
				padding-top: 5vh;
				.newsText {
					width: 80%;
					height: 50vh;
					background-color: #C0CCD1;
					margin: 0 auto 5vh;
				}
				button {
					padding: 1vh 0;
					width: 40%;
					font-size: 1.2em;
					border: 1px solid cornflowerblue;
					background-color: cornflowerblue;
					box-sizing: border-box;
					color: #FFFFFF;
				}
				button:hover {
					background-color: #719ef1;
				}
			}
		}
		.masked{
			width:100%;
			height:100vh;
			position: fixed;
			top:0;
			left:0;
			.masked_bg{
				width:100%;
				height:100vh;
				background-color: #000;
				opacity: .6;
			}
			.up_arrow{
				position: absolute;
				top:10%;
				right:10%;
				width:50%;
				img{
					width:100%;
				}
				.up_text{
					color: #ffffff;
					margin-left: -20%;
				}
			}
		}
	}
</style>