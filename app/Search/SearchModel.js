export class SearchModel {
  constructor(controller) {
   this.controller = controller;
  }

  getArrayOfObject(string) {
    return this.controller.controllers.warehouse.currentSet.filter((item) => {
      return item.name.toLowerCase().includes(string)
    })
  }
}
