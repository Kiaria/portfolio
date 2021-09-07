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


				$(".bdbox").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
				$(".bdbox").eq(i).append('<a href="#">'+'<div class="bdname">'+data[i].name+'</div>'+'</a>');      
				$(".bdbox").eq(i).append('<span>'+data[i].price+'</span>'); 
				$(".bdbox").eq(i).append('<br>'+'<span id="bdspan">'+data[i].text+'</span>');

			}

		}

	}

});
