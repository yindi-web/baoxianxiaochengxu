// pages/validate_agent/validate_agent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 验证代理人 
   */
  quedingTouch: function(e){
    var that = this
    if (e.detail.value.username == ''){
      getApp().Coca.toast('工号不可以为空');
    } else if (e.detail.value.password == ''){
      getApp().Coca.toast('密码不可以为空');
    }else{
      var data = {
        work_number: e.detail.value.username,
        password: e.detail.value.password
      }
      console.log(data)
      getApp().Coca.http_get("index/verification_agent", data, function (e) {
        if (e.code == 200) {
          wx.navigateTo({
            url: '../agent_core/agent_core?id='+e.data.id,
          })
        }else{
          getApp().Coca.toast(e.message)
        }
      })
    }
  }
})