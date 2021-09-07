$(function () {
	$("#submenu>ul>li").click(function () {
		var i = $(this).index();
		$("#submenu>ul>li").removeClass("on");
		$("#submenu>ul>li").eq(i).addClass("on");
	})
});