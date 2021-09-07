	

	 $(function () {
	 	$(".dotbox>i").click(function () {
	 		var $index = $(this).index();
	 		slide($index);
	 	});
	 });





	 var cnt = 0;

	 function show() {
	 	cnt++;
	 	if (cnt < $(".adslide>li").length) {
	 		slide(cnt);
	 	} else {
	 		cnt = 0;
	 		slide(cnt);
	 	}
	 }

	 setInterval("show()", 4000);


	 function slide(cnt) {
	 	$(".adslide>li").css("opacity", 0);
	 	$(".adslide>li").eq(cnt).css("opacity", 1);
	 	$(".dotbox>i").css("color", "#999");
	 	$(".dotbox>i").eq(cnt).css("color", "#ef544d");

	 }