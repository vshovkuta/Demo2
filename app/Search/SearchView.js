export class SearchView {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
    this.search.addEventListener('keyup', () => this.render());
  }

  render() {
    this.controller.controllers.product.updateRender(this.controller.getFindedObject(this.search.value.toLowerCase()));
  }

}
