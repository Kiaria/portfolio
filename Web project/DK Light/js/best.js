$.ajax({

	url: "./json/best.json",

	dataType: "json",

	success : function(data){

		if(data.length>0){


			for(var j in data){
				var name = data[j].name;		
				var text = data[j].text;
				var url = data[j].url;


				$(".btbox").eq(j).append( '<a href="#">'+"<img src='img/"+data[j].url+"'/>"+'</a>'); 
				$(".btbox").eq(j).append('<a href="#">'+'<div class="bname">'+data[j].name+'</div>'+'</a>');      
				$(".btbox").eq(j).append('<span>'+data[j].price+'</span>'); 
				$(".btbox").eq(j).append('<br>'+'<span class="bspan">'+data[j].text+'</span>');

			}

		}

	}

});
