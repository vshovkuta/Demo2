export class SearchView {
  constructor(controller) {
    this.controller = controller;
    this.search = document.getElementById('search');
    this.search.addEventListener('keyup', () => this.render());
  }

  render() {
    this.controller.mediator.product.updateRender(this.controller.getFoundObject(this.search.value.toLowerCase()));
  }

}
