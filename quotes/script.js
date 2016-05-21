$(document).ready(function(){
	var twe="Click on the Generate button to get a Quote!";
	$("#quotes").html(twe);
	$("#button").on("click", function(){
		$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
    		twe="<cite>"+json.quoteText+"</cite><br/>"+json.quoteAuthor;
			$("#quotes").html(twe);
		});
	});

	$("#tweet").on("click",function(){
		if(twe!="Click on the Generate button to get a Quote!"){
			var link = "https://twitter.com/intent/tweet?text=" + twe;
			$("#tweet").attr("href",link);
		}
	});
});