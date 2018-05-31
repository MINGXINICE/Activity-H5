function cardWrap(){
  // type: 1.中国 2.英语 3.穆斯林 4.缅甸
  var Html       = "";     //贺卡整体结构

  // 根据不同语言数组length取数组随机数
  var textArr  = [
    ['新年快乐！恭喜发财！','china',1],
    ['祝您2018年身体健康，万事如意~','china',1],
    ['2018年所有愿望都实现','china',1],
    ['愿2018年所有人都能健康平安','china',1],
    ['新年快来到，向你问个好。开心无烦恼，好运跟着跑。','china',1],
    ['新年我要女神接受我的表白，大家祝福我~~~~','china',1],
    ['新年到来，红包拿来^_^','china',1],
    ['在这辞旧迎新之际，祝所有快牙的小朋友开心成长~','china',1],
    ['给你一支烟，吞云吐雾间，所有烦恼疲累都能过往如云烟','china',1],
    ['新年就要喝酒吃肉，祝您减肥成功!!','china',1],
    ['财神新年到，奖金满钱包;开春撞桃花，美女入怀抱~','china',1],
    ['元旦快乐！','china',1],
    ['万事如意、福寿安康、笑口常开、吉祥如意','china',1],
    ['祝你新年快乐，一定要给我回贺卡哦~~','china',1],
    ['我好喜欢你哦，你喜欢我吗？','china',1],
    ['祝你新年第一天捡到钱','china',1],
    ['我最屌，我最帅，我是无敌的小可爱~新年快乐','china',1],
    ['祝您狗年大吉大利~','china',1],
    ['我是快牙大老板(真的)，我祝大家新年快乐','china',1],
    ['祝所有人万寿无疆！','china',1],
    ['Every New Year gives you the perfect chance to start something new and fresh. So do your bit this year and make the world a better place for yourself and others. Happy New Year 2018!','Iran',2],
    ['Hope you scatter joy and happiness wherever you go all 365 days of the upcoming year and get the same in return. Happy New Year to you!','USA',2],
    ['نگراني هرگز از غصه فردا كم نميكنه بلكه فقط شادي امروز رو از بين مي بره','Iran',3],
    ['آنچه جذاب است سهولت نیست، دشواری هم نیست، بلكه دشواری رسیدن به سهولت است','Iran',3],
    ['سنة جديدة سعيدة ','Pakistan',3],
    [' سنة جديد أقبلت, نسألك اللهم من خيرها و نعوذ بك من شرها','Pakistan',3],
    ['ႏွစ္သစ္မဂၤလာရြင္လန္းခ်မ္းေျမ့ပါေစ။','Myanmar',4],
    ['ႏွစ္သစ္မဂၤလာ ဒီခ်ိန္ခါ စိတ္မွာညစ္မဲကင္းပါေစ။','Myanmar',4]
  ]

  var index     = Math.floor((Math.random()*textArr.length)),
      text      = textArr[index][0],
      countries = textArr[index][1],
      type      = textArr[index][2];

  //根据贺卡类型插入不同的贺卡模板
  if( type == 1 ){
    Html +=  [
      '<div id="cardWrap" class="card-1">',
      '    <p class="title black">'+ text +'</p>',
      '    <p class="from">来自 '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">继续收集贺卡</span>',
      '      <span class="btn-l">我也要寄贺卡</span>',
      '    </p>',
      '</div>'
    ].join("");
  }else if( type == 2 ){
    Html +=  [
      '<div id="cardWrap" class="card-2">',
      '    <p class="title black">'+ text +'</p>',
      '    <p class="from">来自 '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">继续收集贺卡</span>',
      '      <span class="btn-l">我也要寄贺卡</span>',
      '    </p>',
      '  </div>'
    ].join("");
  }else if( type == 3 ){
    Html +=  [
      '<div id="cardWrap" class="card-3">',
      '    <p class="title">'+ text +'</p>',
      '    <p class="from">来自 '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">继续收集贺卡</span>',
      '      <span class="btn-l">我也要寄贺卡</span>',
      '    </p>',
      '  </div>'
    ].join("");
  }else if( type == 4 ){
    Html +=  [
      '<div id="cardWrap" class="card-4">',
      '    <p class="title">'+ text +'</p>',
      '    <p class="from">来自 '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">继续收集贺卡</span>',
      '      <span class="btn-l">我也要寄贺卡</span>',
      '    </p>',
      '  </div>'
    ].join("");
  }

  $('body').append(Html);
  // 我也要寄贺卡
  $('#cardWrap .btn-l').on('click',function(){
    $('#cardWrap').remove();
    $('#makeCardWrap').show();
  });
  // 继续收集和卡
  $('#cardWrap .btn-r').on('click',function(){
    _hmt.push(['_trackEvent', '继续收集', 'click', '继续收集']);
    $('#cardWrap').remove();
  });
};

function lookWrap(type,text){
  // type: 1.中国 2.英语 3.穆斯林 4.缅甸
  var Html       = "";     //贺卡整体结构

  //根据贺卡类型插入不同的贺卡模板
  if( type == 1 ){
    Html +=  [
      '<div id="lookCardWrap">',
      '    <div class="card card-1">',
      '      <p class="title black">'+ text +'</p>',
      // '      <p class="from">来自中国</p>',
      '    </div>',
      '    <div class="btnBox">',
      '      <span class="btn btn-l">返回</span>',
      '      <span class="btn btn-r">寄出贺卡</span>',
      '    </div>',
      '  </div>'
    ].join("");
  }else if( type == 2 ){
    Html +=  [
      '<div id="lookCardWrap">',
      '    <div class="card card-2">',
      '      <p class="title black">'+ text +'</p>',
      // '      <p class="from">来自其他国家</p>',
      '    </div>',
      '    <div class="btnBox">',
      '      <span class="btn btn-l">返回</span>',
      '      <span class="btn btn-r">寄出贺卡</span>',
      '    </div>',
      '  </div>'
    ].join("");
  }else if( type == 3 ){
    Html +=  [
      '<div id="lookCardWrap">',
      '    <div class="card card-3">',
      '      <p class="title">'+ text +'</p>',
      // '      <p class="from">来自其他国家</p>',
      '    </div>',
      '    <div class="btnBox">',
      '      <span class="btn btn-l">返回</span>',
      '      <span class="btn btn-r">寄出贺卡</span>',
      '    </div>',
      '  </div>'
    ].join("");
  }else if( type == 4 ){
    Html +=  [
      '<div id="lookCardWrap">',
      '    <div class="card card-4">',
      '      <p class="title">'+ text +'</p>',
      // '      <p class="from">来自其他国家</p>',
      '    </div>',
      '    <div class="btnBox">',
      '      <span class="btn btn-l">返回</span>',
      '      <span class="btn btn-r">寄出贺卡</span>',
      '    </div>',
      '  </div>'
    ].join("");
  }

  $('body').append(Html);
  // 返回
  $('#lookCardWrap .btn-l').on('click',function(){
    $('#lookCardWrap').remove();
  });
  // 寄出贺卡
  $('#lookCardWrap .btn-r').on('click',function(){
    _hmt.push(['_trackEvent', '发送', 'click', '发送']);
    var num = parseInt(Math.random()*1000000 + 4000000-2000000, 10);
    opMsgBox({strText : '请等待...', duration : 2000});
    setTimeout(function(){
      $('#makeCardWrap textarea').val('');
      $('#lookCardWrap').remove();
      $('#success').show();
      $('#success .text span').text(num);
    },2000);
  });
};

function opMsgBox(options){
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
