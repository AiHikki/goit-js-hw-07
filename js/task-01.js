const categoryItems = document.querySelectorAll('.js-item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.querySelector('h2');
  const categoryList = categoryItem.querySelector('ul');
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryList.children.length}`);
});
