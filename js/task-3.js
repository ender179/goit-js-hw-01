function getElementWidth(content, padding, border) {
  // Витягуємо числові значення з параметрів
  const contentWidth = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);
  
  // Розраховуємо загальну ширину
  const totalWidth = contentWidth + 2 * paddingValue + 2 * borderValue;
  
  return totalWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
