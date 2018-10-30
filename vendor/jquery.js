$(function() {
	//Xử lý scroll menu đổi thành màu đen
	$(window).scroll(function() {
  	if ($("body, html").scrollTop() > 50) {
    $('.navbar').addClass('blackbackground');
  	} else {
    $('.navbar').removeClass('blackbackground');
  		}
	});
});
