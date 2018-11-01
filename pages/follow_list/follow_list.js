// pages/follow_list/follow_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agent_id:'',
    product_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.agent_id = options.agent_id;
    this.data.product_id = options.product_id;
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
   * 客户关注
   */
  requestUrl: function () {
    var that = this
    var data = {
      agent_id: this.data.agent_id,
      product_id: this.data.product_id
    }
    console.log(data)
    getApp().Coca.http_get("index/user_collection_list", data, function (e) {
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