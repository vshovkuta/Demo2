import { CategoryModel } from './categoryModel.js';
import { CategoryView } from './categoryView.js';

export class CategoryController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new CategoryModel(this);
    this.view = new CategoryView(this);

    this.renderCategory();
  }

  renderCategory() {
    this.view.render(this.model.getUniqueCategories());
  }

  getGoods() {
    return this.mediator.action('getGoods');
  }
  
  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }

  setCurrentSet(arrayOfObject) {
    return this.mediator.action('getCurrentSet', arrayOfObject);
  }

  updateProductsList(category) {
    this.mediator.action('updateProductsList', this.model.getArrayOfProductsByCategory(category));
  }

}
