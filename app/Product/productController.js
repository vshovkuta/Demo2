import { ProductModel } from './productModel.js';
import { ProductView } from './productView.js';

export class ProductController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new ProductModel();
    this.view = new ProductView(this);

    this.updateRender(this.getCurrentSet());
  }

  updateRender(arrayOfObject = this.getCurrentSet()) {
    this.view.render(arrayOfObject, this.getCommonProperties.bind(this), this.getUniqueProperties.bind(this), this.getPropertyNames.bind(this));
    this.restoreLastOrder();
  }

  getPropertyNames(name) {
    return this.mediator.action('propertyNames', name);
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


