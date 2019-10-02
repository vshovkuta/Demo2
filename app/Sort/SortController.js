import { SortModel } from './SortModel.js';
import { SortView } from './SortView.js';

export class SortController {
  constructor(controllers) {
    this.controllers = controllers;
    this.model = new SortModel(this);
    this.view = new SortView(this);
  }

  getFoundObject(property, type) {
    return this.model.getArrayOfObject(property, type);
  }
}
