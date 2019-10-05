import { SearchModel } from './SearchModel.js';
import { SearchView } from './SearchView.js';

export class SearchController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new SearchModel(this);
    this.view = new SearchView(this);
  }

  getFoundObject(string) {
    return this.model.getArrayOfObject(string);
  }

  updateProducts() {
    this.view.render();
  }

}
