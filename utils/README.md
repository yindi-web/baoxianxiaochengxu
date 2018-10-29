# 微信小程序常用工具类

## 1.UIUtil.js 文件
主要包含与UI相关的工具方法

	module.exports = {
 		// 显示普通toast（没有任何图标）
  		showToast: showToast
	}

## 2.NetWorkUtil.js 文件
包含网络操作相关的工具方法

	module.exports = {
	    //----------【Start】 POST  请求 【Start】----------//
	
	    // POST 请求：不显示进度框，无请求参数，无请求头
	    postRequestBase: postRequestBase,
	    // POST 请求：显示进度框，无请求参数，无请求头
	    postRequestLoadingBase: postRequestLoadingBase,
	    // POST 请求：不显示进度框，有请求参数，无请求头
	    postRequestParams: postRequestParams,
	    // POST 请求：显示进度框，有请求参数，无请求头
	    postRequestLoadingParams: postRequestLoadingParams,
	    // POST 请求：不显示进度框，无请求参数，有请求头
	    postRequestHeader: postRequestHeader,
	    // POST 请求：显示进度框，无请求参数，有请求头
	    postRequestLoadingHeader: postRequestLoadingHeader,
	    // POST 请求：不显示进度框，有请求参数，有请求头
	    postRequest: postRequest,
	    // POST 请求：显示进度框，有请求参数，有请求头
	    postRequestLoading: postRequestLoading,
	
	    //------------【End】 POST 请求 【End】------------//
	
	    //----------【Start】 GET  请求 【Start】----------//
	
	    // GET 请求：不显示进度框，无请求参数，无请求头
	    getRequestBase: getRequestBase,
	    // GET 请求：显示进度框，无请求参数，无请求头
	    getRequestLoadingBase: getRequestLoadingBase,
	    // GET 请求：不显示进度框，有请求参数，无请求头
	    getRequestParams: getRequestParams,
	    // GET 请求：显示进度框，有请求参数，无请求头
	    getRequestLoadingParams: getRequestLoadingParams,
	    // GET 请求：不显示进度框，无请求参数，有请求头
	    getRequestHeader: getRequestHeader,
	    // GET 请求：显示进度框，无请求参数，有请求头
	    getRequestLoadingHeader: getRequestLoadingHeader,
	    // GET 请求：不显示进度框，有请求参数，有请求头
	    getRequest: getRequest,
	    // GET 请求：显示进度框，有请求参数，有请求头
	    getRequestLoading: getRequestLoading,
	
	    //------------【End】 GET 请求 【End】------------//
	
	    //--------------- 请求封装基本方法 ---------------//
	    requestNetWork: requestNetWork,
	}

## 3.DateUtil.js 文件
包含日期(Date、时间戳)操作相关的工具方法

	module.exports = {
	  // Date 格式化成 2018-07-11 15:23:08 格式
	  formatTime: formatTime,
	  // 时间戳 格式化成 2018-07-11 格式
	  formatDate: formatDate,
	  // 时间戳 格式化成 2018-07-11 15:23:08 格式
	  formatDateAndTime: formatDateAndTime,
	  // 在传递的时间戳基础上对 年、月、日、时、分、秒 进行 增加或减少操作，返回变换后的年月日时分秒
	  dateTimeChange: dateTimeChange,
	  // 在传递的时间戳基础上对 年、月、日 进行 增加或减少操作，返回变换后的年月日
	  dateChange: dateChange,
	  // 在传递的时间戳基础上对 时、分、秒 进行 增加或减少操作
	  timeChange: timeChange,
	  // 在传递的时间戳基础上对月份进行增加或减少操作，返回变换后的月份第一天和最后一天
	  monthStartAndEnd: monthStartAndEnd,
	  // 在传递的时间戳基础上对年份进行增加或减少操作。返回变换后的年的第一月、第一天和最后一月、最后一天
	  yearStartAndEnd: yearStartAndEnd,
	  // 获取当前时间的 年、月、日、时、分、秒
	  getDate: getDate,
	  // 通过时间戳返回 年、月、日、时、分、秒
	  getDateFormLong: getDateFormLong,
	  // 获取从某一时间开始未来 count 天的时间日期 年-月-日 2018-02-08
	  getFutureDate1: getFutureDate1,
	  // 获取从某一时间开始未来 count 天的时间日期 年-月-日 2-8
	  getFutureDate2: getFutureDate2,
	  // 获取给定时间戳的月份的日期数组 返回 result[] 包含这个月中的每一天日期，包含年和月 2018- 01 - 02, ...
	  getDaysOfMonth1: getDaysOfMonth1,
	  // 获取给定时间戳的月份的日期数组 返回 result[] 包含这个月中的每一天日期，只有日期 1,2,3...
	  getDaysOfMonth2: getDaysOfMonth2,
	  // 将时间值 秒 转化为 几小时 几分钟的形式
	  formatTimeValue: formatTimeValue,
	  //  获取指定时间的毫秒值 年、月、日、时、分、秒
	  getMillisecondValue: getMillisecondValue,
	}

## 4.StringUtil.js 文件

	module.exports = {
	  // 用于判断空，Undefined String Array Object
	  isEmpty: isEmpty,
	  // 处理空字符串
	  handlerString: handlerString,
	}

## 5.CheckUtil.js 文件

	module.exports = {
	  // 校验手机号
	  validateMobilePhone: validateMobilePhone,
	  // 根据身份证获取年龄、性别等数据 {'age': age,'sex':0,'year': year,'month': month,'day': day} 
	  // sex : 0 表示女 1 表示男
	  getIdCardInfo: getIdCardInfo
	}

## 6.ViewUtil.js 文件

	module.exports = {
	  repeatBtn: repeatBtn, // 重复点击事件处理
	}
> 使用
> 
	  functionName(函数名): viewUtil.repeatBtn(function() {
	    // ... 
	  }, 1000),

# 小程序组件
## components\dialog
> 使用

1. page.json 文件中配置
	
		{
		  "usingComponents": {
		    "dialog": "/components/dialog/dialog"
		  }
		}

2. page.wxml 文件中使用

		<dialog id="dialog" bind:cancelEvent="cancelEvent" bind:okEvent="okEvent"></dialog>

3. page.js 文件中设置内容和调用相关方法

		// 显示dialog
		showDialog:function(){
			// 找到组件 设置数据
			var dialog = this.selectComponent('#dialog')
		    dialog.setData({
		      title: '弹框标题',
		      content: '弹框显示的具体内容',
		      cancelText: '取消',
		      okText: '确认'
		    })
		    dialog.show()
		},

		// 弹框取消事件
	    cancelEvent: function() {
		  // 事件处理 ...

		  // 关闭弹框
	      var dialog = this.selectComponent('#dialog')
	      dialog.close();
	    },

	    // 弹框确认事件
	    okEvent: function() {
		  // 事件处理 ...
		  
		  // 关闭弹框
	      var dialog = this.selectComponent('#dialog')
	      dialog.close();
	    },

		// 可以在页面生命周期的 onReady() 方法中获取，而不是每次使用的时候获取
		// onReady: function () {
		//	// 获得 dialog 组件
		//	this.dialog = this.selectComponent("#dialog");
		// },