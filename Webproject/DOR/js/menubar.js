	$(document).ready(function(){
			$('#bar1').on('click', function(){
				$("#barback").show();
				$('#nav1').show().animate({
					right:0
				});  
			});

			$(function(){
				$(".bar2").click(function(){
					$("#bar1").show();
					$("#nav1").hide();
					$("#barback").hide();
				});
			});

      });