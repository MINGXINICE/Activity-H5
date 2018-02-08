function Zapya(){}

/**
 * 是否在快牙内打开（是否有客户端方法）
 * @returns {boolean}
 */
Zapya.isValidUser = function(){
    var result = false;
    if(typeof _myJSface  != "undefined" && _myJSface!=null){
        result = true;
    }
    return result;
};

//是否支持分享
Zapya.isSupportShare = function(){
    var result = false;
    if(_myJSface.supportShare()){
        result = true;
    }
    return result
}
//调用客户端分享
Zapya.share = function(options){
    options = options || {};
    options.title = options.title || "来自快牙的分享";
    options.desc = options.desc || "来自快牙的分享";
    options.url = options.url || window.location.href;
    options.thumbnail = options.thumbnail || "";

    if('share' in _myJSface){
        _myJSface.share(options.title,options.desc,options.url,options.thumbnail);
    }
}
Zapya.getShareInfoInIos = function(options){
    return function getShareInfo(options){
        Zapya.share(options);
        return true;
    }
}
Zapya.getShareInfoInAndriod = function(options){
    options = options || {};
    if('getShareInfo' in _myJSface){
        _myJSface.getShareInfo(JSON.stringify(options));
    }
}

/**
 * 获取Token
 * @returns {*}
 */
Zapya.getToken=function(){
    var token =null;
    if('getToken' in _myJSface){
        token =_myJSface.getToken().split('=')[1];
    }
    return token;
};
/**
 * 获取UUId
 * @returns {*}
 */
Zapya.getUUID=function(){
    var uuid =null;
      if('getUUID' in _myJSface){
          uuid =_myJSface.getUUID();
      }
    return uuid;
};


/**
 * 获取UserId
 * @returns {*}
 */
Zapya.getUserId=function(){
    var userId =null;
      if('getUserId' in _myJSface){
          userId =_myJSface.getUserId();
      }
    return userId;
};

/**
 * 获取渠道
 * @returns {*}
 */
Zapya.getChannel=function(){
    var channel =null;
      if('getChannel' in _myJSface){
          channel =_myJSface.getChannel();
      }
    return channel;
};


/**
 * 关闭客户端
 */
Zapya.close=function(){
      if('close' in _myJSface){
          _myJSface.close();
      }
};

/**
 * 检查是否登录
 * @returns {*}
 */
Zapya.isLogin=function(){//null false true
    var result =null;
      if('isLogin' in _myJSface){
          result =_myJSface.isLogin();
      }
    return result;
};

/**
 * 弹出登录框
 */
Zapya.login=function(){
      if('login' in _myJSface){
          _myJSface.login();
      }
};


/**
 * 显示分享按钮
 */
Zapya.showShareButton = function() {
	if ('showShareButton' in _myJSface) {
		_myJSface.showShareButton()
	}
};


/**
 * 隐藏左上角分享按钮
 */
Zapya.hideShareButton = function() {
	if ('hideShareButton' in _myJSface) {
		_myJSface.hideShareButton()
	}
};

/**
 * 重定向
 * @param aim
 */
Zapya.redirect = function (aim) {
	_myJSface.redirectTo('', aim)
};

/**
 * 是不是达人
 * @returns {boolean}
 */
Zapya.isVipUser = function(){
    var result = false;
    if(typeof _vipJSface  != "undefined" && _vipJSface!=null){
        result = true;
    }
    return result;
};
/**
 * 下载文件
 * @param type 文件类型 video audio file pic
 * @param fileName 文件名称
 * @param url 下载链接
 */
Zapya.download=function(type, fileName, url) {
    if ('download' in _vipJSface) {
         _vipJSface.download(type, fileName, url);
    }
};

/**
 *
 * 下载文件
 * @param type 文件类型 video audio file pic
 * @param fileName 文件名称
 * @param url 下载链接
 * @param tag
 */
Zapya.download2=function(type, fileName, url, tag) {
    if ('download2' in _vipJSface) {
         _vipJSface.download2(type, fileName, url,tag);
    }
};

/**
 * 快牙内下载app(传就赚);
 * @param type 文件类型 video audio file pic
 * @param fileName 文件名称
 * @param url 下载链接
 * @param tag 自定义标识,用于从日志中过滤
 * @param pkg 包名
 */

Zapya.download3=function(type, fileName, url,tag,pkg) {
    if ('download3' in _vipJSface) {
         _vipJSface.download3(type, fileName, url,tag,pkg);
    }
};

/**
 * 客户端小bug(传就赚);
 * @returns {boolean}
 */
