
let counterValue = 0

const Counter = document.querySelector('#value')
const buttonMin = document.querySelector('button[data-action="decrement"]')
const buttonPl = document.querySelector('button[data-action="increment"]')


buttonMin.addEventListener('click', () => {
	counterValue-=1
	Counter.textContent = counterValue
})

buttonPl.addEventListener('click', () => {
	counterValue+=1
	Counter.textContent = counterValue
})

