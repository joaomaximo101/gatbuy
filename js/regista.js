$(".toggle").on("click", function() {
	$(".toggle").parent().toggleClass('active');
});

$('.link').on("click", function() {
	if($('nav').hasClass('active')) {
		$('nav').removeClass('active');
	}
});

var form = document.querySelector('form');
// Evento para que o submit não submeta qualquer dados
form.addEventListener('submit', function (event) {
	event.preventDefault();
});


$('#submit2').on('click', function() {
	var pass = $('#mem-password').val();
	var pass2 = $('#mem-password2').val();
	if (pass.length > 0 && pass2.length > 0 && pass == pass2) {
		$('.info').text('Registo com sucesso !');
		$('.info').css('color', 'green');
		window.location.href = 'login.html';
	} else {
		$('.info').text('Registo falhou!');
		$('.info').css('color', 'red');
		$('#mem-firstname').val('');
		$('#mem-lastname').val('');
		$('#mem-genre').val('');
		$('#mem-age').val('');
		$('#mem-email').val('');
		$('#mem-password').val('');
		$('#mem-password2').val('');
	}
});
