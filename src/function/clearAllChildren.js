// 递归清除数组每个元素下的children为空对象
const clearAllChildren = function (items, childrenName = 'children') {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item && item[childrenName]) {
      if (item[childrenName].length === 0) {
        delete item[childrenName]
      } else {
        clearAllChildren(item[childrenName], childrenName)
      }
    }
  }
  return items
}

export default clearAllChildren
