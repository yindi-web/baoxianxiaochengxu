// pages/test_result/test_result.js
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
   * 测验结果
   */
  requestUrl: function () {
    var that = this
    var data = {
      user_id: this.data.id,
    }
    console.log(data)
    getApp().Coca.http_get("index/testing", data, function (e) {
      if (e.code == 200) {
        console.log(e)
        that.setData({
          username: e.user.username,
          age: e.user.birth,
          sex: e.user.sex,
          phone: e.user.mobile
        })
        for(var i = 0; i < e.data.length; i++){
          var a = e.data[i];
          switch(i){
            case 0:
              that.setData({
                oneTitle: a.problem,
                oneDA: a.answer[0].title
              })
              break;
            case 1:
              that.setData({
                towTitle: a.problem,
                towDA: a.answer[0].title
              })
              break;
            case 2:
              that.setData({
                thereTitle: a.problem,
                thereDA: a.answer[0].title
              })
              break;
            case 3:
              that.setData({
                fourTitle: a.problem,
                fourDA: a.answer[0].title
              })
              break;
            case 4:
              that.setData({
                fiveTitle: a.problem,
                fiveDA: a.answer[0].title
              })
              break;
          }
        }
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  }
})