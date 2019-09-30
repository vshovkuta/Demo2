export class SearchView {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
    this.search.addEventListener('keyup', () => this.viewFound());
  }

  viewFound() {
    if (this.search.value !== '') {
      this.controller.router.product.updateRender(this.controller.getFindedObject(this.search.value.toLowerCase()));
    }
  }

}
