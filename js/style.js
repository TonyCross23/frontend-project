$(function () {
  $('.gnav').on('click', function () {
    var rightVal = 0;
    if ($(this).hasClass('hb-open')) {
      rightVal = -1258;
      $(this).removeClass('hb-open');
    } else {
      $(this).addClass('hb-open');
    }

    $('nav').stop().animate({
      right: rightVal
    }, 200);
  });
});