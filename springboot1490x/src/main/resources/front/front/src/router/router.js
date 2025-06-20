import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import wenzhangleixingList from '../pages/wenzhangleixing/list'
import wenzhangleixingDetail from '../pages/wenzhangleixing/detail'
import wenzhangleixingAdd from '../pages/wenzhangleixing/add'
import wenzhangxinxiList from '../pages/wenzhangxinxi/list'
import wenzhangxinxiDetail from '../pages/wenzhangxinxi/detail'
import wenzhangxinxiAdd from '../pages/wenzhangxinxi/add'
import wenzhangjubaoList from '../pages/wenzhangjubao/list'
import wenzhangjubaoDetail from '../pages/wenzhangjubao/detail'
import wenzhangjubaoAdd from '../pages/wenzhangjubao/add'
import jinggaoxinxiList from '../pages/jinggaoxinxi/list'
import jinggaoxinxiDetail from '../pages/jinggaoxinxi/detail'
import jinggaoxinxiAdd from '../pages/jinggaoxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'wenzhangleixing',
					component: wenzhangleixingList
				},
				{
					path: 'wenzhangleixingDetail',
					component: wenzhangleixingDetail
				},
				{
					path: 'wenzhangleixingAdd',
					component: wenzhangleixingAdd
				},
				{
					path: 'wenzhangxinxi',
					component: wenzhangxinxiList
				},
				{
					path: 'wenzhangxinxiDetail',
					component: wenzhangxinxiDetail
				},
				{
					path: 'wenzhangxinxiAdd',
					component: wenzhangxinxiAdd
				},
				{
					path: 'wenzhangjubao',
					component: wenzhangjubaoList
				},
				{
					path: 'wenzhangjubaoDetail',
					component: wenzhangjubaoDetail
				},
				{
					path: 'wenzhangjubaoAdd',
					component: wenzhangjubaoAdd
				},
				{
					path: 'jinggaoxinxi',
					component: jinggaoxinxiList
				},
				{
					path: 'jinggaoxinxiDetail',
					component: jinggaoxinxiDetail
				},
				{
					path: 'jinggaoxinxiAdd',
					component: jinggaoxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
