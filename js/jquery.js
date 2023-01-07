$(".dep1_0 li, .header_bottom_2")
	.mouseover(function () {
		$(".header_bottom_2").stop().slideDown(0);
		$("#pageblur").addClass(".dim")
	})
	.mouseout(function () {
		$(".header_bottom_2").stop().slideUp(0);
		$("#pageblur").removeClass(".dim")
	});

//++++++++++++++++++++

$(".dep0_1>a")
	.click(function () {
		$("dep0_1_1").stop().slideDown(1000).stop();
	})
	.click(function () {
		$("dep0_1_1").stop().slideUp(1000);
	});
//+++++
// $(".dep1_0 li, .header_bottom_2")
// .mouseover(function(){
//   $("pageblur").stop().css("display", "block")
// })
// .mouseout(function(){
//   $("pageblur").stop().css("display", "none")
// })
//++++
$(".dep1_0_1, .script1")
	.mouseover(function () {
		$(".script1").css("background", "#f5f5f5");
	})
	.mouseout(function () {
		$(".script1").css("background", "white");
	});
$(".dep1_0_2, .script2")
	.mouseover(function () {
		$(".script2").css("background", "#f5f5f5");
	})
	.mouseout(function () {
		$(".script2").css("background", "white");
	});
$(".dep1_0_3, .script3")
	.mouseover(function () {
		$(".script3").css("background", "#f5f5f5");
	})
	.mouseout(function () {
		$(".script3").css("background", "white");
	});
$(".dep1_0_4, .script4")
	.mouseover(function () {
		$(".script4").css("background", "#f5f5f5");
	})
	.mouseout(function () {
		$(".script4").css("background", "white");
	});
$(".dep1_0_5, .script5")
	.mouseover(function () {
		$(".script5").css("background", "#f5f5f5");
	})
	.mouseout(function () {
		$(".script5").css("background", "white");
	});