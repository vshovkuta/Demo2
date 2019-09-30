import { SearchModel } from './SearchModel.js';
import { SearchView } from './SearchView.js';

export class SearchController {
  constructor(controllers) {
    this.controllers = controllers;
    this.model = new SearchModel(this);
    this.view = new SearchView(this);
  }

  getFindedObject(string) {
    return this.model.getArrayOfObject(string);
  }

}
