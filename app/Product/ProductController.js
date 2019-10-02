import { ProductModel } from './ProductModel.js';
import { ProductView } from './ProductView.js';

export class ProductController {
  constructor(controllers) {
    this.controllers = controllers;
    this.model = new ProductModel(this);
    this.view = new ProductView(this);
    this.updateRender(this.controllers.warehouse.currentSet);
  }

  updateRender(arrayOfObject = this.controllers.warehouse.currentSet) {
    this.view.render(arrayOfObject);
  }

}
