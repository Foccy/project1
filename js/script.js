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

  //clearInterval
  clearAuto();
  function clearAuto() {
    $("#brandVisual,#buttonList,.controls").mouseenter(function () {
      clearInterval(id);
    });
    $("#brandVisual,#buttonList,.controls").mouseleave(function () {
      timer();
    });
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
}); //jQuery

//--------------------------------------------------first slide depth,color query

$(".dep0_1>a")
  .click(function () {
    $("dep0_1_1").stop().slideDown(1000).stop();
  })
  .click(function () {
    $("dep0_1_1").stop().slideUp(1000);
  });

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

//-----------------------------------------------------------------------\
