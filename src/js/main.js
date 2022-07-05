const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const pesel = document.querySelector('#pesel');
const street = document.querySelector('#street');
const flatNumber = document.querySelector('#flat-number');
const city = document.querySelector('#city');
const zipCode = document.querySelector('#zip');
const phoneNumber = document.querySelector('#phone-number');
const mail = document.querySelector('#mail');
const profilPhoto = document.querySelector('#profil-photo');
const voivodeship = document.querySelector('#voivodeship');
const regulations = document.querySelector('#regulations');

const allInputs = [
	firstName,
	lastName,
	pesel,
	street,
	flatNumber,
	city,
	zipCode,
	phoneNumber,
	mail,
];

const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeModalBtn = document.querySelector('.close');

function clearAllInputs(e) {
	e.preventDefault();
	profilPhoto.value = '';

	allInputs.forEach((input) => {
		input.value = '';
	});

	if (voivodeship !== 0) {
		voivodeship.value = 0;
	}

}

function checkInputsValue(input) {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
}

function showError(input, msg) {
	const formBox = input.parentElement;
	const errorText = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorText.textContent = msg;
}

function clearError(input) {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
}

function checkPhotoInput(input) {
	const formBox = input.parentElement;
	const errorText = formBox.querySelector('.error-text');

	if (input.value === '') {
		formBox.classList.add('error');
		errorText.textContent = `Wybierz zdjęcie`;
	} else {
		formBox.classList.remove('error');
	}
}

function checkVoivodeshipInput(input) {
	const formBox = input.parentElement;
	const errorText = formBox.querySelector('.error-text');

	if (input.value === '0') {
		formBox.classList.add('error');
		errorText.textContent = `Wybierz województwo`;
	} else {
		formBox.classList.remove('error');
	}
}

function checkLength(input, minLength) {
	if (input.value.length < minLength) {
		showError(
			input,
			`${input.previousElementSibling.textContent} musi składać się z ${minLength} cyfr`
		);
	} else if (input.value.length > minLength) {
		showError(
			input,
			`${input.previousElementSibling.textContent} jest za długi`
		);
	}
}

function validZipCode(input) {
	if (!input.value.match(/^\d\d-\d\d\d$/)) {
		showError(
			input,
			`${input.previousElementSibling.textContent} powinieć wyglądać tak: NN-NNN`
		);
	} else {
		clearError(input);
	}
}

function validMail(mail) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (re.test(mail.value)) {
		clearError(mail);
	} else {
		showError(mail, 'E-mail jest niepoprawny');
	}
}

function checkRegulations(input) {
	const formBox = input.parentElement;
	console.log(formBox);
	const errorText = formBox.querySelector('.error-text');
	console.log(errorText);

	if (input.checked) {
		errorText.style.visibility = 'hidden';
	} else {
		errorText.style.visibility = 'visible';
		errorText.textContent = `Musisz zaakceptować regulamin`;
	}
}

function validLetters(inputs) {
	const letters = /^[A-Za-z]+$/;
	inputs.forEach((input) => {
		if (input.value.match(letters)) {
			clearError(input);
		} else if (input.value === '') {
			showError(input, input.placeholder);
		} else {
			showError(
				input,
				`${input.previousElementSibling.textContent} nie może zawierać cyfr`
			);
		}
	});
}

function validNumbers(input) {
	const numbers = /^\d+$/;

	if (input.value.match(numbers)) {
		clearError(input);
	} else if (input.value === '') {
		showError(input, input.placeholder);
	} else {
		showError(
			input,
			`${input.previousElementSibling.textContent} nie może zawierać liter`
		);
	}
}

clearBtn.addEventListener('click', clearAllInputs);

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkInputsValue(allInputs);
	checkPhotoInput(profilPhoto);
	checkVoivodeshipInput(voivodeship);
	checkRegulations(regulations);
	checkLength(pesel, 11);
	checkLength(phoneNumber, 9);
	validZipCode(zipCode);
	validMail(mail);
	validLetters([firstName, lastName, city]);
	validNumbers(flatNumber);
});
