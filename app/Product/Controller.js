import { ProductModel } from './Model.js';
import { ProductView } from './View.js';

export class ProductController {
  constructor(router) {
    this.router = router;
    this.model = new ProductModel(this);
    this.view = new ProductView(this);
    this.view.render(this.router.warehouse.goods);
  }

  updateRender(arrayOfObject) {
    this.view.render(arrayOfObject);
  }

}
