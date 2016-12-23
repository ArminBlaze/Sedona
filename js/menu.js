var mainNav = document.querySelector('.mainNav');
var mainNav__toggle = document.querySelector('.mainNav__toggle');

mainNav.classList.remove('mainNav_nojs');

mainNav__toggle.addEventListener('click', function () {
	if (mainNav.classList.contains('mainNav_closed')) {
		mainNav.classList.remove('mainNav_closed');
		mainNav.classList.add('mainNav_opened');
	}
	else {
		mainNav.classList.remove('mainNav_opened');
		mainNav.classList.add('mainNav_closed');
	}

});