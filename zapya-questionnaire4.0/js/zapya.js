function Zapya(){}
// 是否在快牙内打开（是否有客户端方法）
Zapya.isValidUser = function(){
    var result = false;
    if(typeof _myJSface  != "undefined" && _myJSface!=null){
        result = true;
    }
    return result;
}

// 获取Token
Zapya.getToken=function(){
    var token =null;
    if('getToken' in _myJSface){
        token =_myJSface.getToken();
    }
    return token;
}
// 获取UUId
Zapya.getUUID=function(){
    var uuid =null;
      if('getUUID' in _myJSface){
          uuid =_myJSface.getUUID();
      }
    return uuid;
}

// 获取UserId
Zapya.getUserId=function(){
    var userId =null;
      if('getUserId' in _myJSface){
          userId =_myJSface.getUserId();
      }
    return userId;
}
// 获取渠道
Zapya.getChannel=function(){
    var channel =null;
      if('getChannel' in _myJSface){
          channel =_myJSface.getChannel();
      }
    return channel;
}

// 关闭客户端
Zapya.close=function(){
      if('close' in _myJSface){
          _myJSface.close();
      }
}

// 检查是否登录
Zapya.isLogin=function(){//null false true
    var result =null;
      if('isLogin' in _myJSface){
          result =_myJSface.isLogin();
      }
    return result;
}
// 弹出登录框
Zapya.login=function(){
      if('login' in _myJSface){
          _myJSface.login();
      }
}
//

Zapya.showShareButton = function() {
	if ('showShareButton' in _myJSface) {
		_myJSface.showShareButton()
	}
},
	
/**
 * 隐藏左上角分享按钮
 */
Zapya.hideShareButton = function() {
	if ('hideShareButton' in _myJSface) {
		_myJSface.hideShareButton()
	}
}
	
Zapya.isVipUser = function(){
    var result = false;
    if(typeof _vipJSface  != "undefined" && _vipJSface!=null){
        result = true;
    }
    return result;
}
// 快牙内下载app;
Zapya.download=function(type, fileName, url) {
    if ('download' in _vipJSface) {
         _vipJSface.download(type, fileName, url);
    }
}

Zapya.download2=function(type, fileName, url, tag) {
    if ('download2' in _vipJSface) {
         _vipJSface.download2(type, fileName, url,tag);
    }
}
// 快牙内下载app(传就赚);
Zapya.download3=function(type, fileName, url,tag,pkg) {
    if ('download3' in _vipJSface) {
         _vipJSface.download3(type, fileName, url,tag,pkg);
    }
}
//客户端小bug(传就赚);
Zapya.isNeedJump = function(){
   if ('isNeedJump' in _vipJSface) {
        return _vipJSface.isNeedJump();
   } 
   return false;
}
//客户端打点(传就赚）
Zapya.logEvent=function(code, memo) {
    if ('logEvent' in _vipJSface) {
         _vipJSface.logEvent(code,memo);
    }
}
// 快牙内传输app(传就赚);
Zapya.transfer = function(pkg){
    if ('transfer' in _vipJSface) {
         _vipJSface.transfer(pkg);
    }
}
//客户端打开查看应用使用情况界面（传就赚）
Zapya.startUsage = function(num){
    if('startUsage' in _vipJSface){
        _vipJSface.startUsage(num);
    }
}
//客户端直接跳转传就赚页面（传就赚）
Zapya.getFrom = function(){
    var getFromApp = null;
    if('getFrom' in _vipJSface){
        getFromApp = _vipJSface.getFrom();
    }
    return getFrom;  
}
//客户端拿版本号（传就赚）
Zapya.getVersionCode=function(){
    var versionCode =null;
      if('getVersionCode' in _myJSface){
          versionCode =_myJSface.getVersionCode();
      }
    return versionCode;
}
// 客户端app下载状态
Zapya.getState=function(url) {
    var state = null;
    if ('getState' in _vipJSface) {
        state = _vipJSface.getState(url);
    }
    return state;
}
// 客户端app下载进度
Zapya.getProgress=function(url) {
    var process = null;
    if ('getProgress' in _vipJSface) {
        process = _vipJSface.getProgress(url);
    }
    return process;
}
// 客户端app停止下载
Zapya.pause=function(url) {
    if ('pause' in _vipJSface) {
         _vipJSface.pause(url);
    }
}
// 客户端app恢复下载
Zapya.resume=function(url) {
    if ('resume' in _vipJSface) {
         _vipJSface.resume(url);
    }
}
// 客户端打开app
Zapya.openApp=function(pkg) {
    if ('openApp' in _vipJSface) {
         _vipJSface.openApp(pkg);
    }
}
// 客户端检测app是否被打开过
Zapya.isAppOpened=function(pkg) {
    var isOpened = null;
    if ('isAppOpened' in _vipJSface) {
        isOpened = _vipJSface.isAppOpened(pkg);
    }
    return isOpened;
}
// 客户端安装app
Zapya.installApp=function(url) {
    if ('installApp' in _vipJSface) {
         _vipJSface.installApp(url);
    }
}
// 客户端检测是否安装过app
Zapya.isAppInstalled=function(pkg) {
    var isInstalled = null;
    if ('isAppInstalled' in _vipJSface) {
        isInstalled = _vipJSface.isAppInstalled(pkg);
    }
    return isInstalled;
}
// 客户端获取app的MD5
Zapya.getMd5=function(pkg){
    var md5 = null;
    if ('getMd5' in _vipJSface) {
        md5 = _vipJSface.getMd5(pkg);
    }
    return md5;
}

