//弹出层
function Dialog(options){
  var modalHtml       = "";     //弹窗整体结构
  var footerHtml      = "";     //弹窗footer
  var formHtml        = "";     //弹窗表单
  options             = options || {};
  options.type        = options.type || 0;              //奖品类型
  options.footer      = options.footer || false;        //弹窗footer
  options.title       = options.title || "提&nbsp示";    //弹窗提示
  options.text        = options.text || "";             //弹窗内容
  options.btnText     = options.btnText || "确定";       //弹窗按钮
  options.btnEvent    = options.btnEvent || null;       //按钮事件

  //根据奖品类型显示表单
  if( options.type == 1 ){
    formHtml =  [
    '<div class="dialog-form">',
    '  <p id="Phone"><input name="mobile" type="number" placeholder="请输入手机号必填"></p>',
    '</div>'
    ].join("");
  }else if( options.type == 2 ){
    formHtml =  [
    '<div class="dialog-form">',
    '  <p id="Phone"><input name="mobile" type="number" placeholder="请输入手机号必填"></p>',
    '  <p id="Name"><input name="name" type="text" placeholder="实物奖品需填写您的姓名"></p>',
    '  <p id="Address"><input name="address" type="text" placeholder="实物奖品需填写您的地址"></p>',
    '</div>'
    ].join("");
  }else if( options.type == 3 || options.type == 0 ){ //牙豆或未中奖
    formHtml =  '';
  }

  //控制footer显示
  if ( options.footer == false ) {
    footerHtml = '';
  }else if( options.footer == true ){
    footerHtml =  [
      '<div class="dialog-footer">',
      ' <span id="dialog-btn">'+ options.btnText +'</span>',
      '</div>'
    ].join("");
  }

  modalHtml+= [
    '<div id="Dialog">',
    '  <div class="dialog-box">',
    '    <div class="dialog-close">×</div>',
    '    <div class="dialog-title">'+ options.title +'</div>',
    '    <div class="dialog-info">'+ options.info +'</div>',
         formHtml,
         footerHtml,
    '  </div>',
    '</div>'
  ].join("");

  $('body').append(modalHtml);
  $('#dialog-btn').on('click',function(){
    if( options.btnEvent == null ){
      $('#Dialog').remove();
    }else{
      options.btnEvent();
    }
  });
  $('.dialog-close').on('click',function(){
    $('#Dialog').remove();
  });
};
