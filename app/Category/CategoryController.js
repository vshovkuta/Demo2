import { CategoryModel } from './CategoryModel.js';
import { CategoryView } from './CategoryView.js';

export class CategoryController {
  constructor(controllers) {
    this.controllers = controllers;
    this.model = new CategoryModel(this);
    this.view = new CategoryView(this);

    this.renderCategory();
  }

  // getCategories() {
  //   return this.model.getUniqueCategories();
  // }

  renderCategory() {
    this.view.render(this.model.getUniqueCategories());
  }


  updateProducts(category) {
    this.controllers.product.updateRender(this.model.getArrayOfProductsByCategory(category));
  }

  setCallToCategory
}
