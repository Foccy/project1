//---------------------------second slide tab-------------------------------------//

var tabmenu1 = $(".menu1 a");
var panels1 = $(".menu2_wrap>div");
tabmenu1.eq(0).addClass("active");
panels1.eq(0).show();

tabmenu1.click(function (s) {
  s.preventDefault();
  let click = $(this);
  let currentlink = click.attr("href");
  tabmenu1.removeClass("active");
  click.addClass("active");
  panels1.hide();
  $(currentlink).show();
});
