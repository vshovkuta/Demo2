export class CategoryModel {
  constructor(controller) {
    this.controller = controller;
  }

  getUniqueCategories() {
    let uniqueCategory = new Set();
    this.controller.mediator.warehouse.goods.forEach((item) => {
      uniqueCategory.add(item.type);
    });

    return Array.from(uniqueCategory);
  }


  getArrayOfProductsByCategory(category) {
    if(category === 'all') {
      return this.controller.mediator.warehouse.currentSet = this.controller.mediator.warehouse.goods;
    }

    return this.controller.mediator.warehouse.currentSet = this.controller.mediator.warehouse.goods.filter((item) => {
      return item.type.toLowerCase() === category.toLowerCase();
    })
  }

}
