$(function(){
  var i=0;
  $(".field > .fieldbox > #fieldbooklist > li").mouseenter(function(){
    i = ($(this).index())+1
    $(".field > .fieldbox > div").hide()


    $(".field > .fieldbox > #fieldbooklist > li").css({
	"border-bottom":"none",
             "color":"#000	"
    })

    $(".field > .fieldbox > #fieldbooklist > li:hover").css({
	"border-bottom":"2px solid #e66a57",
             "color":"#e66a57"
    })


    $(".field > .fieldbox > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
  })
});