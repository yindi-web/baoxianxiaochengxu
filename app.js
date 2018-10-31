//app.js
App({
  onLaunch: function() {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null
  },
  Coca: require("utils/Coca.js"),
  data: {
    domain: "http://app161.app.longcai.net/interfaces/",
    imageDomain: "http://app161.app.longcai.net",
    uid: '',
    openId: '',
    Coca: require("utils/Coca.js"),
    amapKey: '0f95435e87f3d9fd8db3cb44f479da50',
    appid:'wx3a051a251235af58',
    secret: 'f251f5d2733b45dedbcf3b482d78f132'
  }
})