function filterArray(numbers, value) {
const filteredNumbers = [];  // Створюємо порожній масив
      
for (let i = 0; i < numbers.length; i++) {  // Ітеруємо кожен елемент масиву numbers
if (numbers[i] > value) {  // Перевіряємо, чи елемент більший за value
filteredNumbers.push(numbers[i]);  // Додаємо підходящий елемент до нового масиву
}
}
      
return filteredNumbers;  // Повертаємо новий масив
}
  
// Перевірка функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]