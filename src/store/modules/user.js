import store from '@/store'
console.log(lifeData.lang)

import {
	lifeData,
	saveLifeData
} from '@/store/life'

export default {
	namespaced: true,
	state: {
		// 是否登录，如果storage有值，取storage
		isLogin: lifeData.isLogin || false,
		lang: lifeData.lang || 'en_US',
	},
	// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
	mutations: {
		SET_ISLOGIN(state, val) {
			state.isLogin = val
		},
		SET_LANG(state, val) {
			state.lang = val
			saveLifeData('lang', val)
		}
	},
	actions: {
		/* 获取购物车列表 */
		// getCartList({ commit, state }) {
			
		// },
		/* 登录 */
	}
}
