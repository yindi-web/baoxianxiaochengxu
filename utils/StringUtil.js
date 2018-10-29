/**
 * 用于判断空，Undefined String Array Object
 */
function isEmpty(str) {
  if (Object.prototype.toString.call(str) === '[object Undefined]') { //空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else {
    return true
  }
}


/**
 * 处理空字符串
 */
function handlerString(msg) {
  if (msg == null || isEmpty(msg))
    return ""


  if (Object.prototype.toString.call(msg) === '[object String]') {
    return msg.length == 0 ? "" : msg
  }

  return ""
}

module.exports = {
  // 用于判断空，Undefined String Array Object
  isEmpty: isEmpty,
  // 处理空字符串
  handlerString: handlerString,
}