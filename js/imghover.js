$(function(){
    //INTER PARK
    $("#project1_img").mouseenter(function(){
        $("#project1 > li").stop().animate({marginTop:"-1310px"},4500)
    }).mouseleave(function(){
        $("#project1 > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //DQR
    $("#project2_img").mouseenter(function(){
        $("#project2 > li").stop().animate({marginTop:"-2600px"},4500)
    }).mouseleave(function(){
        $("#project2 > li").stop().animate({marginTop:"0px"},3000)
    })

    //DQR Mobile
    $(".project2_mobile > .project2_mobile_box > ul").mouseenter(function(){
        $(".project2_mobile > .project2_mobile_box > ul").stop().animate({marginTop:"-7500px"},10000)
    }).mouseleave(function(){
        $(".project2_mobile > .project2_mobile_box > ul").stop().animate({marginTop:"0px"},5000)
    })
    
    //DK대광조명
    $("#project3_img").mouseenter(function(){
        $("#project3 > li").stop().animate({marginTop:"-3120px"},4500)
    }).mouseleave(function(){
        $("#project3 > li").stop().animate({marginTop:"0px"},3000)
    })

    //DINA
    $("#project4_img").mouseenter(function(){
        $("#project4 > li").stop().animate({marginTop:"-1082px"},4500)
    }).mouseleave(function(){
        $("#project4 > li").stop().animate({marginTop:"0px"},3000)
    })

     //DINA Mobile
    $(".project4_mobile > .project4_mobile_box > ul").mouseenter(function(){
        $(".project4_mobile > .project4_mobile_box > ul").stop().animate({marginTop:"-2775px"},10000)
    }).mouseleave(function(){
        $(".project4_mobile > .project4_mobile_box > ul").stop().animate({marginTop:"0px"},5000)
    })
})