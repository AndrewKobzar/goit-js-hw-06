
const input = document.querySelector('#validation-input')
input.addEventListener('blur', event => {
	if (event.target.value.length == input.dataset.length) {
		input.classList.add('valid')
		input.classList.remove('invalid')
		
	} else {
		input.classList.remove('valid')
		input.classList.add('invalid')
	}
})


