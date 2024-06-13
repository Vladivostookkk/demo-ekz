const loginButton = document.querySelector('#login-button');

const ADMIN = {
	email: 'sklad',
	pass: '123qwe',
	first_name: 'Ольга',
	last_name: 'Суродеева',
	third_name: 'Николаевна',
	phone: '89999999999',
	is_admin: true,
};

loginButton.addEventListener('click', () => {
	const email = document.querySelector('#login-email').value;
	const pass = document.querySelector('#login-pass').value;

	const newUser = {
		email,
		pass,
	};

	// Валидация
	// Если меньше 4х символов
	if (pass.length < 4) {
		setError('#login-pass');
		return;
	}

	// Получение пользователя
	const localUser = localStorage.getItem('user');

	if (!localUser) {
		setError(['#login-email', '#login-pass']);
		return;
	}

	const jsonLocalUser = JSON.parse(localUser);

	// Проверка на админа
	if (email === ADMIN.email && pass === ADMIN.pass) {
		localStorage.setItem('user', JSON.stringify(ADMIN));
		// Переход на след страницу
		location.href = './home.html';
		return;
	}

	if (jsonLocalUser.pass !== pass) {
		setError('#login-pass');
		return;
	}
	if (jsonLocalUser.email !== email) {
		setError('#login-email');
		return;
	}

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
