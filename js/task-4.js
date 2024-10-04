document.addEventListener('DOMContentLoaded', () => {  
const form = document.querySelector('.login-form');  
  
form.addEventListener('submit', function(event) {  
event.preventDefault(); // Зупиняємо перезавантаження сторінки  
  
const email = form.elements.email.value.trim();  
const password = form.elements.password.value.trim();  
  
// Перевірка на заповненість полів  
if (email === '' || password === '') {  
alert('All form fields must be filled in');  
return; // Виходимо, якщо є незаповнені поля  
}  
  
// Створення об'єкта з введеними даними  
const formData = {  
email, // еквівалентно email: email  
password // еквівалентно password: password  
};  
  
// Виводимо об'єкт у консоль  
console.log(formData);  
  
// Очищаємо форму  
form.reset();  
});  
});