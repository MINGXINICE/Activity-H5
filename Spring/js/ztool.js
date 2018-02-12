/**
 * Created by abc on 2017/8/15.
 */
function Ztool(){}

//<editor-fold desc="对象检查函数">
/**
 * 检测对象是否存在
 * @param obj
 * @returns {boolean}
 */
Ztool.isExisty=function(obj){
    var result = false;
    if(typeof obj != "undefined" && obj != null){
        result = true;
    }
    return result;
};
//
/**
 * 检测一个对象是否为空
 * @param e
 * @returns {boolean}
 */
Ztool.isEmptyObject=function(e) {
    var t;
    for (t in e)
        return !1;
    return !0
};

/**
 * 检测对象是否有该方法
 * @param key
 * @param obj
 * @returns {boolean}
 */
Ztool.hasMethod=function(key,obj){
    var result = false;
    if(key in obj)
        result = ture;
    return result;
};
/**
 * 打印对象属性
 * @param obj
 */
Ztool.displayProp=function(obj){
    var names="";
    for(var name in obj){
        names+=name+": "+obj[name]+";\n";
    }
    alert(names);
};
//</editor-fold>

//<editor-fold desc="Cookie设置函数">
/**
 * 设置Cookie值
 * @param name
 * @param value
 */
Ztool.setCookie=function(name,value){
    var Days = 7;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name+"="+ escape (value) + ";expires=" + exp.toGMTString() + ";path = /";
};
/**
 * 取Cookie值
 * @param name
 * @returns {*}
 */
Ztool.getCookie=function(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null){
        return (arr[2]);
    }else{
        return "";
    }
};
/**
 * 删除cookie值
 * @param name
 */
Ztool.clearCookie=function(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};
//</editor-fold>

/**
 * 获得当前日期 形如2016-12-12
 * @returns {string}
 */
Ztool.getToday=function(){
    var myDate = new Date();
    var y = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var m = myDate.getMonth()+1;       //获取当前月份(0-11,0代表1月)
    var d = myDate.getDate();        //获取当前日(1-31)
    return y+'-'+m+'-'+d;
};
/**
 * 验证手机号
 * @param phoneNum
 * @returns {boolean}
 */
Ztool.checkMoblie=function(phoneNum){
    var reg = /^((2|4|6|7|9){1}\d{6,8})$/;
    return reg.test(phoneNum);
};
/**
 * 验证手机号
 * @param phoneNum
 * @returns {boolean}
 */
Ztool.checkMoblieWithEntity=function(phoneNum){
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return reg.test(phoneNum);
};

/**
 * 判断是否是iso
 */
Ztool.is_ios = function() {
    if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))) {
        return true;
    }
    return false;
};

//判断是否在微信
Ztool.is_weixin = function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}

/**
 * 拿url参数
 * @param name
 * @returns {null}
 */
Ztool.getQueryString=function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};
//
/**
 * 截取token 客户端获取token 是
 * @param string
 * @returns {string}
 */
Ztool.substringToken=function(string){
    var arr       = string.split('=');
    var newString = ''
    if(arr.length == 1) {
        newString = arr[0]
    } else {
        newString =  arr[1];
    }

    return newString;
};
//<editor-fold desc="图片加载相关">
/**
 * 图片预加载
 * @param url
 */
Ztool.preLoadImg=function(url) {
    var img = new Image();
    img.src = url;
};

/**
 * 加载图片后回调函数
 * @param url
 * @param callback
 */
Ztool.loadImage=function(url, callback) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
        callback.call(img);
    }
}
//</editor-fold>

/**
 * toast消息,提示框 可配置背景色，文案，字体颜色，自动关闭的时长（样式见base.css）
 * @param options
 */
