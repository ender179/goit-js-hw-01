// Вибираємо список категорій  
const categories = document.querySelector('#categories');  

// Порахуємо кількість категорій  
const categoryItems = categories.querySelectorAll('.item');  
console.log(`Кількість категорій: ${categoryItems.length}`);  

// Для кожної категорії виводимо назву та кількість елементів  
categoryItems.forEach(item => {  
const title = item.querySelector('h2').textContent; // Отримуємо текст заголовка  
const elementsCount = item.querySelectorAll('ul > li').length; // Обчислюємо кількість елементів  

console.log(`Категорія: ${title}, Кількість елементів: ${elementsCount}`);  
});