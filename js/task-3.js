// Отримуємо елементи з DOM  
const input = document.getElementById('name-input');  
const output = document.getElementById('name-output');  

// Додаємо обробник події на інпут  
input.addEventListener('input', () => {  
// Очищаємо значення від пробілів з обох сторін  
const name = input.value.trim();  
    
// Перевіряємо, чи ім'я не порожнє і оновлюємо span  
output.textContent = name !== '' ? name : 'Anonymous';  
});