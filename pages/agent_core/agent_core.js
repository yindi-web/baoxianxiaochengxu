// pages/agent_core/agent_core.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id
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
    return {
      title: '太平人寿',
      path: '../index/index?invitation_code='+this.data.id
    }
  },

  /**
   * 我的客户
   */
  customer_listTouch: function(){
    wx.navigateTo({
      url: '../customer_list/customer_list?id='+this.data.id,
    })
  },

  /**
   * 健康运动
   */
  customer_activityTouch: function(){
    wx.navigateTo({
      url: '../customer_activity/customer_activity?id=' + this.data.id,
    })
  },

  /**
   * 产品关注
   */
  customer_followTouch: function(){
    wx.navigateTo({
      url: '../customer_follow/customer_follow?id=' + this.data.id,
    })
  },

  /**
   * 客户测验
   */
  test_seeTouch: function() {
    wx.navigateTo({
      url: '../test_see/test_see?id=' + this.data.id,
    })
  },
  handleTapShareButton() {
    if (!((typeof wx.canIUse === 'function') && wx.canIUse('button.open-type.share'))) {
      wx.showModal({
        title: '当前版本不支持转发按钮',
        content: '请升级至最新版本微信客户端',
        showCancel: false
      })
    }
  }
})