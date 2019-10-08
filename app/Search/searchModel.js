export class SearchModel {
  constructor(controller) {
   this.controller = controller;
  }

  getArrayOfObject(string, getCurrentSet) {
    return getCurrentSet().filter((item) => {
      return item.name.toLowerCase().includes(string)
    })
  }
}
