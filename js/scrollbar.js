// 변수
$(function () {
  const windo = $(window), //윈도우
    header = $(".header_cover"), // 네비바
    headerOffsetTop = header.offset().top; //움직인거리

  console.log(headerOffsetTop);
  windo.scroll(function () {
    if ($(this).scrollTop() >= headerOffsetTop) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});
