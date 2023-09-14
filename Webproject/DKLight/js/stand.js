$.ajax({

	url: "./json/desk.json",

	dataType: "json",

	success : function(data){

		if(data.length>0){


			for(var i in data){
				var name = data[i].name;
				var price = data[i].price;		
				var url = data[i].url;
				var text = data[i].text;


				$(".bsbox").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
				$(".bsbox").eq(i).append('<a href="#">'+'<div class="bsname">'+data[i].name+'</div>'+'</a>');      
				$(".bsbox").eq(i).append('<span>'+data[i].price+'</span>'); 
				$(".bsbox").eq(i).append('<br>'+'<span class="bsspan">'+data[i].text+'</span>');

			}

		}

	}

});
