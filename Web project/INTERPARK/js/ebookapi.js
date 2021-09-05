     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "무기" },
        headers:{Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c"}
    })
     .done(function (msg) {




            // 1
            $()
            $(".elist>ul>li:nth-of-type(1)>.econtent>.eimg").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            var str = msg.documents[0].title;
            var str2 = str.substring(0, 15);


            $(".elist>ul>li:nth-of-type(1)>.econtent>.ebooks>.etc_s1").append(str2);

            var str3 = msg.documents[0].contents;
            var str4 = str3.substring(0, 20);


            $(".elist>ul>li:nth-of-type(1)>.econtent>.ebooks>.etc_s5").append(str4);

            var str5 = msg.documents[0].price.toLocaleString();
            var str6 = msg.documents[0].sale_price.toLocaleString();

            $(".elist>ul>li:nth-of-type(1)>.econtent>.ebooks>.etc_spans2>.etc_s2").append(str5+"원");
            $(".elist>ul>li:nth-of-type(1)>.econtent>.ebooks>.etc_spans2>.etc_s3").append(str6+"원");


            // 2

            $(".elist>ul>li:nth-of-type(2)>.econtent>.eimg").append("<img src='" + msg.documents[1].thumbnail + "'/>");

            var str = msg.documents[1].title;
            var str2 = str.substring(0, 15);

            $(".elist>ul>li:nth-of-type(2)>.econtent>.ebooks>.etc_s1").append(str2);

            var str3 = msg.documents[1].contents;
            var str4 = str3.substring(0, 20);


            $(".elist>ul>li:nth-of-type(2)>.econtent>.ebooks>.etc_s5").append(str4);

            var str5 = msg.documents[1].price.toLocaleString();
            var str6 = msg.documents[1].sale_price.toLocaleString();

            $(".elist>ul>li:nth-of-type(2)>.econtent>.ebooks>.etc_spans2>.etc_s2").append(str5+"원");
            $(".elist>ul>li:nth-of-type(2)>.econtent>.ebooks>.etc_spans2>.etc_s3").append(str6+"원");



            // 3

            $(".elist>ul>li:nth-of-type(3)>.econtent>.eimg").append("<img src='" + msg.documents[2].thumbnail + "'/>");

            var str = msg.documents[2].title;
            var str2 = str.substring(0, 15);

            $(".elist>ul>li:nth-of-type(3)>.econtent>.ebooks>.etc_s1").append(str2);

            var str3 = msg.documents[2].contents;
            var str4 = str3.substring(0, 20);


            $(".elist>ul>li:nth-of-type(3)>.econtent>.ebooks>.etc_s5").append(str4);

            var str5 = msg.documents[2].price.toLocaleString();
            var str6 = msg.documents[2].sale_price.toLocaleString();

            $(".elist>ul>li:nth-of-type(3)>.econtent>.ebooks>.etc_spans2>.etc_s2").append(str5+"원");
            $(".elist>ul>li:nth-of-type(3)>.econtent>.ebooks>.etc_spans2>.etc_s3").append(str6+"원");

         // 4

         $(".elist>ul>li:nth-of-type(4)>.econtent>.eimg").append("<img src='" + msg.documents[3].thumbnail + "'/>");

         var str = msg.documents[3].title;
         var str2 = str.substring(0, 15);

         $(".elist>ul>li:nth-of-type(4)>.econtent>.ebooks>.etc_s1").append(str2);

         var str3 = msg.documents[3].contents;
         var str4 = str3.substring(0, 20);


         $(".elist>ul>li:nth-of-type(4)>.econtent>.ebooks>.etc_s5").append(str4);
         
         var str5 = msg.documents[3].price.toLocaleString();
         var str6 = msg.documents[3].sale_price.toLocaleString();

         $(".elist>ul>li:nth-of-type(4)>.econtent>.ebooks>.etc_spans2>.etc_s2").append(str5+"원");
         $(".elist>ul>li:nth-of-type(4)>.econtent>.ebooks>.etc_spans2>.etc_s3").append(str6+"원");
         
         // 5

         $(".elist>ul>li:nth-of-type(5)>.econtent>.eimg").append("<img src='" + msg.documents[4].thumbnail + "'/>");

         var str = msg.documents[4].title;
         var str2 = str.substring(0, 15);

         $(".elist>ul>li:nth-of-type(5)>.econtent>.ebooks>.etc_s1").append(str2);

         var str3 = msg.documents[4].contents;
         var str4 = str3.substring(0, 20);


         $(".elist>ul>li:nth-of-type(5)>.econtent>.ebooks>.etc_s5").append(str4);
         
         var str5 = msg.documents[4].price.toLocaleString();
         var str6 = msg.documents[4].sale_price.toLocaleString();

         $(".elist>ul>li:nth-of-type(5)>.econtent>.ebooks>.etc_spans2>.etc_s2").append(str5+"원");
         $(".elist>ul>li:nth-of-type(5)>.econtent>.ebooks>.etc_spans2>.etc_s3").append(str6+"원");




     });