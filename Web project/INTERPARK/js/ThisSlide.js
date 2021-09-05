$(function(){

  function thisprev(){
      $(".thisulbox>ul>li:last").prependTo(".thisulbox>ul");
      $(".thisulbox>ul").css({marginLeft:-500})
      $(".thisulbox>ul").stop().animate({marginLeft:0},"slow")
  }

  function thisnext(){
    $(".thisulbox>ul").stop().animate({marginLeft:-800},function(){
      $(".thisulbox>ul>li:first").appendTo(".thisulbox>ul");
      $(".thisulbox>ul").css({marginLeft:0})
    })
  }

  function thisslide(){
    $(".thisulbox>ul").stop().animate({marginLeft:-800},function(){
      $(".thisulbox>ul>li:first").appendTo(".thisulbox>ul");
      $(".thisulbox>ul").css({marginLeft:0})
    })
  }
  setInterval(thisslide,4000)

  $(".thisprev").click(function(){
    thisprev()
  })

  $(".thisnext").click(function(){
    thisnext()
  })

})