Ztool.opMsgBox = function (options){
    options          = options || {};
    options.duration = 2000 || options.duration;
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

/**
 * 安装打开快牙广告banner
 */
Ztool.addInstallGuid = function() {
    $('body').append(
        '<div class="install_guid">'
        +'<img id="install_img" src="./css/img/zapya_share_app_header.png" alt="">'
        +'<a id="install_btn" href="http://www.zapya.cn/i">立即打开</a>'
        +'</div>'
    )
    $('#show_box').css("margin-bottom","1.4rem;")
};

/**
 * 检测是否能打开快牙，不能打开则执行回调
 */
Ztool.checkOpen = function(cb){
    var _clickTime = +(new Date());
    function check(elsTime) {
        if ( elsTime > 3000 || document.hidden || document.webkitHidden) {
            cb(1);
        } else {
            cb(0);
        }
    }
    //启动间隔20ms运行的定时器，并检测累计消耗时间是否超过3000ms，超过则结束
    var _count = 0, intHandle;
    intHandle = setInterval(function(){
        _count++;
        var elsTime = +(new Date()) - _clickTime;
        if (_count>=100 || elsTime > 3000 ) {
            clearInterval(intHandle);
            check(elsTime);
        }
    }, 20);
};

/**
 * 打开快牙
 */
Ztool.openZapya = function(e,zHref,cb) {
    var zHref = zHref || {};
    Ztool.opMsgBox({strText: '努力打开中...'});
    if(Ztool.is_ios()){
        e.currentTarget.href = zHref.ios;
    }else{ //如果是安卓端的话有两种情况，微信内和微信外
      if(Ztool.is_weixin()){
        e.currentTarget.href = zHref.wx_android;
        Ztool.checkOpen(cb);
      }else{
        e.currentTarget.href = zHref.android;  //点击元素必须是a标签，获取a标签实现点击打开
        Ztool.checkOpen(cb);
      }
    }
};

/**
 * 下载快牙
 */
Ztool.downloadZapya = function(urls){
    var pid                   = Ztool.getQueryString('p') || ''; //判断中英文版本信息;
    var url                   = "";
    if(Ztool.is_weixin()){
        if(Ztool.is_ios()){
            url = urls.zapyaios;
        }else{
            url = urls.wx_zapya_android;
        }
    }else{
        if(Ztool.is_ios()){
            url = urls.zapyaios;
        }else{
            if(pid==5){
                url= urls.zapya_download_url_en;//英文
            }else{
                url = urls.zapya_download_url;//默认中文
            }
        }
    }
    window.location.href = url;
};

// 加载动态js文件
Ztool.loadjs = function (src,func) {
    //判断这个js文件存在直接执行回调
    var scripts = document.getElementsByTagName('script') ;
    for(i in scripts)
        if(scripts[i].src == src)
            return func() ;
    if(typeof func != 'function') {
      console.log('param 2 is not a function!!') ;
      return false ;
    }
    var script = document.createElement('script') ;
    script.type ='text/javascript' ;
    script.src = src ;
    var head = document.getElementsByTagName('head').item(0);
    head.appendChild(script);
    script.onload = function(){
      func();
    }
}

// 微信分享
Ztool.initWX = function( wxShareInfo ) {
  //合并默认参数
  wxShareInfo = Object.assign({
    title : '快牙',
    link  :  window.location.href,
    imgUrl  : '',
    desc  : '来自快牙的分享'
  } , wxShareInfo || {} );

  // 加载微信JSSDK;
  Ztool.loadjs("http://res.wx.qq.com/open/js/jweixin-1.2.0.js",function(){
    // 加载微信jssdk配置
    var localHref = window.location.href;
    var url = "http://op2.dewmobile.net:9030/weixinJS?cb=initweixin&url=" + escape(localHref);
    Ztool.loadjs( url , function() {
      // 微信事件监听
      wx.ready(function(){
        wx.onMenuShareTimeline( wxShareInfo );
        wx.onMenuShareAppMessage( wxShareInfo );
        wx.onMenuShareQQ( wxShareInfo );
        wx.onMenuShareQZone( wxShareInfo );
      });
    });
  });
  //微信分享设置
  window.initweixin = function ( tt ){
  	wx.config({
  		debug : false,
  		appId : tt.appId, // 必填，公众号的唯一标识
  		timestamp : tt.timestamp, // 必填，生成签名的时间戳
  		nonceStr : tt.nonceStr, // 必填，生成签名的随机串
  		signature : tt.signature,// 必填,签名，见附录1
  		jsApiList : ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  	});
  }
}

//加载调试工具
Ztool.loadEruda = function(){
  var script1 = document.createElement('script');
    var script2 = document.createElement('script');
    script1.src = '//cdn.jsdelivr.net/eruda/1.2.0/eruda.min.js';
    script2.innerHTML = 'eruda.init();';
    var str = Ztool.getQueryString('fake');
    if( str !== 'true' ){
      return;
    }else{
      document.body.appendChild(script1);
      setTimeout(function(){
        document.body.appendChild(script2);
      },200);
    }
};
