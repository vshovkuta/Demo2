import { Warehouse } from '../app/Warehouse.js';
import { ProductController } from './Product/ProductController.js';
import { SearchController} from './Search/SearchController.js';
import { CategoryController } from './Category/CategoryController.js';
import { SortController } from './Sort/SortController.js';

export class Mediator {
  constructor() {
    this.warehouse = new Warehouse();
    this.product = new ProductController(this);
    this.search = new SearchController(this);
    this.category = new CategoryController(this);
    this.sort = new SortController(this);
  }

  action(type, data) {
    switch (type) {

      case 'getGoods': {
        return this.warehouse.goods;
      }

      case 'getCurrentSet': {
        return this.warehouse.currentSet;
      }

      case 'setCurrentSet': {
        return this.warehouse.currentSet = data;
      }

      case 'updateProductsList': {
        this.product.updateRender(data);
        break;
      }

    }
  }
}
