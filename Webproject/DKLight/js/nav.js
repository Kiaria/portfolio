$(function(){

	$('.navbox > ul > li').mouseover(function(){

		$(this).children('.sub_menu').stop().show();

	}).mouseout(function(){

		$('.sub_menu').stop().hide();

	});

});