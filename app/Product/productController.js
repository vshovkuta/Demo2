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

  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }
}
