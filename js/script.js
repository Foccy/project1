document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#layer button")
    .addEventListener("click", function () {
      document.querySelector("#layer").style.display = "none";
    });
});
$(function () {
  $(".dep1_0>li>h2>a .header_bottom_2").mouseover(function () {
    $(".header_bottom_2").stop().slideDown(600);
  });
  $(".dep1_2>h2 .dep2").mouseleave(function () {
    $(".dep1_2>h2").stop().slideUp(600);
  });

  var i = $(this).index();
  $(".dep1_2").mouseover(function () {});
});
