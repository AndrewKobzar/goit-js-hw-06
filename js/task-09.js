function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color')
const colors = document.querySelector('.color')
const body = document.querySelector('body')


button.addEventListener('click', x => {
  const color = getRandomHexColor();
  body.style.background = color;
  colors.textContent = color
})

