const categoryItems = document.querySelectorAll('.js-item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
  const categoryTitle = categoryItem.firstElementChild;
  const categoryList = categoryItem.lastElementChild;
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryList.children.length}`);
});
