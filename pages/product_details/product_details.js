// pages/product_details/product_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    myType: true,
    dianzanImg: '../../images/uncheck.png',
    dianzanZi: 'product_details_foot_fonts'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.id = options.id;
    this.requestUrl();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '太平人寿'
    }
  },

  /**
   * 点赞
   */
  dianzanTouch: function() {
    if (this.data.myType) {
      var that = this
      var data = {
        user_id: wx.getStorageSync('uid'),
        product_id: this.data.id
      }
      console.log(data)
      getApp().Coca.http_get("index/user_collection", data, function(e) {
        if (e.code == 200) {
          this.data.myType = false
          this.setData({
            dianzanImg: '../../images/check.png',
            dianzanZi: 'product_details_foot_fonts hover'
          })
        } else {
          getApp().Coca.toast(e.message)
        }
      })
    }
  },

  /**
   * 产品详情
   */
  requestUrl: function() {
    var that = this
    var data = {
      id: this.data.id
    }
    getApp().Coca.http_get("index/infos", data, function(e) {
      if (e.code == 200) {
        that.setData({
          myImg: getApp().data.imageDomain + e.data.picurl
        })
      } else {
        getApp().Coca.toast(e.message)
      }
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