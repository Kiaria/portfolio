$.ajax({

	url: "./json/today.json",

	dataType: "json",

	success : function(data){

		if(data.length>0){


			for(var i in data){
				var name = data[i].name;
				var price = data[i].price;		
				var url = data[i].url;
				var text = data[i].text;


				$(".tbox").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 
				$(".tbox").eq(i).append('<a href="#">'+'<div class="tname">'+data[i].name+'</div>'+'</a>');      
				$(".tbox").eq(i).append('<span>'+data[i].price+'</span>'); 
				$(".tbox").eq(i).append('<br>'+'<span id="tsname">'+data[i].text+'</span>');

			}

		}

	}

});
