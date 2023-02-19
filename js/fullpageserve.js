$(document).ready(function () {
  $("#fullpage").fullpage({
    menu: "#menu",
    anchors: ["section", "section", "section", "section", "section"],
    sectionsColor: ["#f2f2f2", "#fff", "#7BAABE", "#fff", "#fff"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["firstSlide", "secondSlide"],
    afterLoad: function (obj, idx) {
      var activeMenu;
      if (idx == 5) {
        activeMenu = $("#fp-nav")
          .find("li")
          .eq(idx - 1)
          .addClass("on");
      }
    },
  });
});
