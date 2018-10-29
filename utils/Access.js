//获取定位权限
function getAuthor() {
  var that = this
  wx.getSetting({
    success(res) {
      //获取位置
      that._getScope('scope.userLocation', '需要获取您的地理位置才能使用小程序',res)
      //获取用户信息
      that._getScope('scope.userInfo', '需要获取您的用户信息才能使用小程序', res)
      //获取通讯地址
      // that._getScope('scope.chooseAddress', '需要获取您的通讯地址才能使用小程序', res)
      //获取发票抬头
      // that._getScope('scope.chooseInvoiceTitle', '需要获取您的发票抬头才能使用小程序', res)
      //获取运动步数
      // that._getScope('scope.getWeRunData', '需要获取您的运动步数才能使用小程序', res)
      //获取录音功能
      // that._getScope('scope.startRecord', '需要获取您的录音功能才能使用小程序', res)
      //获取保存到相册
      // that._getScope('scope.writePhotosAlbum', '需要获取您的相册才能使用小程序', res)
      //获取摄像头
      // that._getScope('scope.camera', '需要获取您的摄像头才能使用小程序', res)

    }
  })
}

//获取权限
function _getScope(content) {

  var that = this

  wx.showModal({
    title: '温馨提醒',
    content: content,
    cancelText: '不使用',
    confirmText: '获取权限',
    success: function (res) {
      if (res.confirm) {

        wx.openSetting({
          success: (res) => {

          }
        })

      } else if (res.cancel) {

      }
    }
  })
  
}

module.exports = {
  getAuthor: getAuthor,
  _getScope: _getScope,

}
