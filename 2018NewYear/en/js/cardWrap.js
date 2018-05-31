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
    ['This new year, view the world with a positive outlook, speak your heart out with confidence, listen to others as well as your inner voice and you will be on the correct road in the correct direction.','Myanmar',2],
    ['Set it in your heart that each day of the New Year would keep getting better and better for you.','USA',2],
    ['To put an end to something old, we have to start a thing new, wishing you with a joy-filled heart though the words here are few. A very happy new year!','Iran',2],
    ['May you dedicate the New Year to humanity and the betterment of the world at large.','China',2],
    ['Have a year as fragrant as roses, as brilliant as the sun, as colorful as the rainbow and as cheerful as the lark. Happy New Year!','Pakistan',2],
    ['Open your eyes, look at the bright day awaiting you, forget all bad dreams and start afresh. Wishing you a wonderful New Year!','India',2],
    ['May the New Year bring fresh bout of excellence to your life.','Myanmar',2],
    ['When the New Year arrives, it brings with it new ideas and ways to make our lives good to better and ultimately better to best.','Myanmar',2],
    ['Wish you have a year even better than the best and put smiles on the faces of everyone you come across.','India',2],
    ['May all the expectations and goals for each day be fulfilled on the day itself!','Vietnam',2],
    ['Life is an accessible diary filled with empty pages waiting for you. Fill them up with your story as you go.','Tailand',2],
    ['Hold the smile, let the tear go, keep the laugh, lose the pain, look for joy, and abandon the fear.  Happy New Year dear!','Malaysia',2],
    ['May this New Year equip you with good luck, good health, good fortune and good times! Happy New Year!','Tailand',2],
    ['I hope that the lamps of joy lighten up your year, fill your days with sparkles of joy, and brighten up your life forever and ever.','Malaysia',2],
    ['Say hello to a brand new year and a new chance to set everything right!','China',2],
    ['People look forward to a new year to start afresh and turn over a new leaf. All the best for that and have a wonderful year ahead!','South Africa',2],
    ['The future holds wonderful surprises for you. Greet them with open arms and let them work wonders for you!','France',2],
    ['May this New Year add a burst of colors and fragrance into your life just like a new blooming flower!','China',2],
    ['Let us look back at the past year with the warmest of memories. Happy New Year!','Pakistan',2],
    ['نگراني هرگز از غصه فردا كم نميكنه بلكه فقط شادي امروز رو از بين مي بره','Iran',3],
    ['آنچه جذاب است سهولت نیست، دشواری هم نیست، بلكه دشواری رسیدن به سهولت است','Iran',3],
    ['افکار بزرگ داشته باش،اما از شادیهای کوچک لذت بب','Iran',3],
    ['روز را با خنده شروع کن تا زندگی با خنده در دستانت شکوفا شود','Iran',3],
    ['براي داشتن چيزي كه تا به حال نداشته ايد بايد كسي باشيد كه تا به حال نبوده ايد','Iran',3],
    ['برایت آرزو می کنم آرزوی کسی باشی که آرزویش را داری','Iran',3],
    ['خوشبختی واقعی در دنیا فقط با یک چیز میسر میشود. دوست داشتن و دوست داشته شدن. خوشبختی شما آرزوی قلبی ما است.','Iran',3],
    ['آرزو می کنم هیچ راه نجاتی نداشته باشی وقتی غرق خوشبختی هستی','Iran',3],
    ['حظات از آن توست؛ آبی، سبز، سرخ، سیاه، سفیدروزهایت رنگارنگ','Iran',3],
    ['کساني که دنيا را تکان داده اند در استعدادهاي طبيعي نابغه نبوده اند ،ولي به يک صفت.. ممتاز بوده اند : ثبات و استقامت','Iran',3],
    ['سنة جديدة سعيدة ','Pakistan',3],
    ['سنة جديد أقبلت, نسألك اللهم من خيرها و نعوذ بك من شرها','Pakistan',3],
    ['نتمنى لكم سنة جديدة خالية من الأوجاع,مليئة بالحب والسعادة','Pakistan',3],
    ['عام جديد عام سعيد,جعله الله عام الخير و السلام والأمن والآمان ','Pakistan',3],
    ['نتمنى لكم عام جديد مليء بالتقدم و الإزدهار','Pakistan',3],
    ['عام جديد سعيد, أسعد الله أيامكم بكل خير ','Pakistan',3],
    ['كل عام و حضراتكم بخير ','Pakistan',3],
    ['نهنئكم بحلول العام الميلادي الجديد','Pakistan',3],
    ['نسأل الله أن يجعل هذا العام, عام الخير و الفرح و الآمان والسلام على كل بلادنا العربية','Pakistan',3],
    ['نتمني لكم عام جديد كله خير و صحة وبركة وسعادة','Pakistan',3],
    ['ႏွစ္သစ္မဂၤလာရြင္လန္းခ်မ္းေျမ့ပါေစ။','Myanmar',4],
    ['အားလံုးေပ်ာ္ရႊင္ဖြယ္ရာ ႏွစ္သစ္မဂၤလာျဖစ္ပါေစ','Myanmar',4],
    ['ႏွစ္ေဟာင္းကုန္ေပ်ာက ္ႏွစ္သစ္ေရာက္ ထြန္းေတာက္မဂၤလာရွိပါေစ။','Myanmar',4],
    ['ႏွစ္သစ္မဂၤလာ ဒီခ်ိန္ခါ စိတ္မွာညစ္မဲကင္းပါေစ။','Myanmar',4],
    ['တႏွစ္ပတ္လံုး စိတ္ျဖဴဖံုး ရႊင္ျပဳံုးၾကည္သာရွိပါေစ။','Myanmar',4],
    ['ႏွစ္သစ္ခ်ိန္ခါ မ်ားသတၱဝါ ခ်မ္းသာကိုယ္စိတ္ျမဲပါေစ။။','Myanmar',4],
    ['မိတ္ေဆြမ်ားအားလံုး ေပ်ာ္ရႊင္စရာ ေန႕ရက္မ်ားစြာကို ပိုင္ဆိုင္ႏိုင္ပါေစ','Myanmar',4],
    ['မဂၤလာ အေပါင္းနဲ႔ျပည့္စံုၾကပါေစရွင္','Myanmar',4],
    ['လိုရာဆႏၵမွန္သမွ် ေတာင္းဆုမ်ားျပည့္ပါေစ။','Myanmar',4],
    ['ေဘးဘယာေဝးကြာေပ်ာ္႐ႊင္စရာႏွစ္သစ္ျဖစ္ပါေစ။','Myanmar',4]
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
      '    <p class="from">From '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">Recieve more</span>',
      '      <span class="btn-l">Create a card</span>',
      '    </p>',
      '</div>'
    ].join("");
  }else if( type == 2 ){
    Html +=  [
      '<div id="cardWrap" class="card-2">',
      '    <p class="title black">'+ text +'</p>',
      '    <p class="from">From '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">Recieve more</span>',
      '      <span class="btn-l">Create a card</span>',
      '    </p>',
      '  </div>'
    ].join("");
  }else if( type == 3 ){
    Html +=  [
      '<div id="cardWrap" class="card-3">',
      '    <p class="title">'+ text +'</p>',
      '    <p class="from">From '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">Recieve more</span>',
      '      <span class="btn-l">Create a card</span>',
      '    </p>',
      '  </div>'
    ].join("");
  }else if( type == 4 ){
    Html +=  [
      '<div id="cardWrap" class="card-4">',
      '    <p class="title">'+ text +'</p>',
      '    <p class="from">From '+ countries +'</p>',
      '    <p class="footer">',
      '      <span class="btn-r">Recieve more</span>',
      '      <span class="btn-l">Create a card</span>',
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
      '      <span class="btn btn-l">Return</span>',
      '      <span class="btn btn-r">Send</span>',
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
      '      <span class="btn btn-l">Return</span>',
      '      <span class="btn btn-r">Send</span>',
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
      '      <span class="btn btn-l">Return</span>',
      '      <span class="btn btn-r">Send</span>',
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
      '      <span class="btn btn-l">Return</span>',
      '      <span class="btn btn-r">Send</span>',
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
    opMsgBox({strText : 'Please wait for...', duration : 2000});
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
