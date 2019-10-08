import { CategoryModel } from './categoryModel.js';
import { CategoryView } from './categoryView.js';

export class CategoryController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new CategoryModel();
    this.view = new CategoryView();

    this.renderCategory();
  }

  renderCategory() {
    this.view.render(this.model.getUniqueCategories(this.getGoods.bind(this)), this.updateProductsList.bind(this));
  }

  getGoods() {
    return this.mediator.action('getGoods');
  }
  
  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }

  setCurrentSet(arrayOfObject) {
    return this.mediator.action('setCurrentSet', arrayOfObject);
  }

  getArrayOfProductsByCategory(category) {
    return this.model.getArrayOfProductsByCategory(category, this.setCurrentSet.bind(this), this.getGoods.bind(this));
  }

  updateProductsList(category) {
    this.mediator.action('updateProductsList', this.getArrayOfProductsByCategory(category));
  }

}
