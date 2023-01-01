document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#layer button")
    .addEventListener("click", function () {
      document.querySelector("#layer").style.display = "none";
    });
});
// $(function () {
//   $(".dep1_0>li>h2>a .header_bottom_2").mouseover(function () {
//     $(".header_bottom_2").stop().slideDown(600);
//   });
//   $(".dep1_2>h2 .dep2").mouseleave(function () {
//     $(".dep1_2>h2").stop().slideUp(600);
//   });

//   var i = $(this).index();
//   $(".dep1_2").mouseover(function () {});
// });

// $('.dep1_0 li').mouseover(function(){
//   $(".header_bottom_2").stop().slideDown(600);
// });

// $('.dep1_0 li').mouseout(function(){
//   $(".header_bottom_2").stop().slideUp(600);
// });

// $('.dep1_0 li').mouseover(function(){
//   $(".header_bottom_2").stop().slideDown(600);
// }).mouseout(function(){
//   $(".header_bottom_2").stop().slideUp(600);
// });

$(".dep1_0 li, .header_bottom_2")
  .mouseover(function () {
    $(".header_bottom_2").stop().slideDown(0);
    $("dep2").css("background : gray");
  })
  .mouseout(function () {
    $(".header_bottom_2").stop().slideUp(0);
  });
//------------------------------------------------------

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

let num = 1;
function nextGallery() {
  //위에서아래로
  num++;
  if (num >= 7) {
    num = 1;
  }
  document.getElementById("gallery").src = "images/img" + num + ".jpg";
  return false;
}
function prevGallery() {
  num--;
  if (num <= 0) {
    num = 7;
  }
  document.getElementById("gallery").src = "images/img" + num + ".jpg";
  return false;
}
// -----------------------------------
//  --- 슬라이드 그냥 변경 스크립트

// var i = 0,
//   k = null,
//   repeat;
// timer();
// function timer() {
//   setInterval(function () {
//     i++;
//     k = i - 1;
//     if (i == 3) {
//       i = 0;
//     }
//     slide();
//   }, 5000);
// }
// function slide() {
//   $(".main_slide_img li img").eq(i).addClass("on");
//   $(".main_slide_img li img").eq(k).removeClass("on");
// }

//-------------------------

$(function () {
  const mainIMG = $("#main_slide_img");
  const play = $("#playbox1");
  let current = 0;
  let btnIdx = 0;
  let id;

  play.click(function () {
    btnIdx = $(this).index();
    console.log(btnIdx);
    play.removeClass("on");
    $(this).addClass("on");
    move();
  });

  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      // if (next == mainIMG.length) {
      //   next = 0;
      // }
      console.log(next);
      move(next);
    }, 4000);
  }
  function move(next) {
    let cu = mainIMG.eq(current);
    let me = mainIMG.eq(next);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    me.stop().animate({ left: "0%" });
  }

  clearAuto();
  function clearAuto() {
    $(".main_slide_img,.playbox1,.controls").mouseenter(function () {
      clearInterval(id);
    });

    $(".main_slide_img,.playbox1,.controls").mouseleave(function () {
      timer();
    });
  }
});

// next에서 숫자가 올라가지를 않음. length 배열
