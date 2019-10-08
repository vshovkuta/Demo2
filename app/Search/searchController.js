import { SearchModel } from './searchModel.js';
import { SearchView } from './searchView.js';

export class SearchController {
  constructor(mediator) {
    this.mediator = mediator;
    this.model = new SearchModel();
    this.view = new SearchView();

    this.updateProducts();
  }

  getFoundObject(string) {
    return this.model.getArrayOfObject(string, this.getCurrentSet.bind(this));
  }

  updateProducts() {
    this.view.render(this.updateProductsList.bind(this), this.getFoundObject.bind(this), this.getImageURLObject.bind(this));
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

  addSearchEvents() {
    this.view.addSearchEvents(this.updateProductsList.bind(this), this.getFoundObject.bind(this), this.getImageURLObject.bind(this))
  }
}
