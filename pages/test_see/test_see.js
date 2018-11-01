// pages/test_see/test_see.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.requestUrl();
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
   * 点击客户
   */
  yonghuTouch:function(e){
    wx.navigateTo({
      url: '../test_result/test_result?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 客户测验
   */
  requestUrl: function () {
    var that = this
    var data = {
      agent_id: this.data.id,
    }
    console.log(data)
    getApp().Coca.http_get("index/agent_user", data, function (e) {
      if (e.code == 200) {
        that.setData({
          list: e.data
        })
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  }
})