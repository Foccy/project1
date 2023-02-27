//--------------------------------------------------layer popup
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#layer button")
    .addEventListener("click", function () {
      document.querySelector("#layer").style.display = "none";
    });
});

//--------------------------------------------------full page dim

$(".dep1_0 li, .header_bottom_2")
  .mouseover(function () {
    $(".header_bottom_2").stop().slideDown(0);
    $("#pageblur").addClass(".dim");
  })
  .mouseout(function () {
    $(".header_bottom_2").stop().slideUp(0);
    $("#pageblur").removeClass(".dim");
  });

//--------------------------------------------------first slide query
$(function () {
  const visual = $("#brandVisual>ul>li");
  const button = $("#buttonList>li");
  const stopbutton = $("#stopbtn>li");
  let current = 0; //현재
  let btnIdx = 0; //클릭한 페이저 버튼의 인덱스
  let id; //setIntervalId
  const speed = 3000;

  //버튼클릭함수
  button.click(function () {
    btnIdx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move();
  });

  //시간마다실행
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

  //이동시키는 함수
  function move() {
    if (current == btnIdx) return;
    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnIdx;
  }

  //좌우컨트롤버튼
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
    let btn_play = $(".stopbtn_play");
    let btn_stop = $(".stopbtn_pause");
    btn_stop.click(function () {
      btn_stop.css("z-index", 9);
      btn_play.css("z-index", 10);
      clearInterval(id);
    });
    btn_play.click(function () {
      btn_play.css("z-index", 9);
      btn_stop.css("z-index", 10);
      timer();
    });
  }

  $("#buttonList li").click(function () {
    clearInterval(timer);
  });
}); //jQuery

//----------------------------------------firstslide Global

// let gnbLiA = $(".dep0_1>li>.global");

// gnbLiA.click(function () {
//   if (!$(this).next().hasClass("on")) {
//     $(".dep0_1_1").removeClass("on");
//     $(this).next().addClass("on");
//   } else {
//     $(this).next().removeClass("on");
//   }
// });

// $(".dep0_1>a")
//   .click(function () {
//     $("dep0_1_1").stop().slideDown(1000).stop();
//   })
//   .click(function () {
//     $("dep0_1_1").stop().slideUp(1000);
//   });
//--------------------------------------------quick menu

let quickMenu = $(".quick_list");

quickMenu.cli;

//--------------------------------------------first slide depth,color query

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
//---------------------------1st slide mainfunc tab-------------------------------------//

var tabmenu = $(".changeButton a");
var menulist = $(".func2>ul");
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

//---------------------------------------------------------------------------------------
