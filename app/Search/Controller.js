import { SearchModel } from './Model.js';
import { SearchView } from './View.js';

export class SearchController {
  constructor(router) {
    this.router = router;
    this.model = new SearchModel(this);
    this.view = new SearchView(this);
  }

  getFindedObject(string) {
    return this.model.getArrayOfObject(string);
  }

}
