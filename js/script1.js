//----------------------------------------firstslide Global

let gnbLiA = $(".dep0_1>li>.global");
console.log(gnbLiA);

gnbLiA.click(function () {
  if (!$(this).next().hasClass("on")) {
    $(".dep0_1_1").removeClass("on");
    $(this).next().addClass("on");
  } else {
    $(this).next().removeClass("on");
  }
});

//------------------------third rolling--------
$(function () {
  //변수
  let list = $("#card3-1"),
    num = 0;
  const show_num = 3,
    total = list.find("li").length,
    li_width = list.find("li").eq(0).width(),
    copyObj = list.find("li").clone(),
    ctrl = $(".ctrl");

  list.append(copyObj);

  const timer = setInterval(autoplay, 2000);
  clearInterval(timer);
  setInterval(autoplay, 4000);
  ctrl.click(function () {
    if (ctrl.text() === "stop") {
      ctrl.text("play");
    }
    console.log(ctrl.text() === "stop");
  });

  function autoplay() {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
  }

  $(".next").click(function () {
    if (num == total) {
      num = 0; //0
      list.css("margin-left", 0);
    }
    num++; //요기의 num 0
    list.stop().animate({ "margin-left": -li_width * num }, 1000); //요기의num
    return false;
  });
  $(".prev").click(function () {
    if (num == 0) {
      num = total; //3
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
});
