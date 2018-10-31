// pages/personal_core/personal_core.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birth:'',
    sex:'',
    username:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestUrl()
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
   * 个人信息
   */
  gerenxinxiTouch: function(){
    console.log(this.data.birth,this.data.sex)
    wx.navigateTo({
      url: '../personal_info/personal_info?birth:'+this.data.birth+'&sex='+this.data.sex+'&username='+this.data.username
    })
  },

  /**
   * 个人中心接口
   */
  requestUrl: function (phone, yanzhengma) {
    var that = this
    var data = {
      user_id: wx.getStorageSync('uid')
    }
    getApp().Coca.http_get("index/user", data, function (e) {
      if (e.code == 200) {
        that.setData({
          picurl:e.data.picurl,
          username:e.data.username,
          birth:e.data.birth,
          sex:e.data.sex
        })
      }
    })
  }
})