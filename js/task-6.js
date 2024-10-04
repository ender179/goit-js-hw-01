function getRandomHexColor() {  
return `#${Math.floor(Math.random() * 16777215)  
.toString(16)  
.padStart(6, 0)}`;  
}  

const controls = document.getElementById('controls');  
const input = document.getElementById('box-count');  
const boxesContainer = document.getElementById('boxes');  

controls.querySelector('[data-create]').addEventListener('click', () => {  
const amount = Number(input.value);  
  
if (amount < 1 || amount > 100) {  
return; // Якщо значення поза межами, нічого не відбувається  
}  

createBoxes(amount);  
input.value = ''; // Очищення значення в input  
});  

controls.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);  

function createBoxes(amount) {  
// Очищення старих квадратів  
destroyBoxes();  

  const boxes = [];  
  for (let i = 0; i < amount; i++) {  
const size = 30 + i * 10; // Кожен наступний квадрат більший на 10px  
const div = document.createElement('div');  
div.className = 'box'; // Додаємо клас для стилів  
div.style.width = `${size}px`;  
div.style.height = `${size}px`;  
div.style.backgroundColor = getRandomHexColor();  
boxes.push(div);  
}  

boxesContainer.append(...boxes); // Додаємо всі квадрати за одну операцію  
}  

function destroyBoxes() {  
boxesContainer.innerHTML = ''; // Очищення контейнера з квадратами  
}