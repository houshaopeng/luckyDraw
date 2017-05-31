
import turnTableLogin from 'PAGE/sljr/turnTable/Login.vue'
import turnTableLuckdraw from 'PAGE/sljr/turnTable/LuckDraw.vue'
export default[
// 转盘抽奖页面
{
	path:'/login',
	name:'login',
	component: turnTableLogin,
},
{
	path:'/luckdraw',
	name:'luckdraw',
	component: turnTableLuckdraw,
},

{
	path:'*', redirect:'/login'
},
]

