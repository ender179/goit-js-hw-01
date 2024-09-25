class Customer {
#name;  // Приватні властивості
#age;
#purchases;

constructor(name, age, purchases = []) {
this.#name = name;
this.#age = age;
this.#purchases = purchases;
}

getDetails() {
return `${this.#name}, Age: ${this.#age}`;
}

addPurchase(purchase) {
this.#purchases.push(purchase);
}

removePurchase(purchase) {
this.#purchases = this.#purchases.filter(item => item !== purchase);
}

getPurchases() {
return this.#purchases;
}
}

// Створення екземпляра класу
const customer = new Customer("John Doe", 30, ["Book", "Pen", "Notebook"]);
console.log(customer.getDetails()); // John Doe, Age: 30
console.log(customer.getPurchases()); // ["Book", "Pen", "Notebook"]

// Додаємо покупку
customer.addPurchase("Laptop");
console.log(customer.getPurchases()); // ["Book", "Pen", "Notebook", "Laptop"]

// Видаляємо покупку
customer.removePurchase("Pen");
console.log(customer.getPurchases()); // ["Book", "Notebook", "Laptop"]
