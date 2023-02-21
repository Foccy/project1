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
        $("#header") > $("a").css("color", "black");
      } else if ((idx = 1)) {
        $("#header").css(
          "background",
          "linear-gradient(rgba(63, 63, 63, 0.459), rgba(175, 175, 175, 0))"
        );
        $("#header").css("border", "none");
        $("#header") > $(".dep1_0_1").css("color", "white");
        $("#header") > $(".dep1_0_2").css("color", "white");
        $("#header") > $(".dep1_0_3").css("color", "white");
        $("#header") > $(".dep1_0_4").css("color", "white");
        $("#header") > $(".dep1_0_5").css("color", "white");
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
