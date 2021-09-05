$(document).ready(function () {
    // 펼쳐보기, 접어보기

    $(".text_spread").eq(0).click(function () { //책소개 펼쳐보기
        $(".secon").height("auto");
        $(".text_spread").eq(0).hide();
        $("#hiddenp1").show();
        $(".text_spread").eq(1).show();
    });

    $(".text_spread").eq(1).click(function () { //책소개 접어보기
        $(".secon").height("auto");
        $(".text_spread").eq(1).hide();
        $("#hiddenp1").hide();
        $(".text_spread").eq(0).show();
    });


    $(".publisher").eq(0).click(function () { //출판사 서평 펼쳐보기
        $(".secon").height("auto");
        $(".publisher").eq(0).hide();
        $("#hiddenp2").show();
        $(".publisher").eq(1).show();
    });

    $(".publisher").eq(1).click(function () { //출판사 서평 접어보기
        $(".secon").height("auto");
        $(".publisher").eq(1).hide();
        $("#hiddenp2").hide();
        $(".publisher").eq(0).show();
    });


    $(".Recommendation").eq(0).click(function () { //추천사 펼쳐보기
        $(".secon").height("auto");
        $(".Recommendation").eq(0).hide();
        $("#hiddenp3").show();
        $(".Recommendation").eq(1).show();
    });

    $(".Recommendation").eq(1).click(function () { //추천사 접어보기
        $(".secon").height("auto");
        $(".Recommendation").eq(1).hide();
        $("#hiddenp3").hide();
        $(".Recommendation").eq(0).show();
    });


     $(".bookindex").eq(0).click(function () { //목차 펼쳐보기
        $(".secon").height("auto");
        $(".bookindex").eq(0).hide();
        $("#hiddenp4").show();
        $(".bookindex").eq(1).show();
    });

    $(".bookindex").eq(1).click(function () { //목차 접어보기
        $(".secon").height("auto");
        $(".bookindex").eq(1).hide();
        $("#hiddenp4").hide();
        $(".bookindex").eq(0).show();
    });



     $(".inthetext").eq(0).click(function () { //본문중에서 펼쳐보기
        $(".secon").height("auto");
        $(".inthetext").eq(0).hide();
        $("#hiddenp5").show();
        $(".inthetext").eq(1).show();
    });

    $(".inthetext").eq(1).click(function () { //본문중에서 접어보기
        $(".secon").height("auto");
        $(".inthetext").eq(1).hide();
        $("#hiddenp5").hide();
        $(".inthetext").eq(0).show();
    });

});