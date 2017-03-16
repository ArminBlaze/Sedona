var button = document.querySelector(".form__send");
var popup = document.querySelector(".modal_failure");
var close = document.querySelector(".modal__close");
var form = document.querySelector("form");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");
var storage = localStorage.getItem("tel");
var storage2 = localStorage.getItem("email");



//		button.addEventListener("click", function(event){
//			event.preventDefault();
//			
//			
//			console.log("Кнопка нажата");
//			
//			
//		})

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
//	console.log("Закрыть окно");
});



form.addEventListener("submit", function(event) {
	console.log("Если форму пытаются отправить");

//Если у формы есть ошибки (незаполненные поля)
	if(form.classList.contains("modalError_tel")) {
//		console.log("Если у формы есть эррор");
		form.classList.remove("modalError_tel");
	}
	if(form.classList.contains("modalError_email")) {
//		console.log("Если у формы есть эррор");
		form.classList.remove("modalError_email");
	}
	
//Если нет телефона
	
	if(!(tel.value)) {
		event.preventDefault();
		console.log("Нет телефона");
		form.classList.add("modalError_tel");
		
		if(storage){
			tel.value = storage;
			email.focus();
			console.log("Если есть сторейдж телефон");
//			console.log(storage);
		} else {
			tel.focus();
//			console.log("Фокус на телефон");
		}
	}
	
	//Если нет почты
	
	if(!(email.value)) {
		event.preventDefault();
		console.log("Нет почты");
		form.classList.add("modalError_email");
			
		
		if(storage2){
			email.value = storage2;
			email.focus();
			console.log("Если есть сторейдж емейл");
		} else {
			email.focus();
//			console.log("Фокус на телефон");
		}
	}
	
	//Если есть и почта и телефон

	if (tel.value && email.value) {
		localStorage.setItem("tel", tel.value);
		localStorage.setItem("email", email.value);
		form.classList.remove("modalError_tel");
		form.classList.remove("modalError_email");
	}
	
	//Попап показываем только если есть пустые поля
	
	if (!(tel.value && email.value)) {
		popup.classList.add("modal-content-show");
	}
	
	//AJAX
	
	else {
		
	

		
		console.log("Запуск Аякса")
		
	if (!("FormData" in window)) {
		return;
	}
	
		event.preventDefault();
		var data = new FormData(form);
		request(data, function(response){
			console.log(response);
		});
	
	function request(data, fn) {
		var xhr = new XMLHttpRequest();
		xhr.open("post", "/send?" + (new Date()).getTime());
		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
				fn(xhr.responseText);
			}
		});
		
		xhr.send(data);
	}
	
	
	
	
	
	
	}
});



window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
		}
	}
});
