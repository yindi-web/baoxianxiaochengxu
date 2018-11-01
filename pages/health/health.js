// pages/health/health.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picOneOne: '../../images/radio-check.png',
    ziOneOne: 'health_topic_single_font hover',
    picOneTow: '../../images/radio-uncheck.png',
    ziOneTow: 'health_topic_single_font',
    picOneThere: '../../images/radio-uncheck.png',
    ziOneThere: 'health_topic_single_font',
    picOneFour: '../../images/radio-uncheck.png',
    ziOneFour: 'health_topic_single_font',

    picTowOne: '../../images/radio-check.png',
    ziTowOne: 'health_topic_single_font hover',
    picTowTow: '../../images/radio-uncheck.png',
    ziTowTow: 'health_topic_single_font',
    picTowThere: '../../images/radio-uncheck.png',
    ziTowThere: 'health_topic_single_font',
    picTowFour: '../../images/radio-uncheck.png',
    ziTowFour: 'health_topic_single_font',

    picThereOne: '../../images/radio-check.png',
    ziThereOne: 'health_topic_single_font hover',
    picThereTow: '../../images/radio-uncheck.png',
    ziThereTow: 'health_topic_single_font',
    picThereThere: '../../images/radio-uncheck.png',
    ziThereThere: 'health_topic_single_font',
    picThereFour: '../../images/radio-uncheck.png',
    ziThereFour: 'health_topic_single_font',

    picFourOne: '../../images/radio-check.png',
    ziFourOne: 'health_topic_single_font hover',
    picFourTow: '../../images/radio-uncheck.png',
    ziFourTow: 'health_topic_single_font',
    picFourThere: '../../images/radio-uncheck.png',
    ziFourThere: 'health_topic_single_font',
    picFourFour: '../../images/radio-uncheck.png',
    ziFourFour: 'health_topic_single_font',

    picFiveOne: '../../images/checkbox-uncheck.png', //../../images/checkbox-check.png
    ziFiveOne: 'health_topic_single_font', //health_topic_single_font hover
    picFiveTow: '../../images/checkbox-uncheck.png',
    ziFiveTow: 'health_topic_single_font',
    picFiveThere: '../../images/checkbox-uncheck.png',
    ziFiveThere: 'health_topic_single_font',
    picFiveFour: '../../images/checkbox-uncheck.png',
    ziFiveFour: 'health_topic_single_font',
    picFiveFive: '../../images/checkbox-uncheck.png',
    ziFiveFive: 'health_topic_single_font',

    fiveData: [],
    oneData:'',
    towData:'',
    thereData:'',
    fourData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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

  },

  /**
   * 第一题
   */
  oneTouch: function(e) {
    switch (e.currentTarget.dataset.index) {
      case '1':
        this.data.oneData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picOneOne: '../../images/radio-check.png',
          ziOneOne: 'health_topic_single_font hover',
          picOneTow: '../../images/radio-uncheck.png',
          ziOneTow: 'health_topic_single_font',
          picOneThere: '../../images/radio-uncheck.png',
          ziOneThere: 'health_topic_single_font',
          picOneFour: '../../images/radio-uncheck.png',
          ziOneFour: 'health_topic_single_font',
        })
        break;
      case '2':
        this.data.oneData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picOneOne: '../../images/radio-uncheck.png',
          ziOneOne: 'health_topic_single_font',
          picOneTow: '../../images/radio-check.png',
          ziOneTow: 'health_topic_single_font hover',
          picOneThere: '../../images/radio-uncheck.png',
          ziOneThere: 'health_topic_single_font',
          picOneFour: '../../images/radio-uncheck.png',
          ziOneFour: 'health_topic_single_font',
        })
        break;
      case '3':
        this.data.oneData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picOneOne: '../../images/radio-uncheck.png',
          ziOneOne: 'health_topic_single_font',
          picOneTow: '../../images/radio-uncheck.png',
          ziOneTow: 'health_topic_single_font',
          picOneThere: '../../images/radio-check.png',
          ziOneThere: 'health_topic_single_font hover',
          picOneFour: '../../images/radio-uncheck.png',
          ziOneFour: 'health_topic_single_font',
        })
        break;
      case '4':
        this.data.oneData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picOneOne: '../../images/radio-uncheck.png',
          ziOneOne: 'health_topic_single_font',
          picOneTow: '../../images/radio-uncheck.png',
          ziOneTow: 'health_topic_single_font',
          picOneThere: '../../images/radio-uncheck.png',
          ziOneThere: 'health_topic_single_font',
          picOneFour: '../../images/radio-check.png',
          ziOneFour: 'health_topic_single_font hover',
        })
        break;
    }
  },

  /**
   * 第二题
   */
  towTouch: function(e) {
    switch (e.currentTarget.dataset.index) {
      case '1':
        this.data.towData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picTowOne: '../../images/radio-check.png',
          ziTowOne: 'health_topic_single_font hover',
          picTowTow: '../../images/radio-uncheck.png',
          ziTowTow: 'health_topic_single_font',
          picTowThere: '../../images/radio-uncheck.png',
          ziTowThere: 'health_topic_single_font',
          picTowFour: '../../images/radio-uncheck.png',
          ziTowFour: 'health_topic_single_font',

        })
        break;
      case '2':
        this.data.towData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picTowOne: '../../images/radio-uncheck.png',
          ziTowOne: 'health_topic_single_font',
          picTowTow: '../../images/radio-check.png',
          ziTowTow: 'health_topic_single_font hover',
          picTowThere: '../../images/radio-uncheck.png',
          ziTowThere: 'health_topic_single_font',
          picTowFour: '../../images/radio-uncheck.png',
          ziTowFour: 'health_topic_single_font',

        })
        break;
      case '3':
        this.data.towData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picTowOne: '../../images/radio-uncheck.png',
          ziTowOne: 'health_topic_single_font',
          picTowTow: '../../images/radio-uncheck.png',
          ziTowTow: 'health_topic_single_font',
          picTowThere: '../../images/radio-check.png',
          ziTowThere: 'health_topic_single_font hover',
          picTowFour: '../../images/radio-uncheck.png',
          ziTowFour: 'health_topic_single_font',

        })
        break;
      case '4':
        this.data.towData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picTowOne: '../../images/radio-uncheck.png',
          ziTowOne: 'health_topic_single_font',
          picTowTow: '../../images/radio-uncheck.png',
          ziTowTow: 'health_topic_single_font',
          picTowThere: '../../images/radio-uncheck.png',
          ziTowThere: 'health_topic_single_font',
          picTowFour: '../../images/radio-check.png',
          ziTowFour: 'health_topic_single_font hover',

        })
        break;
    }
  },

  /**
   * 第三题
   */
  thereTouch: function(e) {
    switch (e.currentTarget.dataset.index) {
      case '1':
        this.data.thereData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picThereOne: '../../images/radio-check.png',
          ziThereOne: 'health_topic_single_font hover',
          picThereTow: '../../images/radio-uncheck.png',
          ziThereTow: 'health_topic_single_font',
          picThereThere: '../../images/radio-uncheck.png',
          ziThereThere: 'health_topic_single_font',
          picThereFour: '../../images/radio-uncheck.png',
          ziThereFour: 'health_topic_single_font',
        })
        break;
      case '2':
        this.data.thereData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picThereOne: '../../images/radio-uncheck.png',
          ziThereOne: 'health_topic_single_font',
          picThereTow: '../../images/radio-check.png',
          ziThereTow: 'health_topic_single_font hover',
          picThereThere: '../../images/radio-uncheck.png',
          ziThereThere: 'health_topic_single_font',
          picThereFour: '../../images/radio-uncheck.png',
          ziThereFour: 'health_topic_single_font',
        })
        break;
      case '3':
        this.data.thereData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picThereOne: '../../images/radio-uncheck.png',
          ziThereOne: 'health_topic_single_font',
          picThereTow: '../../images/radio-uncheck.png',
          ziThereTow: 'health_topic_single_font',
          picThereThere: '../../images/radio-check.png',
          ziThereThere: 'health_topic_single_font hover',
          picThereFour: '../../images/radio-uncheck.png',
          ziThereFour: 'health_topic_single_font',
        })
        break;
      case '4':
        this.data.thereData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picThereOne: '../../images/radio-uncheck.png',
          ziThereOne: 'health_topic_single_font',
          picThereTow: '../../images/radio-uncheck.png',
          ziThereTow: 'health_topic_single_font',
          picThereThere: '../../images/radio-uncheck.png',
          ziThereThere: 'health_topic_single_font',
          picThereFour: '../../images/radio-check.png',
          ziThereFour: 'health_topic_single_font hover',
        })
        break;
    }
  },

  /**
   * 第四题
   */
  fourTouch: function(e) {
    switch (e.currentTarget.dataset.index) {
      case '1':
        this.data.fourData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picFourOne: '../../images/radio-check.png',
          ziFourOne: 'health_topic_single_font hover',
          picFourTow: '../../images/radio-uncheck.png',
          ziFourTow: 'health_topic_single_font',
          picFourThere: '../../images/radio-uncheck.png',
          ziFourThere: 'health_topic_single_font',
          picFourFour: '../../images/radio-uncheck.png',
          ziFourFour: 'health_topic_single_font',
        })
        break;
      case '2':
        this.data.fourData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picFourOne: '../../images/radio-uncheck.png',
          ziFourOne: 'health_topic_single_font',
          picFourTow: '../../images/radio-check.png',
          ziFourTow: 'health_topic_single_font hover',
          picFourThere: '../../images/radio-uncheck.png',
          ziFourThere: 'health_topic_single_font',
          picFourFour: '../../images/radio-uncheck.png',
          ziFourFour: 'health_topic_single_font',
        })
        break;
      case '3':
        this.data.fourData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picFourOne: '../../images/radio-uncheck.png',
          ziFourOne: 'health_topic_single_font',
          picFourTow: '../../images/radio-uncheck.png',
          ziFourTow: 'health_topic_single_font',
          picFourThere: '../../images/radio-check.png',
          ziFourThere: 'health_topic_single_font hover',
          picFourFour: '../../images/radio-uncheck.png',
          ziFourFour: 'health_topic_single_font',
        })
        break;
      case '4':
        this.data.fourData = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, user_id: wx.getStorageSync('uid') };
        this.setData({
          picFourOne: '../../images/radio-uncheck.png',
          ziFourOne: 'health_topic_single_font',
          picFourTow: '../../images/radio-uncheck.png',
          ziFourTow: 'health_topic_single_font',
          picFourThere: '../../images/radio-uncheck.png',
          ziFourThere: 'health_topic_single_font',
          picFourFour: '../../images/radio-check.png',
          ziFourFour: 'health_topic_single_font hover',
        })
        break;
    }
  },

  /**
   * 第五题
   */
  fiveTouch: function(e) {
    var a = true;
    var s = 0;
    for (var i = 0; i < this.data.fiveData.length; i++) {
      if (this.data.fiveData[i].index == e.currentTarget.dataset.index) {
        a = false;
        s = i;
      }
    }
    if (a) {
      var d = { problem_id: e.currentTarget.dataset.titleid, answer_id: e.currentTarget.dataset.id, index: e.currentTarget.dataset.index, user_id: wx.getStorageSync('uid') };
      this.data.fiveData.push(d);
    } else {
      this.data.fiveData.splice(s, 1)
    }
    switch (e.currentTarget.dataset.index) {
      case '1':
        if (a) {
          this.setData({
            picFiveOne: '../../images/checkbox-check.png',
            ziFiveOne: 'health_topic_single_font hover',
          })
        } else {
          this.setData({
            picFiveOne: '../../images/checkbox-uncheck.png',
            ziFiveOne: 'health_topic_single_font',
          })
        }
        break;
      case '2':
        if (a) {
          this.setData({
            picFiveTow: '../../images/checkbox-check.png',
            ziFiveTow: 'health_topic_single_font hover',
          })
        } else {
          this.setData({
            picFiveTow: '../../images/checkbox-uncheck.png',
            ziFiveTow: 'health_topic_single_font',
          })
        }
        break;
      case '3':
        if (a) {
          this.setData({
            picFiveThere: '../../images/checkbox-check.png',
            ziFiveThere: 'health_topic_single_font hover',
          })
        } else {
          this.setData({
            picFiveThere: '../../images/checkbox-uncheck.png',
            ziFiveThere: 'health_topic_single_font',
          })
        }
        break;
      case '4':
        if (a) {
          this.setData({
            picFiveFour: '../../images/checkbox-check.png',
            ziFiveFour: 'health_topic_single_font hover',
          })
        } else {
          this.setData({
            picFiveFour: '../../images/checkbox-uncheck.png',
            ziFiveFour: 'health_topic_single_font',
          })
        }
        break;
      case '5':
        if (a) {
          this.setData({
            picFiveFive: '../../images/checkbox-check.png',
            ziFiveFive: 'health_topic_single_font hover'
          })
        } else {
          this.setData({
            picFiveFive: '../../images/checkbox-uncheck.png',
            ziFiveFive: 'health_topic_single_font'
          })
        }
        break;
    }
  },

  /**
   * 获取题和答案
   */
  requestUrl: function () {
    var that = this
    var data = {
    }
    getApp().Coca.http_get("index/problem", data, function (e) {
      if (e.code == 200) {
        for(var i = 0;i < e.data.length;i ++){
          var a = e.data[i];
          switch(i){
            case 0:
              that.setData({
                titleOne:a.title,
                titleOneId:a.id
              })
              for (var j = 0; j < a.answer.length;j ++){
                var b = a.answer[j];
                switch(j){
                  case 0:
                    that.data.oneData = { problem_id: a.id, answer_id: b.id, user_id: wx.getStorageSync('uid') };
                    that.setData({
                      oneOne: b.title,
                      oneOneId: b.id
                    })
                    break;
                  case 1:
                    that.setData({
                      oneTow: b.title,
                      oneTowId: b.id
                    })
                    break;
                  case 2:
                    that.setData({
                      oneThere: b.title,
                      oneThereId: b.id
                    })
                    break;
                  case 3:
                    that.setData({
                      oneFour: b.title,
                      oneFourId: b.id
                    })
                    break;
                }
              }
              break;
            case 1:
              that.setData({
                titleTow: a.title,
                titleTowId: a.id
              })
              for (var j = 0; j < a.answer.length; j++) {
                var b = a.answer[j];
                switch (j) {
                  case 0:
                    that.data.towData = { problem_id: a.id, answer_id: b.id, user_id: wx.getStorageSync('uid') };
                    that.setData({
                      towOne: b.title,
                      towOneId: b.id
                    })
                    break;
                  case 1:
                    that.setData({
                      towTow: b.title,
                      towTowId: b.id
                    })
                    break;
                  case 2:
                    that.setData({
                      towThere: b.title,
                      towThereId: b.id
                    })
                    break;
                  case 3:
                    that.setData({
                      towFour: b.title,
                      towFourId: b.id
                    })
                    break;
                }
              }
              break;
            case 2:
              that.setData({
                titleThere: a.title,
                titleThereId: a.id
              })
              for (var j = 0; j < a.answer.length; j++) {
                var b = a.answer[j];
                switch (j) {
                  case 0:
                    that.data.thereData = { problem_id: a.id, answer_id: b.id, user_id: wx.getStorageSync('uid') };
                    that.setData({
                      thereOne: b.title,
                      thereOneId: b.id
                    })
                    break;
                  case 1:
                    that.setData({
                      thereTow: b.title,
                      thereTowId: b.id
                    })
                    break;
                  case 2:
                    that.setData({
                      thereThere: b.title,
                      thereThereId: b.id
                    })
                    break;
                  case 3:
                    that.setData({
                      thereFour: b.title,
                      thereFourId: b.id
                    })
                    break;
                }
              }
              break;
            case 3:
              that.setData({
                titleFour: a.title,
                titleFourId: a.id
              })
              for (var j = 0; j < a.answer.length; j++) {
                var b = a.answer[j];
                switch (j) {
                  case 0:
                    that.data.fourData = { problem_id: a.id, answer_id: b.id, user_id: wx.getStorageSync('uid') };
                    that.setData({
                      fourOne: b.title,
                      fourOneId: b.id
                    })
                    break;
                  case 1:
                    that.setData({
                      fourTow: b.title,
                      fourTowId: b.id
                    })
                    break;
                  case 2:
                    that.setData({
                      fourThere: b.title,
                      fourThereId: b.id
                    })
                    break;
                  case 3:
                    that.setData({
                      fourFour: b.title,
                      fourFourId: b.id
                    })
                    break;
                }
              }
              break;
            case 4:
              that.setData({
                titleFive: a.title,
                titleFiveId: a.id
              })
              for (var j = 0; j < a.answer.length; j++) {
                var b = a.answer[j];
                switch (j) {
                  case 0:
                    that.setData({
                      fiveOne: b.title,
                      fiveOneId: b.id
                    })
                    break;
                  case 1:
                    that.setData({
                      fiveTow: b.title,
                      fiveTowId: b.id
                    })
                    break;
                  case 2:
                    that.setData({
                      fiveThere: b.title,
                      fiveThereId: b.id
                    })
                    break;
                  case 3:
                    that.setData({
                      fiveFour: b.title,
                      fiveFourId: b.id
                    })
                    break;
                  case 4:
                    that.setData({
                      fiveFive: b.title,
                      fiveFiveId: b.id
                    })
                    break;
                }
              }
              break;
          }
        }
      } else {
        getApp().Coca.toast(e.message)
      }
    })
  },
  /**
   * 提交答案
   */
  tijiaoTouch: function(){
    if (this.data.oneData != '' && this.data.towData != '' && this.data.thereData != '' && this.data.fourData != '' && this.data.fiveData.length != 0){
      var that = this;
      var arr = [];
      arr.push(this.data.oneData);
      arr.push(this.data.towData);
      arr.push(this.data.thereData);
      arr.push(this.data.fourData);
      if (this.data.fiveData.length != 0) {
        var fiveData = '';
        var problem_id = this.data.fiveData[0].problem_id;
        var answer_id = '';
        for (var i = 0; i < this.data.fiveData.length; i++) {
          if (i == 0) {
            answer_id += this.data.fiveData[i].answer_id
          } else {
            answer_id += ',' + this.data.fiveData[i].answer_id
          }
        }
        fiveData = { problem_id: problem_id, answer_id: answer_id, user_id: wx.getStorageSync('uid') }
        arr.push(fiveData);
      }
      var str = JSON.stringify(arr);
      var data = {
        testing: str
      }
      getApp().Coca.http_get("index/add_user_testing", data, function (e) {
        if (e.code == 200) {
          wx.navigateBack({
          })
        } else {
          getApp().Coca.toast(e.message)
        }
      })
    }else{
      getApp().Coca.toast('请答题后提交');
    }
  }
})