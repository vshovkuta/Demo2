import { CategoryModel } from './CategoryModel.js';
import { CategoryView } from './CategoryView.js';
import { mediator } from '../main.js';

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
    return mediator.action('getGoods');
  }
  
  getCurrentSet() {
    return mediator.action('getCurrentSet');
  }

  setCurrentSet(arrayOfObject) {
    return mediator.action('getCurrentSet', arrayOfObject);
  }

  updateProductsList(category) {
    mediator.action('updateProductsList', this.model.getArrayOfProductsByCategory(category));
  }

}
