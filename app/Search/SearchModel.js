export class SearchModel {
  constructor(controller) {
   this.controller = controller;
  }

  getArrayOfObject(string) {
    return this.controller.getCurrentSet().filter((item) => {
      return item.name.toLowerCase().includes(string)
    })
  }
}
