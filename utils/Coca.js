var CheckUtil = require("CheckUtil.js")
var DateUtil = require("DateUtil.js")
var NetWorkUtil = require("NetWorkUtil.js")
var StringUtil = require("StringUtil.js")
var UIUtil = require("UIUtil.js")
var ViewUtil = require("ViewUtil.js")
var md5 = require("md5.js") 
var signKey = "2915c04256e2c72998158a5de09e16b5"


//获取当前时间戳
function getCurrentTimeStamp(){
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  return timestamp;
}
//时间string转时间戳
function getTimeStamp(stringTime){
  
  var timestamp = Date.parse(new Date(stringTime));
  timestamp = timestamp / 1000;
  
  return timestamp;
}

//时间戳转时间string
function getTime(number) {
  var n = number * 1000;
  var date = new Date(n);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ':';
  var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return (Y + M + D + " " + H + m)
}  


function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function toast(mes,bool){

  var icon = bool ? "/images/warning.png" : "/images/warning.png"
 
  wx.showToast({
    title: mes,
    duration: 2000,
    image: icon

  })
}


function http_get(url, data, callBack,hideHUD = true) {

  if (hideHUD == true) {
    wx.showLoading({
      title: '加载中',
    })
  }

  if (Object.keys(data).length > 0) {
    var sign = ""
    for (var Key in data) {
      sign += Key + '=' + data[Key] + '&'
    }
    sign = sign + signKey
    data["sign"] = md5.hexMD5(sign)
  }

  var that = this
  wx.request({
    url: getApp().data.domain + url,
    method: 'GET',
    data: data,
    header: {
      "Content-Type": "json"
    },
    success: function (res) {
      wx.hideLoading()
      console.log(res.data)
      callBack(res.data)
      wx.stopPullDownRefresh()
    },
    fail: function (error) {
      wx.hideLoading()
      that.toast("请下拉刷新在试下")
      wx.stopPullDownRefresh()
      callBack("400")
    }
  })
}
function http_post(url, data, callBack,hideHUD=true) {

  if (hideHUD == true){
    wx.showLoading({
      title: '加载中',
    })
  }
  
  if (Object.keys(data).length > 0){
    var sign = ""
    
    for (var Key in data) {
      sign += Key + '=' + data[Key] + '&'
    }
    sign = sign + signKey
    data["sign"] = md5.MD5(sign)
  }

  var that = this
  wx.request({
    url: getApp().data.domain + url,
    method: 'POST',
    data: this.json2Form(data),
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      wx.hideLoading()
      console.log(res.data)
      callBack(res.data)
      wx.stopPullDownRefresh()
      
    },
    fail: function (error) {
      wx.hideLoading()
      that.toast("请下拉刷新在试下")
      wx.stopPullDownRefresh()
      callBack("400")
    }
  })
}

function http_uploadFile(url, data, name, filePath, callBack){

  wx.showLoading({
    title: '加载中',
  })

  wx.uploadFile({
    url: getApp().data.domain + url,
    filePath: filePath,
    name: name,
    formData: data,
    success: function (res) {
      wx.hideLoading()
      console.log(res.data)
      callBack(res.data)
      
    },
    fail: function (error) {
      wx.hideLoading()
      callBack("400")
    }
  })
}

function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}  

function alert(title, mes, callBack){
  wx.showModal({
    title: title?title:'提示',
    content: mes?mes:'',
    cencelText:'取消',
    cancelColor:'#000000',
    confirmText:'确定',
    confirmColor:'#bed1e2',
    success: function (res) {
      if (res.confirm) {
        callBack()
      }
    }
  })
}

function alertMes(title,mes){
  wx.showModal({
    showCancel:false,
    title: title ? title : '提示',
    content: mes ? mes : '',
    confirmText: '确定',
    confirmColor: '#fc4805'
  })
}

// function validate_phone(phone){
//   var re = /^1\d{10}$/;
//   return re.test(phone)
// }
function validate_phone(phone) {
  // var re = /^\d{9}$/;
  // return re.test(phone)
  return true
}
function validate_number(num) {
  var re = /^[0-9]{1}/;
  return re.test(num)
}
function validate_email(email) {
  var re = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}/;
  return re.test(email)
}
function validate_pwd(pwd) {
  var re = /^[a-zA-Z0-9]{6,12}$/;
  return re.test(pwd)
}
//拍照
function cameraSheet(callBack){
  wx.showActionSheet({
    itemList: ['拍照上传', '从相册选取'],
    success: function (res) {

      if (res.tapIndex == 0) {
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['camera'],
          success: function (res) {

            var tempFilePath = res.tempFilePaths[0]
            callBack(tempFilePath)
          }
        })

      } else if (res.tapIndex == 1) {

        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success: function (res) {

            var tempFilePath = res.tempFilePaths[0]
            callBack(tempFilePath)
          }
        })

      }
    },
    fail: function (res) {
      
    }
  })
}
//设置本地缓存
function setStorage(key,value){
  try{
    wx.setStorageSync(key, value);
  } catch(e){
    return e;
  }
}
//获取本地缓存
function getStorage(key, callBack) {

  wx.getStorage({
    key: key,
    success: function (res) { return callBack(res.data)  },
    fail: function (res) { return res },
  })
}
//清除指定key 缓存
function removeStorage(key){

  wx.removeStorage({
    key: key,
    success: function (res) { },
  })
}
//清除全部缓存
function clearStorage(){
  wx.clearStorage()
}
//是否登录
function isLogin(isPush){

  if(getApp().data.uid){

    return true

  } else if (isPush){

    wx.navigateTo({
      url: '/pages/login/login',
    })

  }
  return false
}

//倒计时
function timeout(time,callback){
  var that = this
  time = time - 1
  setTimeout(function () {
    
    callback(time)
    if (time > 0) {
      that.timeout(time, callback);
    }

  }, 1000);
}
//数组是否包含 该项
function arrayContainItem(arr,item){

  for (var i = 0; i < arr.length;i++){

    if (arr[i] == item){
      return true
    }
  }

  return false
}
//获取经纬度两点距离
function getDistance(lat1, lng1, lat2, lng2) {
  // console.log(lat1)
  var radLat1 = lat1 * Math.PI / 180.0;
  var radLat2 = lat2 * Math.PI / 180.0;

  var a = radLat1 - radLat2;

  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));

  s = s * 6378.137;

  s = Math.round(s * 10000) / 10000;
  console.log(s)
  return s;
}

module.exports = {
  getCurrentTimeStamp: getCurrentTimeStamp,
  getTimeStamp: getTimeStamp,
  getTime: getTime,
  formatLocation: formatLocation,
  toast: toast,
  http_get: http_get,
  http_post: http_post,
  http_uploadFile: http_uploadFile,
  json2Form: json2Form,
  alert: alert,
  alertMes: alertMes,
  validate_phone: validate_phone,
  validate_number: validate_number,
  validate_email: validate_email,
  validate_pwd: validate_pwd,
  cameraSheet: cameraSheet,
  setStorage: setStorage,
  getStorage: getStorage,
  removeStorage: removeStorage,
  clearStorage: clearStorage,
  isLogin: isLogin,
  timeout: timeout,
  arrayContainItem: arrayContainItem,
  getDistance: getDistance,
}


/*
 JSON.stringify(jsObj);  对象转字符串
 JSON.parse(str);  字符串转对象

//字符串循环替换   gm是全局循环替换
 article = article.replace(new RegExp("<img src=\"/", "gm") , "<img src=\""+getApp().data.imageDomain+"/");
*/