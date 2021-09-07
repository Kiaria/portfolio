      $(function(){
        $(".choicewrap > .choprev").click(function(){
          if($("#cb2").css("display")=="none"){
            $("#cb1").hide()
            $("#cb2").show()
          } else {
            $("#cb1").show()
            $("#cb2").hide()
          }
            if($("#choiceh5_2").css("display")=="none"){
              $("#choiceh5_1").hide()
              $("#choiceh5_2").show()
            } else if ($("#choiceh5_1").css("display")=="none"){
              $("#choiceh5_1").show()
              $("#choiceh5_2").hide()
            }
        })
        $(".choicewrap > .chonext").click(function(){
          if($("#cb2").css("display")=="none"){
            $("#cb1").hide()
            $("#cb2").show()
          } else {
            $("#cb1").show()
            $("#cb2").hide()
          }
            if($("#choiceh5_2").css("display")=="none"){
              $("#choiceh5_1").hide()
              $("#choiceh5_2").show()
            } else if ($("#choiceh5_1").css("display")=="none"){
              $("#choiceh5_1").show()
              $("#choiceh5_2").hide()
            }
        })
      })