$(function(){
  $('.toggle_btn,.nav-bg').on('click',function(){
    if($('header').hasClass('open')){
      $('header').removeClass('open');
    }else {
      $('header').addClass('open');
    }
  });
});