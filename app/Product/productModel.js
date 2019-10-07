export class ProductModel {
  constructor(controller) {
   this.controller = controller;
  }

  getCurrentOrder() {
    return JSON.parse(localStorage.getItem('currentOrder')) || [];
  }
}
