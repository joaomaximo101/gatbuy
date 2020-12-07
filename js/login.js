$(".toggle").on("click", function() {
	  $(".toggle").parent().toggleClass('active');
});

$('.link').on("click", function() {
	if($('nav').hasClass('active')) {
		$('nav').removeClass('active');
	}
});

let user = "user@ocean.com";
let pass = "ocean";
$('#submit').on('click', function() {
	var inputUser = $('#username').val();
	var inputPass = $('#password').val();
	if (inputUser == user && inputPass == pass) {
		$('.info').text('Login efectuado com sucesso !');	
		$('.info').css('color', 'green');
		window.location.href = 'index.html';
	} else {
		$('.info').text('Login incorrecto !');	
		$('.info').css('color', 'red');
		$('#username').val('');
		$('#password').val('');
	}
});
