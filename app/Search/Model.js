export class SearchModel {
  constructor(controller) {
   this.controller = controller;
  }

  getArrayOfObject(string) {
    return this.controller.router.warehouse.goods.filter((item) => {
      return item.name.toLowerCase().includes(string)
    })
  }
}
