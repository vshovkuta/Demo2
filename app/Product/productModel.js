export class ProductModel {
  constructor() {
  }

  getCurrentOrder() {
    return JSON.parse(localStorage.getItem('currentOrder')) || [];
  }
}
