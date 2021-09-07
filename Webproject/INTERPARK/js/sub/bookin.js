$(function () {
	$(".bookinul>li").mouseover(function () {
		var i = $(this).index();
		$(".bookinul>li").removeClass("on");
		$(".bookinul>li").eq(i).addClass("on");
		$(".bookinimg>.bookinimg2").stop().hide();
		$(".bookinimg>.bookinimg2").eq(i).stop().fadeIn('fast');
		$(".bookinimg>.arrowicon").stop().hide();
		$(".bookinimg>.arrowicon").eq(i).stop().fadeIn();
	})
});