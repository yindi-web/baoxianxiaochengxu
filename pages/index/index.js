//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    invitation_code:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function(options) {
    var that = this;
    this.data.invitation_code = options.invitation_code;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              // 小程序唯一标示
              appid: getApp().data.appid,
              // 小程序的 app secret
              secret: getApp().data.secret,
              grant_type: 'authorization_code',
              js_code: res.code
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function(openIdRes) {
              // 判断openId是否为空
              if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                wx.getUserInfo({
                  success: function(res) {
                    wx.request({
                      url: getApp().data.domain + 'login/get_openid',
                      data: {
                        openid: openIdRes.data.openid,
                        picurl: res.userInfo.avatarUrl,
                        username: res.userInfo.nickName,
                        invitation_code: that.data.invitation_code
                      },
                      method: 'POST',
                      header: {
                        'content-type': 'application/json'
                      },
                      success: function(res) {
                        if (res.data.code == 400) {
                          wx.navigateTo({
                            url: '../binding/binding?openid=' + openIdRes.data.openid,
                          })
                        } else {
                          wx.setStorageSync('openid', res.data.openid); //存储openid
                          wx.setStorageSync('uid', res.data.data);
                        }
                      }
                    })
                  }
                })
              }
            }
          })
        }
      }
    })
  },

  /**
   * 签到
   */
  qiandaoTouch:function(){
    var that = this
    var data = {
      user_id: wx.getStorageSync('uid')
    }
    getApp().Coca.http_get("index/qiandao", data, function (e) {
      if (e.code == 200) {
        getApp().Coca.toast(e.message)
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  }
})