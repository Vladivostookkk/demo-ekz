const signupButton = document.querySelector('#signup-button');

signupButton.addEventListener('click', () => {
	const first_name = document.querySelector('#register-firstname').value;
	const last_name = document.querySelector('#register-lastname').value;
	const third_name = document.querySelector('#register-thirdname').value;
	const email = document.querySelector('#register-email').value;
	const phone = document.querySelector('#register-phone').value;
	const pass = document.querySelector('#register-pass').value;
	const repeat_pass = document.querySelector('#register-repeat-pass').value;

	const newUser = {
		first_name,
		last_name,
		third_name,
		phone,
		email,
		pass,
		is_admin: false,
	};

	// Валидация
	// Если меньше 4х символов
	if (pass.length < 4 || repeat_pass.length < 4) {
		setError('#register-pass');
		return;
	}

	// Если пароли не одинаковые
	if (pass !== repeat_pass) {
		setError(['#register-pass', '#register-repeat-pass']);
		return;
	}

	// Сохранение пользователя
	localStorage.setItem('user', JSON.stringify(newUser));

	// Переход на след страницу
	location.href = './home.html';
})


function setError(id) {

	if (Array.isArray(id)) {
		id.forEach((item) => {
			setError(item);
		})
	}

	const errorObject = document.querySelector(id);

	if (!errorObject) {
		return;
	}

	// Добавляется анимация ошибки
	errorObject.classList.add('error');
	errorObject.classList.add('error-animation');

	// Анимация удаляется через 300мс
	setTimeout(() => {
		errorObject.classList.remove('error-animation');
	}, 300);
	setTimeout(() => {
		errorObject.classList.remove('error');
	}, 1500);
}
