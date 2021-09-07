$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "프레드릭 배크만"  },
        headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        for (var i = 0; i < 6; i++) {
            $(".anotherbookli").eq(i).append("<img src='" + msg.documents[i + 1].thumbnail + "'/>");
            $(".anotherbookli").eq(i).append("<p>" + msg.documents[i + 1].title + "</p>");

            $(".anotherbookli").eq(i).append("<div class='price_tag'></div>");
            $(".pricetag").eq(i).append("<del>" + msg.documents[i].price + "원</p>");
            $(".pricetag").eq(i).append("<p><span>" + msg.documents[i].sale_price + "</span>원</p>");

        }
    }); // 저자의 다른 책


//역자의 다른책
$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {  query: "수상한 휴가" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(0).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(0).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(0).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(0).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 1

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "불타는 소녀들" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(1).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(1).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(1).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(1).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 2

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "맥베스 (보급판)" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(2).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(2).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(2).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(2).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 3

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "세상의 한 조각" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(3).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(3).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(3).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(3).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 4

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소원을 이루는 완벽한 방법" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(4).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(4).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(4).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(4).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 5

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "먹을 수 있는 여자" },
         headers: { Authorization: "KakaoAK dd34af244d07a5415ebdce6a61ce517c" }
    })
    .done(function (msg) {
        $(".anotherbookli2").eq(5).prepend("<p>" + msg.documents[0].title + "</p>");
        $(".anotherbookli2").eq(5).prepend("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".pricetag2").eq(5).append("<del>" + msg.documents[0].price + "원</p>");
        $(".pricetag2").eq(5).append("<p><span>" + msg.documents[0].sale_price + "</span>원</p>");
    }); // 역자의 다른 책 6