let memberForm = document.querySelector('.member-form');

function init() {
	memberForm.style.display = 'none';
}
init();

newMember.addEventListener('click', function() {
	if (memberForm.style.display == 'none') {
		memberForm.style.display = 'block';
	} else {
		memberForm.style.display = 'none';
	}
});

let nbrImgs = 7;
function addDots() {
	for (var i = 1; i <= nbrImgs; i++) {
		$('.slide-dots').append('<span class="dot" onclick="imgSlide('+i+')"></span>');
	}
}
addDots();

var slideImg = document.getElementById('slide-img');
var dots = document.getElementsByClassName('dot');
var imgIndex = 1;
var i = 0;

function imgSlide(n) {
	imgIndex = n;
	//changeImg(imgIndex = n);
}

changeImg();
function changeImg() {
	slideImg.src = "img/image" + imgIndex + ".jpg";
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	dots[imgIndex-1].className += " active";
	
	imgIndex++;
	i++;
	if (imgIndex > nbrImgs) {
		imgIndex = 1;
		i = 0;
	}
	//setTimeout(changeImg(img), 2000);
	setTimeout(changeImg, 3000);
}

$(".toggle").on("click", function() {
	  $(".toggle").parent().toggleClass('active');
});

$('.link').on("click", function() {
	if($('nav').hasClass('active')) {
		$('nav').removeClass('active');
	}
});

// Resolve problema da navbar quando saltamos para os elementos anchors
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
