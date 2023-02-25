const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const li = [];

for (const ingredient of ingredients) {
	const item = document.createElement('li');
	item.className = 'item';
	item.textContent = ingredient;
	li.push(item);
}

list.append(...li);