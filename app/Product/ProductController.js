import { ProductModel } from './ProductModel.js';
import { ProductView } from './ProductView.js';

export class ProductController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new ProductModel(this);
    this.view = new ProductView(this);
    this.updateRender(this.mediator.warehouse.currentSet);
  }

  updateRender(arrayOfObject = this.mediator.warehouse.currentSet) {
    this.view.render(arrayOfObject);
  }

}
