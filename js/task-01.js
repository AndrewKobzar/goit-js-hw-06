const totalCategories = document.querySelector('#categories');
console.log('Number of categories:', totalCategories.children.length)



const categoriesArray = [...totalCategories.children]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);
