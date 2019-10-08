export class CategoryView {
  constructor(a) {
    this.a = a;
    this.root = document.getElementById('category-root');
  }

  render(arrayOfCategory, updateProductsList) {
    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'collapsible');
    newUl.innerHTML = `
        <li class="active">
          <div class="collapsible-header">
            <i class="material-icons">turned_in</i>
            <span class="truncate">Category</span>
          </div>
          <div class="collapsible-body">
            <form id="category-list" action="#">
            </form>
          </div>
        </li>`;

    this.root.append(newUl);
    let UlRoot = this.root.getElementsByTagName('form')[0];

    let newP = document.createElement('p');
    newP.innerHTML = `
        <label>
          <input type="radio" checked class="with-gap" name="type" value="all" />
          <span class="truncate">ALL</span>
        </label>
      `;

    UlRoot.append(newP);

    arrayOfCategory.forEach((item) => {
      let newP = document.createElement('p');
      newP.innerHTML = `
        <label>
          <input type="radio" class="with-gap" name="type" value="${item}" />
          <span class="truncate">${item.toUpperCase()}</span>
        </label>
      `;

      UlRoot.append(newP);
    });

    let radioElem = [...UlRoot.getElementsByTagName('input')];
    radioElem.forEach((item) => {
      item.addEventListener('click', () => {
        updateProductsList(item.value);
        console.log(this.a.mediator.warehouse.currentSet);
      });
    });

    this.addCategoryEvents();
  }

  addCategoryEvents() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), { accordion: false });
  }

}


