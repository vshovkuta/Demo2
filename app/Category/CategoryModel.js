export class CategoryModel {
  constructor(controller) {
    this.controller = controller;
  }

  getUniqueCategories() {
    let uniqueCategory = new Set();
    this.controller.controllers.warehouse.goods.forEach((item) => {
      uniqueCategory.add(item.type);
    });

    return Array.from(uniqueCategory);
  }


  getArrayOfProductsByCategory(category) {
    if(category === 'all') {
      return this.controller.controllers.warehouse.goods;
    }

    return this.controller.controllers.warehouse.goods.filter((item) => {
      return item.type.toLowerCase() === category.toLowerCase();
    })
  }

}
