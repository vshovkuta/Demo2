import { ProductModel } from './ProductModel.js';
import { ProductView } from './ProductView.js';

export class ProductController {
  constructor(controllers) {
    this.controllers = controllers;
    this.model = new ProductModel(this);
    this.view = new ProductView(this);
    this.view.render(this.controllers.warehouse.goods);
  }

  updateRender(arrayOfObject) {
    this.view.render(arrayOfObject);
  }

}
