export class CategoryModel {
  constructor() {
  }

  getUniqueCategories(getGoods) {
    let uniqueCategory = new Set();
    getGoods().forEach((item) => {
      uniqueCategory.add(item.type);
    });

    return Array.from(uniqueCategory);
  }


  getArrayOfProductsByCategory(category, setCurrentSet, getGoods) {
    if(category === 'all') {
      return setCurrentSet(getGoods());
    }

    return setCurrentSet(getGoods()).filter((item) => {
      return item.type.toLowerCase() === category.toLowerCase();
    })
  }

}
