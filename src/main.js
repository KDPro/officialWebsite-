//入口配置文件

// 添加依赖
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)


//引入babel-polyfill 解决IE浏览器兼容问题

// import 'babel-polyfill'



import axiosConfig from './axiosConfig.js'
import Velocity from 'velocity-animate'
Object.defineProperty(Vue.prototype, '$Velocity', { value: Velocity });
Object.defineProperty(Vue.prototype, '$axios', { value: axiosConfig });

//引入全局变量、方法
import util from './util.js'
Vue.use(util)


// 引入vue-amap地图组件
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: '300587de5456a07509bd511d9b1d0475',
  // 插件集合
  plugin: ['']
});





/*引入全局组件*/
import KdowInput from './components/KdowInput.vue'
import KdowForm from './components/KdowForm.vue'
import KdowTable from './components/KdowTable.vue'
import KdowDialog from './components/KdowDialog.vue'
import KdowMenu from './components/KdowMenu.vue'
import KdowFilpPages from './components/KdowFilpPages.vue'
import KdowHeader from './components/KdowHeader.vue'
import KdowLoginDialog from './components/KdowLoginDialog.vue'
import KdowFooter from './components/KdowFooter.vue'
import KdowDelet from './components/KdowDelet.vue'
import KdowProfile from './components/KdowProfile.vue'
import kdowUserHeader from './components/KdowUserHeader.vue'
import kdowUpphoto from './components/KdowUpphoto.vue'


/*注册全局组件*/
Vue.component("kdow-input",KdowInput)
Vue.component("kdow-form",KdowForm)
Vue.component("kdow-table", KdowTable)
Vue.component("kdow-dialog", KdowDialog)
Vue.component("kdow-menu", KdowMenu)
Vue.component("kdow-filp-pages", KdowFilpPages)
Vue.component("kdow-header", KdowHeader)
Vue.component("kdow-login-dialog", KdowLoginDialog)
Vue.component("kdow-footer",KdowFooter)
Vue.component("kdow-delet",KdowDelet)
Vue.component("kdow-profile",KdowProfile)
Vue.component("kdow-userheader",kdowUserHeader)
Vue.component("kdow-upphoto",kdowUpphoto)

/*引入全局插件*/
import Toast from './myPlugins/Toast/Toast.js'
import Alert from './myPlugins/Alert/Alert.js'
Vue.use(Toast)
Vue.use(Alert)


Vue.config.productionTip = false

//引入入口文件
import App from './App'

//引入路由文件
import routes from './routes'

import vuexConfig from './vuexConfig'

// 使用路由文件配置规则
const router = new VueRouter({
    routes: routes
})
const store = new Vuex.Store(vuexConfig)


new Vue({
  router: router,
  el: '#app',
  store: store,//用于vuex
  render: (h) => h(App)
})
