$(function(){
	$(".submenulist>li").mouseover(function () {
		var i = $(this).index();
		$(".submenulist>li").removeClass("on");
		$(".submenulist>li").eq(i).addClass("on");
	})

});