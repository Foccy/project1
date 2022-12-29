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

$(function(){
  const mainIMG = $(".main_slide_img");
  const mainIMG1 =$(".main_slide_img>img1");
  const mainIMG2 =$(".main_slide_img>img2");
  const mainIMG3 =$(".main_slide_img>img3");
  let current = 0;
  
  timer();
  function timer(){
    setInterval(function(){
      let next = current +1;
      move(next);
    },4000)
  }
  function move(next){
    let cu = mainIMG.eq(current);
  let me =mainIMG.eq(next)
    cu.css("left","0").stop().animate({left:"-100%"});
  me.stop().animate({left:"0%"})
  }
})