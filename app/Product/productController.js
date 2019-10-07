import { ProductModel } from './productModel.js';
import { ProductView } from './productView.js';

export class ProductController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new ProductModel(this);
    this.view = new ProductView(this);

    this.updateRender(this.getCurrentSet());
  }

  updateRender(arrayOfObject = this.getCurrentSet()) {
    this.view.render(arrayOfObject);
  }

  PropertyNames(name) {
    return this.mediator.action('PropertyNames', name);
  }

  getCommonProperties() {
    return this.mediator.action('getCommonProperties');
  }

  getUniqueProperties() {
    return this.mediator.action('getUniqueProperties');
  }

  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }

  getCurrentOrder() {
    return this.model.getCurrentOrder();
  }

  restoreLastOrder() {
    this.view.restoreLastOrder();
  }

  updateCartNumber(string) {
    this.mediator.action('updateCartNumber', string);
  }


}


