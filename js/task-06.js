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

// function createBoxes(amount) {
//   const array = Array.from({ length: amount });
//   let value = 30;
//   let boxesHTML = '';
//   array.map(element => {
//     boxesHTML += `
//       <div class="box" style="width: ${value}px; height: ${value}px; background-color: ${getRandomHexColor()}"></div>
//     `;
//     value += 10;
//   });
//   boxes.innerHTML = boxesHTML;
// }

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let value = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${value}px`;
    box.style.height = `${value}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    value += 10;
  }
  boxes.appendChild(fragment);
}
