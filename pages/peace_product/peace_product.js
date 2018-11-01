// pages/peace_product/peace_product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    urlHader: getApp().data.imageDomain
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
   * 产品 show
   */
  requestUrl: function () {
    var that = this
    var data = {
      user_id: wx.getStorageSync('uid'),
      username: that.data.username,
      sex: that.data.index + 1,
      birth: that.data.date
    }
    getApp().Coca.http_get("index/product_list", data, function (e) {
      if (e.code == 200) {
        that.setData({
          list: e.data
        })
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  },

  /**
   * 活动详情
   */
  detailTouch: function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../product_details/product_details?id=' + e.currentTarget.dataset.id,
    })
  }
})