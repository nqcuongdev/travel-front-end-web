//sự kiện cho signup
$(document).ready(function() {
	var formSignup = document.getElementById('form-signup');
	if(formSignup.attachEvent){
		formSignup.attachEvent('submit',valueform);
	}else{
		formSignup.addEventListener('submit',valueform);
	}

	function valueform(e){
		var pass = document.getElementById('pass').value;
		var repass = document.getElementById('repass').value;

		console.log(pass);
		console.log(repass);

		if(pass != repass){
			alert('Bạn phải nhập 2 mật khẩu trùng nhau !');
		}else{
			alert('Đăng ký thành công');
		}
	}
});
//sự kiện cho login
$(document).ready(function() {
	var USER_ADMIN = 'admin';
	var PASS_ADMIN = 'admin';

	var inputUsername = document.getElementById('email');
	var inputPassword = document.getElementById('password');

	var formLogin = document.getElementById('form-login');

	if(formLogin.attachEvent){
	    formLogin.attachEvent('submit',submitForm);
	}else{
	    formLogin.addEventListener('submit',submitForm);
	}


	function submitForm(e){
	    var username = inputUsername.value;
	    var password = inputPassword.value;

	    if(USER_ADMIN == username && PASS_ADMIN == password){
	        alert('Đăng nhập thành công !');
	    }else{
	        alert('Đăng nhập thất bại !');
	    }
	}
});
// ajax
$(document).ready(function() {
	$('#loadmore').on('submit', function(event) {
		event.preventDefault();
		$('div:hidden').slice(0, 3).slideDown();
		if($('div:hidden').length==0){
			$('#loadmore').fadeOut('slow');
		}
	});
});


