export class ProductView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('products-root');

  }

  render(arrayOfObject) {
    this.root.innerHTML = '';

    arrayOfObject.forEach((item) => {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'col s12 m4 l3 xl3');
      newDiv.innerHTML = `<div class="card sticky-action hoverable">
        <div class="card-image">
          <img class="materialboxed" src="${item.url}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            ${item.name}
            <i class="material-icons right tooltipped" data-position="top" data-tooltip="More details">
              expand_less</i>
          </span>
          ${this.getHTMLStringFromCommonProperties(item)}
          ${this.getHTMLStringFromColor(item)}
        </div>
        <div class="card-action flex-between">
          <span class="right">
            Price:<br/>
            <strong>$${item.price}</strong>
          </span>
          <span class="card-action-button">
            <a class="btn truncate" data-id=${item.id}>
              <i class="material-icons left">add_shopping_cart</i>
              BUY
            </a>
          </span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            ${item.name}
            <i class="material-icons right">close</i>
          </span>
          ${this.getHTMLStringFromUniqueProperties(item)}
        </div>
      </div>`;

      this.root.append(newDiv);
    });
    this.addCardEvents();
  }

  getHTMLStringFromColor(object) {
    let formattedHTMLString = '';
    object.color.forEach((item) => {
      formattedHTMLString += `<span class='truncate'>
          <i class='material-icons left ${item}-text ${item !== 'wild'? 'stroke':''}'>
            lens
          </i>
            ${item}
          </span>`;
    });
    return `<p><strong>Color:</strong> ${formattedHTMLString}</p>`;
  }

  getHTMLStringFromCommonProperties(object) {
    let commonProperties = this.controller.getCommonProperties();
    let formattedHTMLString = '';
    for (let item in object) {
      if (commonProperties.includes(item)) {
        formattedHTMLString += `<p><strong>${this.controller.PropertyNames(item)}:</strong> ${object[item]}</p>\r\n`;
      }
    }
    return formattedHTMLString;
  }

  getHTMLStringFromUniqueProperties(object) {
    let uniqueProperties = this.controller.getUniqueProperties();
    let formattedHTMLString = '';
    for (let item in object) {
      if (uniqueProperties[object.type].includes(item)) {
        formattedHTMLString += `<p><strong>${this.controller.PropertyNames(item)}:</strong> ${object[item]}</p>\r\n`;
      }
    }
    return formattedHTMLString;
  }


  addCardEvents() {
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});

    document.querySelectorAll('.card-action-button').forEach((item) => {
      item.getElementsByClassName('btn')[0].addEventListener('click', this.addToCart);
    });

    document.querySelectorAll('.card-action-button').forEach((item) => {
      item.getElementsByClassName('btn')[0].addEventListener('click', () => {
        this.updateCartNumber('up');
      });
    });

  }

  addToCart() {
    this.classList.add('disabled');
    this.innerHTML = `<i class="material-icons left">shopping_cart</i>ADDED`;

    let currentOrder = JSON.parse(localStorage.getItem('currentOrder')) || [];
    currentOrder.push([parseInt(this.dataset.id), 1]);
    localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
  }

  restoreLastOrder() {
    let currentOrder = JSON.parse(localStorage.getItem('currentOrder')) || [];
    currentOrder.forEach((item) => {
      let currentElem = document.querySelector(`[data-id="${item[0]}"]`);
      currentElem.classList.add('disabled');
      currentElem.innerHTML = `<i class="material-icons left">shopping_cart</i>ADDED`;
      this.controller.updateCartNumber('up');
    })
  }

  updateCartNumber(number) {
    this.controller.updateCartNumber(number);
  }

}
