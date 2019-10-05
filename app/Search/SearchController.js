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

  getImageURLObject() {
    let data = {};
    this.mediator.action('getCurrentSet').forEach((item) => data[item.name] = item.url);
    return data;
  }

  getCurrentSet() {
    return this.mediator.action('getCurrentSet');
  }

  updateProductsList(arrayOfObject) {
    this.mediator.action('updateProductsList', arrayOfObject);
  }

}
