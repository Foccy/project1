//----------------------------------------firstslide Global

let gnbLiA = $(".dep0_1>li>.global")
console.log(gnbLiA)

gnbLiA.click(function () {
	if (!$(this).next().hasClass("on")) {
		$(".dep0_1_1").removeClass("on");
		$(this).next().addClass("on");
	} else {
		$(this).next().removeClass("on");	}
  });

  