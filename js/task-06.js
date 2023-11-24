const inputElement = document.querySelector('input');
const createBoxesBtn = document.querySelector('button[data-create]');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBoxesBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  const amount = inputElement.value;
  if (amount <= 100) {
    createBoxes(amount);
  }
  inputElement.value = '';
});

destroyBoxesBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const array = Array.from({ length: amount });
  let value = 30;
  array.map(element => {
    boxes.innerHTML += `
      <div class="box" style="width: ${value}px; height: ${value}px; background-color: ${getRandomHexColor()}"></div>
    `;
    value += 10;
  });
}
