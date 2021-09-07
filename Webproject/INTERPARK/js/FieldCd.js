      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"CD/동영상"},
        headers:{Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
      })
      .done(function( msg ) {

       console.log( msg );
       var divs = document.getElementsByTagName('div');

       for(var i=0; i<divs.length; i++){

        var str=msg.documents[i].title;
        var str2=str.substring(0,17);
        var salep = parseInt(((msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price)*100)


        $("#fieldcd .ftextwrap div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#fieldcd .ftextwrap div").eq(i).append("<h5>"+str2+"..."+"</h3>");
        $("#fieldcd .ftextwrap div").eq(i).append("<h6>"+msg.documents[i].sale_price+"원"+"</h6>");


        $("#fieldcd .ftextwrap div").eq(i).append("<h6 class='saleprice'>"+msg.documents[i].price+"원"+"</h6>");
        $("#fieldcd .ftextwrap div").eq(i).append("<h6 class='saleprice2'>"+"("+salep+"%↓)"+"</h6>");  

      }

    });