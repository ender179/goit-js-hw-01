class Storage {
  #items; // приватна властивість

  constructor(items) {
    this.#items = items;
  }

  // Метод для отримання поточних товарів
  getItems() {
    return this.#items;
  }

  // Метод для додавання нового товару
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Метод для видалення товару
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Код для перевірки
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
