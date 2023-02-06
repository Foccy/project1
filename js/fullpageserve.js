
      $(document).ready(function () {
        $("#fullpage").fullpage({
          menu: "#menu",
          anchors: ["section1", "section2", "section3", "section4"],
          sectionsColor: ["#f2f2f2", "#fff", "#7BAABE", "#fff"],
          navigation: true,
          navigationPosition: "right",
          navigationTooltips: ["firstSlide", "secondSlide"],
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