import { SortModel } from './SortModel.js';
import { SortView } from './SortView.js';
import { mediator } from '../main.js';

export class SortController {
  constructor() {
    this.model = new SortModel(this);
    this.view = new SortView(this);
  }

  getFoundObject(property, type) {
    return this.model.getArrayOfObject(property, type);
  }

  universalSort(element, property) {
    this.view.render(this.getFoundObject(property, element.dataset.type));
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
    return mediator.action('getCurrentSet');
  }

  updateProductsList(arrayOfObject) {
    mediator.action('updateProductsList', arrayOfObject);
  }


}
