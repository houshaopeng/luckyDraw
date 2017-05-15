export default[
// 善林金融抽奖页面
{
	path:'/sljractivite',
	name:'sljractivite',
	meta:{
		title:'善林金融抽奖'
	},
	component:resolve=> require(['PAGE/sljr/SljrActivite.vue'],resolve)
},
{
	path:'*', redirect:'/sljractivite'
},
]