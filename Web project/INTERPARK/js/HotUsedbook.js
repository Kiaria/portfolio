      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"노래"},
        headers:{Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
      })
      .done(function( msg ) {

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );


            /// 1

            var str = msg.documents[0].title;
            var str2 = str.substring(0,15);
            var str3 = msg.documents[0].price.toLocaleString()
            var str4 = msg.documents[0].sale_price.toLocaleString()

            $(".hotused > .hotusedlist > ul > li").eq(0).append("<img src='"+msg.documents[0].thumbnail+"'/>");
            $(".hotused > .hotusedlist > ul > li").eq(0).append("<h4>"+str2+"</h4>")
            $(".hotused > .hotusedlist > ul > li").eq(0).append("<span>"+str3+"원</span>")
            $(".hotused > .hotusedlist > ul > li").eq(0).append("<h5>"+str4+"원 </h5>")

            /// 2

            var str6 = msg.documents[1].title;
            var str7 = str6.substring(0,15);
            var str8 = msg.documents[1].price.toLocaleString()
            var str9 = msg.documents[1].sale_price.toLocaleString()

            $(".hotused > .hotusedlist > ul > li").eq(1).append("<img src='"+msg.documents[1].thumbnail+"'/>");
            $(".hotused > .hotusedlist > ul > li").eq(1).append("<h4>"+str7+"</h4>")
            $(".hotused > .hotusedlist > ul > li").eq(1).append("<span>"+str8+"원</span>")
            $(".hotused > .hotusedlist > ul > li").eq(1).append("<h5>"+str9+"원 </h5>")

            /// 3

            var str11 = msg.documents[2].title;
            var str12 = str11.substring(0,15);
            var str13 = msg.documents[2].price.toLocaleString()
            var str14 = msg.documents[2].sale_price.toLocaleString()

            $(".hotused > .hotusedlist > ul > li").eq(2).append("<img src='"+msg.documents[2].thumbnail+"'/>");
            $(".hotused > .hotusedlist > ul > li").eq(2).append("<h4>"+str12+"</h4>")
            $(".hotused > .hotusedlist > ul > li").eq(2).append("<span>"+str13+"원</span>")
            $(".hotused > .hotusedlist > ul > li").eq(2).append("<h5>"+str14+"원 </h5>")

            /// 4

            var str16 = msg.documents[3].title;
            var str17 = str16.substring(0,15);
            var str18 = msg.documents[3].price.toLocaleString()
            var str19 = msg.documents[3].sale_price.toLocaleString()

            $(".hotused > .hotusedlist > ul > li").eq(3).append("<img src='"+msg.documents[3].thumbnail+"'/>");
            $(".hotused > .hotusedlist > ul > li").eq(3).append("<h4>"+str17+"</h4>")
            $(".hotused > .hotusedlist > ul > li").eq(3).append("<span>"+str18+"원</span>")
            $(".hotused > .hotusedlist > ul > li").eq(3).append("<h5>"+str19+"원 </h5>")


          });