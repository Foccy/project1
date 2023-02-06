$(document).ready(function () {
  $("#fullpage").fullpage({
    menu: "#menu",
    anchors: ["brandVisual", "second_slide", "third_slide", "fourth_slide"],
    sectionsColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    navigation: true,
    navigationPosition: "left",
    afterLoad: function (obj, idx) {
      var activeMenu;
      if (idx == 4) {
        activeMenu = $("#fp-nav")
          .find("li")
          .eq(idx - 1)
          .addClass("on");
      }
    },
  });
});