export class SortView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('sort-root');
    this.sortByPriceButton = document.getElementById('sort-by-price');
    this.sortByQuantityButton = document.getElementById('sort-by-quantity');
    this.sortByNameButton = document.getElementById('sort-by-name');
    this.sortResetButton = document.getElementById('sort-reset');

    this.sortByPriceButton.addEventListener('click', () => {
      this.controller.universalSort(this.sortByPriceButton, 'price');
    });

    this.sortByQuantityButton.addEventListener('click', () => {
      this.controller.universalSort(this.sortByQuantityButton, 'quantity');
    });

    this.sortByNameButton.addEventListener('click', () => {
      this.controller.universalSort(this.sortByNameButton, 'name');
    });

    this.sortResetButton.addEventListener('click', () => {
      this.controller.updateProductsList();
    });

  }

  // render() {
  //   let new
  // }

  renderSorted(arrayOfObject) {
    this.controller.updateProductsList(arrayOfObject);
  }

}
