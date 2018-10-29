//http://blog.csdn.net/sinat_23900111/article/details/70140196?locationNum=11&fps=1

var util = require("md5.js")

var appId = "wx856c87d4f6615489"
var key = "aimofeiraimofeiraimofeiraimofeir"; //32位

function pay(ordersn, openid, attach,callback){
  //attach 1 充值   2下单
  var that = this
  getApp().Coca.http_get("Unifypay/getOrder", { ordersn: ordersn, openid: openid, attach: attach }, function (res) {

    if (res.appId) {
      
      wx.requestPayment(
        {
          'appId': res.appId,
          'timeStamp': res.timeStamp,
          'nonceStr': res.nonceStr,
          'package': res.package,
          'signType': 'MD5',
          'paySign': res.paySign,
          'success': function (res) {

            callback({code:200})

          },
          'fail': function (res) {
            callback({ code: 400 })
          },
          'complete': function (res) {
            wx.hideLoading()
          }
        })

    } else {

      getApp().Coca.toast(res.message)
    }
  })

  wx.showLoading({
    title: '加载中',
  })
}

//获取当前时间戳
function timeStamp() {
  var timestamp = Date.parse(new Date())
  timestamp = timestamp / 1000
  return timestamp.toString()
}

function nonceStr(){
  var random = parseInt(Math.random() * (99999 - 10000) + 10000)
  var nonce = util.hexMD5( random.toString() )
  return nonce
}

function paySign(appId, nonceStr, packages, timeStamp ){

  var str = "appId=" + appId + "&nonceStr=" + nonceStr + "&package=" + packages + "&signType=MD5&timeStamp=" + timeStamp + "&key=" + this.key

  var paySign = util.hexMD5(str)

  return paySign
}


module.exports = {
  pay: pay,
  timeStamp: timeStamp,
  nonceStr: nonceStr,
  paySign: paySign,
  appId: appId,
  key: key
}