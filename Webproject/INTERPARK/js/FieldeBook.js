      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"ebook"},
        headers:{Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
      })
      .done(function( msg ) {

       console.log( msg );
       var divs = document.getElementsByTagName('div');
       
       for(var i=0; i<divs.length; i++){
         
        let str=msg.documents[i].title;
        let str2=str.substring(0,17);
        let salep = parseInt(((msg.documents[i].price-msg.documents[i].sale_price)/msg.documents[i].price)*100)

        
        $("#fieldebook .ftextwrap div").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
        $("#fieldebook .ftextwrap div").eq(i).append("<h5>"+str2+"..."+"</h5>");
        $("#fieldebook .ftextwrap div").eq(i).append("<h6>"+msg.documents[i].sale_price+"원"+"</h6>");


        $("#fieldebook .ftextwrap div").eq(i).append("<h6 class='saleprice'>"+msg.documents[i].price+"원"+"</h6>");
        $("#fieldebook .ftextwrap div").eq(i).append("<h6 class='saleprice2'>"+"("+salep+"%↓)"+"</h6>");  
        
      }

    });
