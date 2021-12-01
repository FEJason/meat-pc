// 金额过滤(截取保留两位小数)
function filterAmount(value) {
  if (value !== undefined) {
		let v = Number(value).toFixed(8)
		return v.substring(0, v.indexOf('.') + 3)
	}
}

export default filterAmount;