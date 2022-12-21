document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});
$(function(){
  $(".list1>h2 .dep2").mouseover(function(){
    $(".list1>h2").stop().slideDown(600);
  });
  $(".list1>h2 .dep2").mouseleave(function(){
    $(".list1>h2").stop().slideUp(600);
  });
});