function logs(aid,chmod){
    var userid = null;
    var uuid=null;
    if(Zapya.isValidUser()){
        userid = Zapya.getUserId();
        uuid = Zapya.getUUID();
    }
    var baseUrl='http://lottery.kuaiya.cn/log/action?ac='+chmod+'&aid='+aid;
    baseUrl+='&uuid='+uuid+'&userid='+userid;
    $.get(baseUrl,function(){});
}

Zapya.actionPush=function(aid, chmod){
    setTimeout(logs(aid,chmod),1000);
}
//===================== 提示框 可配置背景色，文案，字体颜色，自动关闭的时长（样式见base.css） ==========================
Zapya.opMsgBox = function (options){
    options          = options || {};
    options.duration = options.duration || 2000;
    options.bgColor  = options.bgColor || '';
    options.fontColor= options.fontColor || '';
    options.strText  = options.strText || '';
    var msgBox = document.createElement('div'); 
    var msgText = document.createElement('span');
    msgBox.id  = 'msgbox';
    msgText.id = 'msgtext';

    msgText.className = 'fadeIn';
    msgText.innerHTML = options.strText;
    msgText.style.color = options.fontColor;
    msgText.style.backgroundColor = options.bgColor;
    msgBox.appendChild(msgText);
    document.body.appendChild(msgBox);     

    setTimeout(function(){
      msgBox.parentNode.removeChild(msgBox); 
    },options.duration)
};
//===================== 快牙外打开的下载提示 （样式见base.css） ==========================
Zapya.addInstallGuid = function() {
    $('body').append(
        '<div class="install_guid">' 
            +'<img id="install_img" src="./css/img/zapya_share_app_header.png" alt="">'  
            +'<a id="install_btn" href="http://www.kuaiya.cn/i">用快牙立即参加</a>'
        +'</div>'
    )
    $('#show_box').css("margin-bottom","1.4rem;")
};


//检测对象是否存在
function isExisty(obj){
    var result = false;
    if(typeof obj != "undefined" && obj != null){
        result = true;
    }
    return result;
};
//检测一个对象是否为空
function isEmptyObject(e) {  
    var t;  
    for (t in e)  
        return !1;  
    return !0  
};
//检测对象是否有该方法
function hasMethod(key,obj){
    var result = false;
    if(key in obj) 
        result = ture;
    return result;
};
//打印对象属性
function displayProp(obj){    
    var names="";       
    for(var name in obj){       
       names+=name+": "+obj[name]+";\n";  
    }  
    alert(names);  
};
//操作cookie
function setCookie(name,value){ 
    var Days = 7;  
    var exp  = new Date();  
    exp.setTime(exp.getTime() + Days*24*60*60*1000);  
    document.cookie = name+"="+ escape (value) + ";expires=" + exp.toGMTString();  
};  
function getCookie(name){  
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
    if(arr != null){  
        return (arr[2]);  
    }else{  
        return ""; 
    }
};
function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
//获取日期 形如2016-12-12
function getToday(){
    var myDate = new Date();
    var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var m = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
    var d = myDate.getDate();        //获取当前日(1-31)      
    return y+'-'+m+'-'+d;
};
//验证手机号
function checkMoblie(phoneNum){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return reg.test(phoneNum);
}
function checkMoblieWithEntity(phoneNum){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return reg.test(phoneNum);
}

//拿url参数
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null; 
};
//截取token
function substringToken(string){
  var arr       = string.split('=');
  var newString =  arr[1];
  return newString;
};
// 图片预加载
function preLoadImg(url) {
    var img = new Image();
    img.src = url;
}
// 加载图片后回调
function loadImage(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
        callback.call(img);
    }
}