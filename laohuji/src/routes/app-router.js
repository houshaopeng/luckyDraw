export default[
// 善林金融抽奖页面
{
	path:'/laohuji',
	name:'laohuji',
	meta:{
		title:'善林金融抽奖'
	},
	component:resolve=> require(['PAGE/sljr/laohuji.vue'],resolve)
},
{
	path:'*', redirect:'/laohuji'
},
]