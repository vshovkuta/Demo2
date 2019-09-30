export class Warehouse {
  constructor() {
    this.goods;
    async () => await this.getLocaleStorage();

  }

  setLocaleStorage(arrayOfObject) {
    localStorage.setItem('goods', JSON.stringify(arrayOfObject));
  }

  async getLocaleStorage() {
    if (localStorage.getItem('goods')) {
      this.goods = JSON.parse(localStorage.getItem('goods'));
    } else {
      await fetch('./goods.json').then((result) => result.json())
                                 .then((result) => this.goods = result)
                                 .then((result) => this.setLocaleStorage(result));
    }
  }

}
