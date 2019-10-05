import { SortModel } from './SortModel.js';
import { SortView } from './SortView.js';

export class SortController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new SortModel(this);
    this.view = new SortView(this);
    
  }

  universalSort(element, property) {
    this.view.render(this.model.getArrayOfObject(property, element.dataset.type));
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


}
