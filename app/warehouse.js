export class Warehouse {
  constructor(mediator) {
    this.goods;
    this.currentSet;
    this.ordersHistory;
    this.currentOrder = {};
    this.mediator = mediator;
    this.commonProperties = ['type', 'quantity', 'ageMonth', 'weightKg', 'gender', 'lifetimeYears', 'rapacity'];
    this.propertyNames = new Map([
      ['type', 'Category'],
      ['quantity', 'Quantity'],
      ['ageMonth', 'Age (month)'],
      ['weightKg', 'Weight (kg.)'],
      ['gender', 'Gender'],
      ['lifetimeYears', 'Lifetime (yr.)'],
      ['rapacity', 'Rapacity'],
      ['fur', 'Fur'],
      ['shortLegged', 'Short legged'],
      ['pedigree', 'Pedigree'],
      ['trimming', 'Trimming'],
      ['lopiness', 'Lopiness'],
      ['specialization', 'Specialization'],
      ['freshwater', 'Freshwater'],
      ['zonality', 'Zonality'],
      ['flying', 'Flying'],
      ['talking', 'Talking'],
      ['singing', 'Singing'],
    ]);
    this.uniqueProperties = {
      cat: ['fur', 'shortLegged', 'pedigree', 'trimming', 'lopiness'],
      dog: ['fur', 'shortLegged', 'pedigree', 'trimming', 'specialization'],
      fish: ['freshwater', 'zonality'],
      bird: ['flying', 'talking', 'singing']
    };

    this.getGoodsList();
  }

  setLocaleStorage(key, arrayOfObject) {
    localStorage.setItem(key, JSON.stringify(arrayOfObject));
  }

  async getGoodsList() {
    if (localStorage.getItem('goods')) {
      this.currentSet = this.goods = JSON.parse(localStorage.getItem('goods'));
    } else {
      await fetch('./goods.json').then((result) => result.json())
                                 .then((result) => this.currentSet = this.goods = result)
                                 .then((result) => this.setLocaleStorage('goods', result))
                                 .then(() => window.location.reload());
    }
  }
}
