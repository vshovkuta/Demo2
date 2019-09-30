import { Warehouse } from '../app/Warehouse.js';
import { ProductController } from './Product/ProductController.js';
import { SearchController} from './Search/SearchController.js';
import { CategoryController } from './Category/CategoryController.js';

export class Controllers {
  constructor() {
    this.warehouse = new Warehouse();
    this.product = new ProductController(this);
    this.search = new SearchController(this);
    this.category = new CategoryController(this);
  }
}
