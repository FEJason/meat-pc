/**
 * 设置需要永久存储的状态，下次App启动需要取出赋值给state
 * 由于开发保存代码每次都会刷新页面，导致vuex被清空
 * 开发时可以配置需要永久存储的状态
 */
// import config from '@/common/config'

// 需要永久保存的数据
// 尝试获取本地是否存在lifeData变量
let lifeData = localStorage.lifeData ? JSON.parse(localStorage.lifeData) : {}

// 需要永久存储的状态名，且下次App启动需要取出的，在state中的变量名
let saveStateKeys = ['isLogin', 'lang']

// 保存变量到本地存储
const saveLifeData = (key, value) => {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifedate对象，将变量添加到对象中
		let tmp = lifeData
		// 第一次打开，不存在lifeData变量，默认{}空对象
		tmp = tmp ? tmp : {},
			tmp[key] = value
		// 所有需要存储的变量，都存在lifeData对象中
		
		localStorage.lifeData = JSON.stringify(tmp)
	}
}

export {
	lifeData,
	saveLifeData
}