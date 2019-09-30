export class CategoryView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('category-root');
  }

  render(arrayOfCategory) {
    let newP = document.createElement('p');
    newP.innerHTML = `
        <label>
          <input type="radio" checked class="with-gap" name="type" value="all" />
          <span class="truncate">All</span>
        </label>
      `;
    this.root.append(newP);

    arrayOfCategory.forEach((item) => {
      let newP = document.createElement('p');
      newP.innerHTML = `
        <label>
          <input type="radio" class="with-gap" name="type" value="${item}" />
          <span class="truncate">${item.toUpperCase()}</span>
        </label>
      `;
      this.root.append(newP);
    });

    let radioElem = [...this.root.getElementsByTagName('input')];
    radioElem.forEach((item) => {
      item.addEventListener('click', () => {
        this.controller.updateProducts(item.value);
      });
    });

  }
}
