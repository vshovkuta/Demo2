export class SortModel {
  constructor(controller) {
    this.controller = controller;
  }

  getArrayOfObject(property, sortType = 'asc') {
    return this.controller.getCurrentSet().slice().sort((a, b) => {
      if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        if (sortType === 'asc') {
          return a[property] - b[property];
        }
        if (sortType === 'desc') {
          return b[property] - a[property];
        }
      }

      if (typeof a[property] === 'string' || typeof b[property] === 'string') {
        if (sortType === 'asc') {
          return a[property].localeCompare(b[property]);
        }
        if (sortType === 'desc') {
          return b[property].localeCompare(a[property]);
        }
      }
    });
  }
}
