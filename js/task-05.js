function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonElement = document.querySelector('.js-change-color');
const color = document.querySelector('.color');

buttonElement.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = document.body.style.backgroundColor;
});
