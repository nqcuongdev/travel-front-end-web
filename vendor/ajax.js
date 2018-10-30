$(function(){
	
	$("div").slice(0, 3).show();
	
	$("#loadmore").on('click', function(event) {
		event.preventDefault();
		$("div:hidden").slice(0, 3).slideDown();
		if($("div:hidden").length==0){
			$("#load").fadeOut('slow');
		}
	});
});