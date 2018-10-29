// 检查相关工具类

var uiUtil = require('/UIUtil.js')
/**
 * 验证手机号
 * mobilePhone：手机号
 */
function validateMobilePhone(mobilePhone) {
  if (mobilePhone == null || mobilePhone.length == 0) {
    uiUtil.showToast("请输入手机号！")
    return false;
  }
  if (mobilePhone.length != 11) {
    uiUtil.showToast("手机号长度有误！")
    return false;
  }
  var myreg = /^[1][3-9][0-9]\d{8}$/;
  if (!myreg.test(mobilePhone)) {
    uiUtil.showToast("手机号有误！")
    return false;
  }
  return true;
}

/**
 * 根据身份证获取年龄、性别等数据
 */
function getIdCardInfo(param) {
  if (param == null || param.length != 18) return null


  let age = 151
  let sex = 0 // 0 表示女 1 表示男
  let str = param
  let year = Number(str.slice(6, 10))
  let month = Number(str.slice(10, 12))
  let day = Number(str.slice(12, 14))
  let date = new Date()
  let year2 = date.getFullYear()
  let sexValue = Number(str.slice(16, 17))
  age = year2 - year
  return {
    'age': age,
    'sex': sexValue % 2, // 0 表示女 1 表示男
    'year': year, // 出生年
    'month': month, // 出生月
    'day': day, // 出生日
  }
}

module.exports = {
  // 校验手机号
  validateMobilePhone: validateMobilePhone,
  // 根据身份证获取年龄、性别等数据 {'age': age,'sex':0,'year': year,'month': month,'day': day} 
  // sex : 0 表示女 1 表示男
  getIdCardInfo: getIdCardInfo
}