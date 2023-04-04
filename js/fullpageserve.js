$(document).ready(function () {
  $("#fullpage").fullpage({
    fixedElements: "#header",
    menu: "#menu",
    anchors: ["section", "section", "section", "section", "section"],
    sectionsColor: ["#f2f2f2", "#fff", "#7BAABE", "#fff", "#fff"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["firstSlide", "secondSlide"],
    afterLoad: function (obj, idx) {
      var activeMenu;
      if (idx > 1) {
        $("#header").css("background", "white");
        $("#header").css("border-bottom", "solid 1px gray");
        $(".search_bar span").css("color", "black");
        $(".top_menu_list i").css("color", "black");
        $("#header") > $("a").css("color", "black");
        $("#logo_img").attr("src", "./images/logo_off1.png");
        $(".search_bar::after").attr("background", "#000000c4");
        $(".change_btn li a").css("color", "white");
        $(".fnb_top li a").css("color", "gray");
      } else if ((idx = 1)) {
        $("#header").css(
          "background",
          "linear-gradient(rgba(63, 63, 63, 0.459), rgba(175, 175, 175, 0))"
        );
        $("#header").css("border", "none");
        $("#header") > $(".dep1_btn").css("color", "white");
        $(".search_bar span").css("color", "white");
        $(".top_menu_list i").css("color", "white");
        $(".top_menu_list a").css("color", "white");
        $(".top_menu_btn").css("color", "white");
        $("#logo_img").attr("src", "./images/btn_logo_on1.png");
        $(".change_btn li a").css("color", "white");
      }
      if (idx == 5) {
        activeMenu = $("#fp-nav")
          .find("li")
          .eq(idx - 1)
          .addClass("on");
      }
    },
  });
  $("#layer").draggable();
});
