export class SortModel {
  constructor(controller) {
    this.controller = controller;
  }

  getArrayOfObject(property, type = 'asc') {
    return this.controller.controllers.warehouse.currentSet.slice().sort((a, b) => {
      if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        if (type === 'asc') {
          return a[property] - b[property];
        }
        if (type === 'desc') {
          return b[property] - a[property];
        }
      }

      if (typeof a[property] === 'string' || typeof b[property] === 'string') {
        if (type === 'asc') {
          return a[property].localeCompare(b[property]);
        }
        if (type === 'desc') {
          return b[property].localeCompare(a[property]);
        }
      }
    });
  }
}
