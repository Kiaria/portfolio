$(function () {
	var wid = $(".trslider").width();
	var i = $(".side-btns").index();
	var len = $(".slides li").length;
	$(".trprev").click(function () {
		if (i == 0) {
			i = len - 1;
		} else {
			i = i - 1;
		}

		showSlide();
	});

	$(".trnext").click(function () {
		if (i == 4) {
			i = 0;
		} else {
			i = i + 1;
		}
		showSlide();
	});

	function showSlide() {
		$(".slides li").stop(true, true).fadeOut();
		$(".slides li").eq(i).stop(true, true).fadeIn();
	}


});