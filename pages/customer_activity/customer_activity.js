// pages/customer_activity/customer_activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    ri:'customer_activity_date_block hover',
    zhou:'customer_activity_date_block',
    yue:'customer_activity_date_block'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
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
   * 客户活动
   */
  requestUrl: function () {
    var that = this
    var data = {
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
   * 列表切换
   */
  liebiaoTouch: function(e){
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index;
    switch (index){
      case '1':
        this.setData({
          ri: 'customer_activity_date_block hover',
          zhou: 'customer_activity_date_block',
          yue: 'customer_activity_date_block'
        })
        break;
      case '2':
        this.setData({
          ri: 'customer_activity_date_block',
          zhou: 'customer_activity_date_block hover',
          yue: 'customer_activity_date_block'
        })
        break;
      case '3':
        this.setData({
          ri: 'customer_activity_date_block',
          zhou: 'customer_activity_date_block',
          yue: 'customer_activity_date_block hover'
        })
        break;
    }
  }
})