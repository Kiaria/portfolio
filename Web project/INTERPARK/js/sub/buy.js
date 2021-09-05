$(function(){
	function prev() {
		$('.buylist li:last').prependTo('.buylist');
		$('.buylist').css('margin-left', -230);
		$('.buylist').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next() {
		$('.buylist').stop().animate({marginLeft: -230}, 800, function () {
			$('.buylist li:first').appendTo('.buylist');
			$('.buylist').css({
				marginLeft: 0
			});
		});
	}

	function slide() {
		$('.buylist').stop().animate({marginLeft: -230}, 800, function () {
			$('.buylist li:first').appendTo('.buylist');
			$('.buylist').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide, 8000);


	$('#buyprev').click(function () {
		prev();
	});


	$('#buynext').click(function () {
		next();
	});
	
	

	function prev2() {
		$('.looklist li:last').prependTo('.looklist');
		$('.looklist').css('margin-left', -230);
		$('.looklist').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next2() {
		$('.looklist').stop().animate({marginLeft: -230}, 800, function () {
			$('.looklist li:first').appendTo('.looklist');
			$('.looklist').css({
				marginLeft: 0
			});
		});
	}

	function slide2() {
		$('.looklist').stop().animate({marginLeft: -230}, 800, function () {
			$('.looklist li:first').appendTo('.looklist');
			$('.looklist').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide2, 8200);


	$('#lookprev').click(function () {
		prev2();
	});


	$('#looknext').click(function () {
		next2();
	});
	
	function prev3() {
		$('.memberlist li:last').prependTo('.memberlist');
		$('.memberlist').css('margin-left', -230);
		$('.memberlist').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next3() {
		$('.memberlist').stop().animate({marginLeft: -230}, 800, function () {
			$('.memberlist li:first').appendTo('.memberlist');
			$('.memberlist').css({
				marginLeft: 0
			});
		});
	}

	function slide3() {
		$('.memberlist').stop().animate({marginLeft: -230}, 800, function () {
			$('.memberlist li:first').appendTo('.memberlist');
			$('.memberlist').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide3, 8400);


	$('#memberprev').click(function () {
		prev3();
	});


	$('#membernext').click(function () {
		next3();
	});
})