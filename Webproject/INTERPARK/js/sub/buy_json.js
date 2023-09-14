$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: { query: "소설"},
		headers: {	Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
	})
	.done(function (msg) {

		var divs = document.getElementsByClassName('buy');

		for (var i = 0; i < divs.length; i++) {

			$(".buy").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0, 30);
			$(".buy").eq(i).append("<p>" + str2 + "</p>");
		}
	});


$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {	query: "소설/단편"},
		headers: {	Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
	})
	.done(function (msg) {

		var divs = document.getElementsByClassName('look');

		for (var i = 0; i < divs.length; i++) {

			$(".look").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0, 30);
			$(".look").eq(i).append("<p>" + str2 + "</p>");
		}
	});

$.ajax({
		method: "GET",
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		data: {	query: "소설/고양이"},
		headers: {	Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
	})
	.done(function (msg) {

		var divs = document.getElementsByClassName('member');

		for (var i = 0; i < divs.length; i++) {

			$(".member").eq(i).append('<div class="rebook">' + "<img src='" + msg.documents[i].thumbnail + "'/></div>");

			var str = msg.documents[i].title;
			var str2 = str.substring(0, 30);
			$(".member").eq(i).append("<p>" + str2 + "</p>");
		}
	});
