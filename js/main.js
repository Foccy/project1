/* #layer */
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#layer button")
    .addEventListener("click", function () {
      document.querySelector("#layer").style.display = "none";
    });
});

/* gnb 2depth */
$(".gnb_dep1 li, .gnb_wrap2")
  .mouseover(function () {
    $(".gnb_wrap2").stop().slideDown(0);
    $("#pageblur").addClass(".dim");
  })
  .mouseout(function () {
    $(".gnb_wrap2").stop().slideUp(0);
    $("#pageblur").removeClass(".dim");
  });


/* main visual slide */
$(function () {
  const visual = $("#brandVisual>ul>li");
  const button = $("#btn_list>li");
  const stopbutton = $("#stop_btn>li");
  let current = 0; 
  let btnIdx = 0; 
  let id; 
  const speed = 3000;

  //btn click
  button.click(function () {
    btnIdx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move();
  });

  //time interval
  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1; //0+1
      if (next == visual.length) {
        next = 0;
      }
      button.eq(next).trigger("click");
    }, speed);
  }

  //move
  function move() {
    if (current == btnIdx) return;
    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnIdx;
  }

  //right,left btn
  controls();
  function controls() {
    $(".controls .prev").click(function () {
      btnIdx = btnIdx - 1;
      if (btnIdx < 0) {
        btnIdx = visual.length - 1;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let pr = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "100%" });
      pr.css("left", "-100%").stop().animate({ left: "0%" });
      current = btnIdx;
    });
    $(".controls .next").click(function () {
      btnIdx = btnIdx + 1;
      if (btnIdx == visual.length) {
        btnIdx = 0;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0%" });
      current = btnIdx;
    });
  }
  mainvs_btn();
  function mainvs_btn() {
    let btn_play = $(".stop_btn_play");
    let btn_stop = $(".stop_btn_pause");
    btn_stop.click(function () {
      btn_stop.css("display", "none");
      btn_play.css("display", "block");
      clearInterval(id);
    });
    btn_play.click(function () {
      btn_play.css("display", "none");
      btn_stop.css("display", "block");
      timer();
    });
  }

  $("#btn_list li").click(function () {
    clearInterval(timer);
  });
}); 

/* global toggle */
$(document).ready(function () {
  $("#global").click(function () {
    $("#top_menu_glbtoggle").slideToggle("slow");
  });
});

/* quick menu toggle */
$(document).ready(function () {
  $("#quick_menu_open").click(function () {
    $(".quick_menu_list").slideToggle("slow");
  });
});

/* 2depth color */
$(".gnb_dep1_list1, .script1")
  .mouseover(function () {
    $(".script1").css("background", "#f5f5f5");
  })
  .mouseout(function () {
    $(".script1").css("background", "white");
  });
$(".gnb_dep1_list2, .script2")
  .mouseover(function () {
    $(".script2").css("background", "#f5f5f5");
  })
  .mouseout(function () {
    $(".script2").css("background", "white");
  });
$(".gnb_dep1_list3, .script3")
  .mouseover(function () {
    $(".script3").css("background", "#f5f5f5");
  })
  .mouseout(function () {
    $(".script3").css("background", "white");
  });
$(".gnb_dep1_list4, .script4")
  .mouseover(function () {
    $(".script4").css("background", "#f5f5f5");
  })
  .mouseout(function () {
    $(".script4").css("background", "white");
  });
$(".gnb_dep1_list5, .script5")
  .mouseover(function () {
    $(".script5").css("background", "#f5f5f5");
  })
  .mouseout(function () {
    $(".script5").css("background", "white");
  });

/* main_func_tab */
var tabmenu = $(".change_btn a");
var menulist = $(".main_func_tab>ul");
tabmenu.eq(0).addClass("active1");
menulist.eq(0).show();

tabmenu.click(function (s) {
  s.preventDefault();
  let take = $(this);
  let nowlink = take.attr("href");
  tabmenu.removeClass("active1");
  take.addClass("active1");
  menulist.hide();
  $(nowlink).show();
});

/* hiraclip tab */
var tabmenu1 = $(".hiraclip_content1 a");
var panels1 = $(".hiraclip_content2>div");
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

/* hiranews notice tab */
var thirdTabmenu = $(".notice_info1_list1 li a");
var thirdPanels = $(".notice_info2>div");
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

/* hiranews bannerzone */
$(function () {
  let list = $("#bannerzone_card_list"),
    num = 0;
  const show_num = 3,
    total = list.find("li").length,
    li_width = list.find("li").eq(0).width(),
    copyObj = list.find("li").clone(),
    onlineC = 1 ;
     onlineTotal = $('.slide-total');
   onlineNow = $('.slide-now');

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
  

  $(".next").click(function () {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++; 
    list.stop().animate({ "margin-left": -li_width * num }, 1000); //요기의num
    onlineC ++;
  if(onlineC > total){
    onlineC = 1;
  }
  onlineNow.text(onlineC);
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
      num = total; 
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    
    return false;
  });
  
  onlineC --;
  if(onlineC < 1){
    onlineC = onlineLiLength;
  }
  onlineNow.text(onlineC);
});

/* hiranews carasoul + tab 1*/
var caraselTab = $(".hiranews_sns_list li a");
var rollingCarasel = $(".hiranews_carasoul > div");
caraselTab.eq(0).addClass("activation");
rollingCarasel.eq(0).show();
/* tab */
caraselTab.click(function (ss) {
  ss.preventDefault();
  let click2 = $(this);
  let currentlink2 = click2.attr("href");
  caraselTab.removeClass("activation");
  click2.addClass("activation");
  rollingCarasel.hide();
  $(currentlink2).show();
});
/* carasoul */
$(function () {
  let list = $("#hiranews_carasoul_box1"),
    num = 0;
  const show_num = 5,
    total = list.find("ul").length,
    li_width = list.find("ul").eq(0).width();
  (copyObj = list.find("ul").clone()), (ctrl = $(".ctrl"));

  list.append(copyObj);

  $(".rightbtn").click(function () {
    if (num == total) {
      num = 0; 
      list.css("margin-left", 0);
    }
    num++; 
    list
      .stop()
      .animate({ "margin-left": -li_width * num }, 1000)
      .css("margin-left", "30px");
    return false;
  });

  $(".leftbtn").click(function () {
    if (num == 0) {
      num = total; 
      list.css("margin-left", -li_width * num);
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  });
});
