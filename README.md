class Storage {
    #items; // Приватна властивість для зберігання товарів

    constructor(initialItems) {
        this.#items = initialItems; // Ініціалізуємо приватну властивість
    }

    getItems() {
        return this.#items; // Повертаємо поточні товари
    }

    addItem(newItem) {
        this.#items.push(newItem); // Додаємо новий товар
    }

    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove); // Видаляємо товар
    }
}

// Ініціалізація екземпляра та виклики методів для перевірки
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
