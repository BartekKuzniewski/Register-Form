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
	profilPhoto,
];

const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeModalBtn = document.querySelector('.close');

function clearAllInputs(e) {
	e.preventDefault();

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
			console.log(`błąd`);
		} else {
			console.log(`ok`);
		}
	});
}

clearBtn.addEventListener('click', clearAllInputs);
sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	checkInputsValue(allInputs);
});
