export class Warehouse {
  constructor() {
    this.goods;
    this.currentSet;
    this.ordersHistory;
    this.currentOrder;
    this.commonProperties = ['type', 'price', 'quantity', 'ageMonth', 'weightKg', 'color', 'gender', 'lifetimeYears', 'rapacity'];
    this.uniqueProperties = {
      cat: ['fur', 'shortLegged', 'pedigree', 'trimming', 'lopiness'],
      dog: ['fur', 'shortLegged', 'pedigree', 'trimming', 'specialization'],
      fish: ['freshwater', 'zonality'],
      bird: ['flying', 'talking', 'singing']
    };

    this.getLocaleStorage();
  }

  setLocaleStorage(arrayOfObject) {
    localStorage.setItem('goods', JSON.stringify(arrayOfObject));
  }

  async getLocaleStorage() {
    if (localStorage.getItem('goods')) {
      this.currentSet = this.goods = JSON.parse(localStorage.getItem('goods'));
    } else {
      await fetch('./goods.json').then((result) => result.json())
                                 .then((result) => this.currentSet = this.goods = result)
                                 .then((result) => this.setLocaleStorage(result));
    }
  }
}
