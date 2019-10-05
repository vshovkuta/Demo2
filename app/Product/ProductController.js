import { ProductModel } from './ProductModel.js';
import { ProductView } from './ProductView.js';

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
