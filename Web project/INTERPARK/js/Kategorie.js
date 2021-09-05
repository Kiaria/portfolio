$(function(){
           $("#nc").click(function() {
                if ($("#up").css("display") == "none") {
                    $("#up").show()
                    $("#down").hide()
	       $(".navslide").slideDown()

                } 
	
	else {
                    $("#up").hide()
                    $("#down").show()
	       $(".navslide").slideUp()
                }
            })
           $(".navslide > span").click(function(){
 	$(".navslide").slideUp()
              $("#up").hide()
              $("#down").show()
           })

})