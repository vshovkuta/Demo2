export class SortView {
  constructor() {
    this.root = document.getElementById('sort-root');
    this.sortByPriceButton = document.getElementById('sort-by-price');
    this.sortByQuantityButton = document.getElementById('sort-by-quantity');
    this.sortByNameButton = document.getElementById('sort-by-name');
    this.sortResetButton = document.getElementById('sort-reset');
  }

  addSortEvents(universalSort, updateProductsList) {
    this.sortByPriceButton.addEventListener('click',() => {
      universalSort(this.sortByPriceButton, 'price');
    });

    this.sortByQuantityButton.addEventListener('click', () => {
      universalSort(this.sortByQuantityButton, 'quantity');
    });

    this.sortByNameButton.addEventListener('click', () => {
      universalSort(this.sortByNameButton, 'name');
    });

    this.sortResetButton.addEventListener('click', () => {
      updateProductsList();
    });
  }

}
