// 界面相关工具类

/**
 * 显示普通toast（没有任何图标）
 */
function showToast(message) {
  wx.showToast({
    title: message,
    icon: 'none',
    mask: true
  })
}

module.exports = {
  // 显示普通toast（没有任何图标）
  showToast: showToast
}