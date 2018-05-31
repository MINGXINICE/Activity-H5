$(function () {

  function initPage(){
    setTimeout(function(){
      $('#page').css({
        'transform': 'scale(1.8) translateY(-20%) translateX(-10%)'
      });
      setTimeout(function(){
        $('#page span img').attr('src','./img/door.gif');
      },1000);
    },500);
  }

  $('.opcity').on('click',function(){
    $(this).hide();
    initPage();
    setTimeout(function(){
      $('.hand').show();
    },2000);
  });

  $('#page span').click(function(){
    _hmt.push(['_trackEvent', '邮箱', 'click', '邮箱']);
    opMsgBox({strText : 'Recieving greeting cards', duration : 2000});
    setTimeout(function(){
      cardWrap();
    },2000)
  });

  $('#makeCardWrap .list').click(function(){
    $(this).addClass('act').siblings().removeClass('act');
  });

  $('#makeBtn').click(function(){
    _hmt.push(['_trackEvent', '预览', 'click', '预览']);
    var num = 0,
        dom = $('.cardBox .list');
    if( dom.eq(0).hasClass('act') ){
      num = 1;
    }else if( dom.eq(1).hasClass('act') ){
      num = 2;
    }else if( dom.eq(2).hasClass('act') ){
      num = 3;
    }else if( dom.eq(3).hasClass('act') ){
      num = 4;
    }
    var text = $('#makeText textarea').val();
    if( text.trim() == '' ){
      return opMsgBox({strText : 'Type your message please', duration : 2000});
    }
    lookWrap(num,text);
  });

  $('#success .btn-l').click(function(){
    $('#success').fadeOut(100);
  });

  $('#success .btn-r').click(function(){
    $('#success').fadeOut(100);
    $('#makeCardWrap').fadeOut(100);
    opMsgBox({strText : 'Recieving greeting cards', duration : 2000});
    setTimeout(function(){
      cardWrap();
    },2000)
  });

});
