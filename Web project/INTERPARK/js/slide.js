      $(function() {
        var i = 0;

        $("#slideclick2 li").mouseenter(function () {
          i = $(this).index()
        })

        function slide() {

          i++;

          if (i > $("#sliderimg  li:last").index()) {
            i = 0;
          }
          $("#sliderimg > li").eq(i).stop().fadeIn("slow");
          $("#sliderimg > li").eq(i - 1).stop().fadeOut();

          if (i == 1) {
            $(".slideadv").css({
              "background": "#fffed9"
            })
            $("#slideclick2 li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#slideclick2 li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });

          } else if (i == 2) {
            $(".slideadv").css({
              "background": "#c5e1d4"
            })
            $("#slideclick2 li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#slideclick2 li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else if (i == 3) {
            $(".slideadv").css({
              "background": "#cfeaf5"
            })
            $("#slideclick2 li").eq(i-1).css({
              color:"black",
              borderTop:"none",
              margin: "-1px 0 0 0"
            });

            $("#slideclick2 li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else if (i == 4) {
            $(".slideadv").css({
              "background": "#ffeb3d"
            })
            $("#slideclick2 li").eq(i-1).css({
              color:"black",
              borderTop:"none",
              margin: "-1px 0 0 0"
            });

            $("#slideclick2 li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          } else {
            $(".slideadv").css({
              "background": "#fff"
            })
            $("#slideclick2 li").eq(i-1).css({
              color:"black",
              borderTop:"none"
            });

            $("#slideclick2 li").eq(i).css({
              borderTop:"3px solid red",
              margin: "-1px 0 0 0"
            });
          }

        }

        $("#slideclick2 li").eq(0).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#fff"
          });
          $("#slideclick2 li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#sliderimg li").stop().hide();
          $("#sliderimg li").eq(0).stop().show();
        });

        $("#slideclick2 li").eq(1).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#fffed9"
          });
          $("#slideclick2 li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#sliderimg li").stop().hide();
          $("#sliderimg li").eq(1).stop().show();
        });

        $("#slideclick2 li").eq(2).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#c5e1d4"
          });
          $("#slideclick2 li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#sliderimg li").stop().hide();
          $("#sliderimg li").eq(2).stop().show();
        });

        $("#slideclick2 li").eq(3).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#cfeaf5"
          });
          $("#slideclick2 li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#sliderimg li").stop().hide();
          $("#sliderimg li").eq(3).stop().show();
        });

        $("#slideclick2 li").eq(4).mouseenter(function () {
          var i = 0;
          $(".slideadv").css({
            "background": "#ffeb3d"
          });
          $("#slideclick2 li").css({
            borderTop: "none"
          });
          $(this).css({
            borderTop: "3px solid red",
            margin:"-1px 0 0 0"
          });
          $("#sliderimg li").stop().hide();
          $("#sliderimg li").eq(4).stop().show();
        });

        var ani = setInterval(slide, 3000)

        $("#slideclick2 li").mouseover(function () {
          clearInterval(ani);
        });

        $("#slideclick2 li").mouseout(function () {
          $(this).css({
            borderTop: "3px solid red",
            margin: "-1px 0 0 0"
          });
          ani = setInterval(slide, 3000);
        });
      })