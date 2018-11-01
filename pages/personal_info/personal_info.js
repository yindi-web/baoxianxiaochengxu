// pages/personal_info/personal_info.js
Page({
  data: {
    username: '',
    date: '1900-01-01',
    index: '',
    array: ['男', '女'],
    objectArray: [{
        id: 0,
        name: '男'
      },
      {
        id: 1,
        name: '女'
      }
    ]
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.data.index = e.detail.value;
    this.requestUrl();
  },
  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    this.setData(data);
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.data.date = e.detail.value;
    this.requestUrl();
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function (options){
    var that = this;
    that.setData({
      date: options.birth,
      index : options.sex-1,
      username : options.username
    })
  },
  /**
   * 修改昵称
   */
  usernameModify: function(e){
    var that = this;
    that.data.username = e.detail.value;
    that.requestUrl();
  },

  /**
   * 修改个人资料
   */
  requestUrl: function () {
    var that = this
    var data = {
      user_id: wx.getStorageSync('uid'),
      username: that.data.username,
      sex: that.data.index+1,
      birth: that.data.date
    }
    getApp().Coca.http_get("index/update_user", data, function (e) {
      if (e.code == 200) {
      }
    })
  }
})