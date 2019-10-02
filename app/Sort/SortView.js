export class SortView {
  constructor(controller) {
    this.controller = controller;
    this.sortByPriceButton = document.getElementById('sort-by-price');
    this.sortByQuantityButton = document.getElementById('sort-by-quantity');
    this.sortByNameButton = document.getElementById('sort-by-name');
    this.sortResetButton = document.getElementById('sort-reset');

    // this.sortByPriceButton.addEventListener('click', () => {
    //   this.render('price', this.sortByPriceButton.dataset.type);
    //   this.toggleDataType(this.sortByPriceButton);
    // });

    this.sortByPriceButton.addEventListener('click', () => {
      this.universalSort(this.sortByPriceButton, 'price');
    });

    this.sortByQuantityButton.addEventListener('click', () => {
      this.universalSort(this.sortByQuantityButton, 'quantity');
    });

    this.sortByNameButton.addEventListener('click', () => {
      this.universalSort(this.sortByNameButton, 'name');
    });

    this.sortResetButton.addEventListener('click', () => {
      this.controller.controllers.product.updateRender();
    });

  }

  universalSort(element, property) {
    this.render(property, element.dataset.type);
    this.toggleDataType(element);
  }


  toggleDataType(element) {
    if (element.dataset.type === 'asc') {
      element.dataset.type = 'desc';
      element.getElementsByTagName('i')[0].innerText = 'arrow_downward';
    } else {
      element.dataset.type = 'asc';
      element.getElementsByTagName('i')[0].innerText = 'arrow_upward';
    }
  }

  render(proberty, type) {
    this.controller.controllers.product.updateRender(this.controller.getFoundObject(proberty, type));
  }

}
