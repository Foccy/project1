//--------------------------third  slide tab---------------------------------------------\

var thirdTabmenu = $(".info1-1 li a");
var thirdPanels = $(".info2>div");
thirdTabmenu.eq(0).addClass("activate");
thirdPanels.eq(0).show();

thirdTabmenu.click(function (s) {
  s.preventDefault();
  let click1 = $(this);
  let currentlink = click1.attr("href");
  thirdTabmenu.removeClass("activate");
  click1.addClass("activate");
  thirdPanels.hide();
  $(currentlink).show();
});

//--------------------------third  slide tab---------------------------------------------\

var caraselTab = $(".wrap3-1-3 li a");
var rollingCarasel = $(".wrap3-0 > div");
caraselTab.eq(0).addClass("activation");
rollingCarasel.eq(0).show();

caraselTab.click(function (ss) {
  ss.preventDefault();
  let click2 = $(this);
  let currentlink2 = click2.attr("href");
  caraselTab.removeClass("activation");
  click2.addClass("activation");
  rollingCarasel.hide();
  $(currentlink2).show();
});
//--------------------------third  slide tab---------------------------------------------\
let info = document.querySelectorAll(".card3-1");
console.log(info.length);
let infoNum = document;
//--------------------------------------third rolling--------

$(function () {
  //변수
  let list = $("#card3-1"),
    num = 0;
  const show_num = 3,
    total = list.find("li").length,
    li_width = list.find("li").eq(0).width(),
    copyObj = list.find("li").clone(),
    ctrl = $(".pause");
    console.log(total);

  list.append(copyObj);

  const timer1 = setInterval(autoplay, 2000);
  clearing = clearInterval(timer1);
  third_id = setInterval(autoplay, 4000);

  function autoplay() {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
  }
  bannerNum()
  function bannerNum(){
    for(i=0; i<total+1; i++){
      let carauselNum = i
      console.log(carauselNum);
      $('.info3-1-2').text(carauselNum + `/` + total)
    }
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

  third_rolling();
  function third_rolling() {
  let btn_play1 = $(".play1");
  let btn_stop1 = $(".pause1");
  btn_stop1.click(function () {
    clearInterval(third_id);
    btn_stop1.css("display", "none");
    btn_play1.css("display", "inline-block");
  });
  btn_play1.click(function () {
    btn_play1.css("display", "none");
    btn_stop1.css("display", "inline-block");
    setInterval(timer1)
  });
}

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


//-----------------------------------------third courasel -------------------------

$(function () {
  //변수
  let list = $("#wrap3-2"),
    num = 0;
  const show_num = 5,
    total = list.find("ul").length,
    li_width = list.find("ul").eq(0).width();
  (copyObj = list.find("ul").clone()), (ctrl = $(".ctrl"));

  list.append(copyObj);

  $(".rightbtn").click(function () {
    if (num == total) {
      num = 0; //0
      list.css("margin-left", 0);
    }
    num++; //요기의 num 0
    list
      .stop()
      .animate({ "margin-left": -li_width * num }, 1000)
      .css("margin-left", "30px");
    return false;
  });

  $(".leftbtn").click(function () {
    if (num == 0) {
      num = total; //3
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
});

$(function () {
  //변수
  let list = $("#wrap3-1"),
    num = 0;
  const show_num = 5,
    total = list.find("ul").length,
    li_width = list.find("ul").eq(0).width();
  (copyObj = list.find("ul").clone()), (ctrl = $(".ctrl"));

  list.append(copyObj);

  $(".rightbtn").click(function () {
    if (num == total) {
      num = 0; //0
      list.css("margin-left", 0);
    }
    num++; //요기의 num 0
    list
      .stop()
      .animate({ "margin-left": -li_width * num }, 1000)
      .css("margin-left", "30px");
    return false;
  });

  $(".leftbtn").click(function () {
    if (num == 0) {
      num = total; //3
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
});

$(function () {
  //변수
  let list = $("#wrap3-3"),
    num = 0;
  const show_num = 5,
    total = list.find("ul").length,
    li_width = list.find("ul").eq(0).width();
  (copyObj = list.find("ul").clone()), (ctrl = $(".ctrl"));

  list.append(copyObj);

  $(".rightbtn").click(function () {
    if (num == total) {
      num = 0; //0
      list.css("margin-left", 0);
    }
    num++; //요기의 num 0
    list
      .stop()
      .animate({ "margin-left": -li_width * num }, 1000)
      .css("margin-left", "30px");
    return false;
  });

  $(".leftbtn").click(function () {
    if (num == 0) {
      num = total; //3
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
});
