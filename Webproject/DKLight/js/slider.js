	$(function(){
        function prev(){
           $('.main li:last').prependTo('.main');
            // $('.slide').css({marginLeft:-1000}); 
            $('.main').stop().animate({marginLeft:0},800);

        }



        function next(){
        	$('.main').stop().animate({marginLeft:0}, function(){
        		$('.main li:first').appendTo('.main');
        		$('.main').css({marginLeft:0});
        	});
        }


        function main(){
        	$('.main').stop().animate({marginLeft:0}, function(){
        		$('.main li:first').appendTo('.main');
        		$('.main').css({marginLeft:0});
        	});
        }

        setInterval(main, 3000);

        $('.prev').click(function(){
        	prev();
        });

        $('.next').click(function(){
        	next();
        });

            function prev2(){
            $('.main2 li:last').prependTo('.main2');
            // $('.slide').css({marginLeft:-1000}); 
            $('.main2').stop().animate({marginLeft:0},800);

        }



        function next2(){
            $('.main2').stop().animate({marginLeft:0}, function(){
                $('.main2 li:first').appendTo('.main2');
                $('.main2').css({marginLeft:0});
            });
        }


        function main2(){
            $('.main2').stop().animate({marginLeft:0}, function(){
                $('.main2 li:first').appendTo('.main2');
                $('.main2').css({marginLeft:0});
            });
        }

        setInterval(main2, 4000);

        $('.prev2').click(function(){
            prev2();
        });

        $('.next2').click(function(){
            next2();
        });

    });