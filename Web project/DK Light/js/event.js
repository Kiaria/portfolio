$.ajax({

	url: "./json/event.json",

	dataType: "json",

	success : function(data){

		if(data.length>0){


			for(var j in data){
				var name = data[j].name;		
				var text = data[j].text;
				var url = data[j].url;


				$(".eventbox").eq(j).append( '<a href="#">'+"<img src='img/"+data[j].url+"'/>"+'</a>'); 
				$(".eventbox").eq(j).append('<a href="#">'+'<span>'+data[j].name+'</span>'+'</a>');      
				$(".eventbox").eq(j).append('<a href="#">'+'<div class="ediv">'+data[j].text+'</div>'+'</a>');

			}

		}

	}

});
