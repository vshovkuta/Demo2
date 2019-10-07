import { SortModel } from './sortModel.js';
import { SortView } from './sortView.js';

export class SortController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new SortModel(this);
    this.view = new SortView(this);

    this.addListenerToView();
  }

  universalSort(element, property) {
    this.renderSorted(this.model.getArrayOfObject(property, element.dataset.type, this.getCurrentSet.bind(this)));
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

  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }

  updateProductsList(arrayOfObject) {
    this.mediator.action('updateProductsList', arrayOfObject);
  }

  addListenerToView() {
    this.view.addSortEvents(this.universalSort.bind(this), this.updateProductsList.bind(this));
  }

  renderSorted(arrayOfObject) {
    this.updateProductsList(arrayOfObject);
  }

}
