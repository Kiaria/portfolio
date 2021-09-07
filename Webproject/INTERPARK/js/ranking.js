

  $(function(){
    $('.weekranking').hide();
    $('.daywrap > div:nth-of-type(2)').click(function(){
   
    $(".today").css({"border-bottom":"1px solid #fff"})
    $(".week").css({"border-bottom":"none"})

    $('.weekranking').fadeIn();

    $('.todayranking').hide();

   });

   $('.daywrap > div:nth-of-type(1)').click(function(){
    $(".today").css({"border-bottom":"none"})
    $(".week").css({"border-bottom":"1px solid #fff"})
    $('.todayranking').fadeIn();

    $('.weekranking').hide();

   });

  });