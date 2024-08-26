/*DESAFIO DÍA 5-LISTA DE COMPRAS*/

let shoppingList = [];

console.log("¡Bienvenido a tu lista de compras!");

while (true) {
  let addItem = prompt("¿Deseas agregar un alimento a la lista? (sí/no)");

  if (addItem.toLowerCase() === "no") {
    break;
  } else if (addItem.toLowerCase() === "sí") {
    let item = prompt("¿Qué alimento deseas agregar?");
    let category = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces)");

    shoppingList.push({ item: item, category: category });
  } else {
    console.log("Por favor, responde 'sí' o 'no'.");
  }
}

console.log("\nLista de compras:");

let categories = {
  frutas: [],
  lácteos: [],
  congelados: [],
  dulces: []
};

for (let i = 0; i < shoppingList.length; i++) {
  let item = shoppingList[i];
  categories[item.category.toLowerCase()].push(item.item);
}

for (let category in categories) {
  if (categories[category].length > 0) {
    console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}: ${categories[category].join(", ")}`);
  }
}