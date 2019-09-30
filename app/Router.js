import {Warehouse} from '../app/Warehouse.js';
import {ProductController} from '../app/Product/Controller.js';
import {SearchController} from '../app/Search/Controller.js';

export class Router {
  constructor() {
    this.warehouse = new Warehouse();
    this.product = new ProductController(this);
    this.search = new SearchController(this);
  }
}

export const router = new Router();
