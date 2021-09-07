$(function(){
  var i=0;
  $(".exclusive > .exlist > li").mouseover(function(){
    i = ($(this).index())+1
    $(".exclusive > .exbook > li").hide()

    $(".exclusive > .exlist > li").css({
      "border-left" : "none",
      "border-top" : "none",
      "border-right" : "none",
      "border-bottom" : "1px solid #000",
      "color" : "#000"
    })

    $(".exclusive > .exlist > li:nth-of-type"+"("+i+")").css({
      "border-left" : "1px solid #000",
      "border-top" : "1px solid #000",
      "border-right" : "1px solid #000",
      "border-bottom" : "none",
      "color" : "#E35039"
    })

    $(".exclusive > .exbook > li:nth-of-type"+"("+i+")").stop().show()
  })
});