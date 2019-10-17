// pages/binding2/binding2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    mobel: '',
    yanzhengmaBtn: '获取验证码',
    yanzhengmaTouch: 'yanzhengmaTouch',
    mtype: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.openid = options.openid
    this.data.mtype = options.type;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 验证表单
   */
  loginAction: function (e) {
    var phone = e.detail.value.phone
    var yanzhengma = e.detail.value.yanzhengma
    if (getApp().Coca.validate_phone(phone) == false) {
      getApp().Coca.toast("手机号不正确")
    } else if (yanzhengma == '') {
      getApp().Coca.toast("验证码不可以为空")
    } else {
      if (this.data.mtype == 1) {
        this.requestUrl2(phone, yanzhengma);
      } else {
        this.requestUrl(phone, yanzhengma);
      }
    }
  },
  /**
   * 获取用户输入的手机号
   */
  mobelValue: function (e) {
    this.data.mobel = e.detail.value;
  },
  /**
   * 获取验证码
   */
  yanzhengmaTouch: function () {
    var phone = this.data.mobel
    if (getApp().Coca.validate_phone(phone) == false) {
      getApp().Coca.toast("手机号不正确")
    } else {
      this.yanzhengmaRequestUrl(phone)
    }
  },
  yanzhengmaRequestUrl: function (phone) {
    var that = this
    var data = {
      mobile: phone,
      type: 'reg'
    }
    getApp().Coca.http_get("login/get_code", data, function (e) {
      getApp().Coca.timeout(60, function (time) {
        if (time == 0) {
          that.setData({
            yanzhengmaBtn: '获取验证码',
            yanzhengmaTouch: 'yanzhengmaTouch'
          });
        } else {
          that.setData({
            yanzhengmaBtn: time + 's',
            yanzhengmaTouch: ''
          });
        }
      })
    })
  },
  /**
   * 绑定手机号
   */
  requestUrl: function (phone, yanzhengma) {
    var that = this
    var data = {
      mobile: phone,
      openid: this.data.openid,
      code: yanzhengma
    }
    getApp().Coca.http_get("login/binding", data, function (e) {
      if (e.code == 200) {
        wx.navigateBack({

        })
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  },
  /**
   * 绑定手机号个人中心
   */
  requestUrl2: function (phone, yanzhengma) {
    var that = this
    var data = {
      mobile: phone,
      user_id: wx.getStorageSync('uid'),
      code: yanzhengma
    }
    getApp().Coca.http_get("index/update_mobile", data, function (e) {
      if (e.code == 200) {
        wx.navigateBack({

        })
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  }
})