Zapya.isNeedJump = function(){
   if ('isNeedJump' in _vipJSface) {
        return _vipJSface.isNeedJump();
   }
   return false;
};
//客户端打点(传就赚）
/**
 *
 * @param code
 * @param memo
 */
Zapya.logEvent=function(code, memo) {
    if ('logEvent' in _vipJSface) {
         _vipJSface.logEvent(code,memo);
    }
};
/**
 * 快牙内传输app(传就赚);
 * @param pkg
 */
Zapya.transfer = function(pkg){
    if ('transfer' in _vipJSface) {
         _vipJSface.transfer(pkg);
    }
};
/**
 * 客户端打开查看应用使用情况界面（传就赚）
 * @param num
 */
Zapya.startUsage = function(num){
    if('startUsage' in _vipJSface){
        _vipJSface.startUsage(num);
    }
};
/**
 * 客户端直接跳转传就赚页面（传就赚）
 * @returns {*}
 */
Zapya.getFrom = function(){
    var getFromApp = null;
    if('getFrom' in _vipJSface){
        getFromApp = _vipJSface.getFrom();
    }
    return getFrom;
};
/**
 * 客户端拿版本号（传就赚）
 * @returns {*}
 */
Zapya.getVersionCode=function(){
    var versionCode =null;
      if('getVersionCode' in _myJSface){
          versionCode =_myJSface.getVersionCode();
      }
    return versionCode;
};
/**
 * 客户端app下载状态
 * @param url
 * @returns {*}
 */
Zapya.getState=function(url) {
    var state = null;
    if ('getState' in _vipJSface) {
        state = _vipJSface.getState(url);
    }
    return state;
};
/**
 *  客户端app下载进度
 * @param url
 * @returns {*}
 */
Zapya.getProgress=function(url) {
    var process = null;
    if ('getProgress' in _vipJSface) {
        process = _vipJSface.getProgress(url);
    }
    return process;
};

/**
 * 客户端app暂停下载
 * @param url
 */
Zapya.pause=function(url) {
    if ('pause' in _vipJSface) {
         _vipJSface.pause(url);
    }
};

/**
 * 客户端app恢复下载
 * @param url
 */
Zapya.resume=function(url) {
    if ('resume' in _vipJSface) {
         _vipJSface.resume(url);
    }
};

/**
 * 客户端打开app
 * @param pkg
 */
Zapya.openApp=function(pkg) {
    if ('openApp' in _vipJSface) {
         _vipJSface.openApp(pkg);
    }
};
/**
 * 客户端检测app是否被打开过
 * @param pkg
 * @returns {*}
 */
Zapya.isAppOpened=function(pkg) {
    var isOpened = null;
    if ('isAppOpened' in _vipJSface) {
        isOpened = _vipJSface.isAppOpened(pkg);
    }
    return isOpened;
};

/**
 * 客户端安装app
 * @param url
 */
Zapya.installApp=function(url) {
    if ('installApp' in _vipJSface) {
         _vipJSface.installApp(url);
    }
};
/**
 * 客户端检测是否安装过app
 * @param pkg
 * @returns {*}
 */
Zapya.isAppInstalled=function(pkg) {
    var isInstalled = null;
    if ('isAppInstalled' in _vipJSface) {
        isInstalled = _vipJSface.isAppInstalled(pkg);
    }
    return isInstalled;
};
/**
 * 客户端获取app的MD5
 * @param pkg
 * @returns {*}
 */
Zapya.getMd5=function(pkg){
    var md5 = null;
    if ('getMd5' in _vipJSface) {
        md5 = _vipJSface.getMd5(pkg);
    }
    return md5;
};
/**
 * 向后台送日志
 * @param aid
 * @param chmod
 */
Zapya.logs=function(aid,chmod){
    var userid = null;
    var uuid=null;
    if(Zapya.isValidUser()){
        userid = Zapya.getUserId();
        uuid = Zapya.getUUID();
    }
    var baseUrl='http://lottery.kuaiya.cn/log/action?ac='+chmod+'&aid='+aid;
    baseUrl+='&uuid='+uuid+'&userid='+userid;
    $.get(baseUrl,function(){});
};
/**
 * 延迟送日志
 * @param aid
 * @param chmod
 */
Zapya.actionPush=function(aid, chmod){
    setTimeout(Zapya.logs(aid,chmod),1000);
};

//实名认证给客户端返回认证状态
Zapya.verifySucceed = function (code) {
    if('verifySucceed' in _myJSface){
        _myJSface.verifySucceed(code);
    }
}

//网页录制入口跳转 info必须是字符串格式：{"rid":资源id, "url":资源url}
Zapya.getRecord = function (info){
  if('getRecord' in _myJSface){
    _myJSface.getRecord(info);
  }
}
