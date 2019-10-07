import { CartModel } from './cartModel.js';
import { CartView } from './cartView.js';

export class CartController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new CartModel();
    this.view = new CartView();

  }

  updateCartNumber(string) {
    this.view.updateCartNumber(string);
  }
}
