function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Обчислюємо загальну суму замовлення
  const totalPrice = quantity * pricePerDroid;
  
  // Перевіряємо, чи достатньо кредитів у клієнта для оплати замовлення
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

// Перевірка роботи функції
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
