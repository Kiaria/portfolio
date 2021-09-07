$(function () {
	$(".bookstyle>li").mouseover(function () {
		var i = $(this).index();
		$(".bookstyle>li").removeClass("on");
		$(".bookstyle>li").eq(i).addClass("on");
		$(".bookinfo>li").stop().hide();
		$(".bookinfo>li").eq(i).stop().fadeIn();
	})
	
});