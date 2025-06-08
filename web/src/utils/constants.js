export const UPGRADES = [
  // Существующие
  { id: 1, name: "Улучшенный клик", cost: 10, value: 1, type: "click" },
  { id: 2, name: "Автокликер", cost: 50, value: 1, type: "auto" },
  { id: 3, name: "Мега клик", cost: 200, value: 5, type: "click" },
  // Новые
  { 
    id: 4, 
    name: "Комбо-удар", 
    cost: 500, 
    value: 10, 
    type: "combo",
    description: "Шанс 15% на 3x урон" 
  },
  { 
    id: 5, 
    name: "Критический удар", 
    cost: 1000, 
    value: 100, 
    type: "multiplier",
    description: "Умножает весь ваш доход" 
  }
];