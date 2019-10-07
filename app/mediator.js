import { Warehouse } from './warehouse.js';
import { ProductController } from './Product/productController.js';
import { SearchController} from './Search/searchController.js';
import { CategoryController } from './Category/categoryController.js';
import { SortController } from './Sort/sortController.js';
import { CartController } from './Cart/cartController.js';

export class Mediator {
  constructor() {
    this.warehouse = new Warehouse(this);
    this.cart = new CartController(this);
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

      case 'getCommonProperties': {
        return this.warehouse.commonProperties;
      }

      case 'PropertyNames': {
        return this.warehouse.PropertyNames.get(data);
      }

      case 'getUniqueProperties': {
        return this.warehouse.uniqueProperties;
      }

      case 'updateProductsList': {
        this.product.updateRender(data);
        break;
      }

      case 'updateCategoryList': {
        this.category.renderCategory();
        break;
      }

      case 'updateCartNumber': {
        this.cart.updateCartNumber(data);
      }
      //
      // case 'addToCurrentOrder': {
      //   this.warehouse.currentOrder[data[0]] = data[1];
      // }

    }
  }
}
