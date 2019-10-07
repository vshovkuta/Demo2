export class CartView {
  constructor(controller) {
    this.cartNumberElem;
    this.controller = controller;
    this.root = document.getElementById('cart-root');

    this.render();
    this.renderModal();

  }

  render() {
    let newLi = document.createElement('li');
    newLi.innerHTML = `<a class="modal-trigger" href="#cart-modal">
          <i class="material-icons left">shopping_cart</i>
            Cart
            <div id="cart-number" class="hidden">0</div>
          </a>
    `;

    this.root.append(newLi);
    this.cartNumberElem = document.getElementById('cart-number');

  }

  renderModal() {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'cart-modal');
    newDiv.setAttribute('class', 'modal modal-fixed-footer open');
    newDiv.innerHTML = `
    <div class="modal-content">
      <h4>You current order:</h4>
      <div id="cart-order">
      cart
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close btn-flat">Cancel</a>
      <a href="#!" class="btn-flat">Confirm</a>
    </div>`

    document.body.append(newDiv);
    this.addCartEvents();
  }

  addCartEvents() {
    M.Modal.init(document.querySelectorAll('.modal'), {});
  }

  upCartNumber() {
    let innerNumber = parseInt(this.cartNumberElem.dataset.count);
    if (innerNumber < 9) {
      this.removeClass(this.cartNumberElem, 'hidden');
      this.cartNumberElem.innerHTML = innerNumber + 1;
      this.cartNumberElem.dataset.count = innerNumber + 1;
    } else {
      this.removeClass(this.cartNumberElem, 'hidden');
      this.cartNumberElem.innerHTML = '9+';
      this.cartNumberElem.dataset.count = innerNumber + 1;
    }
  }

  downCartNumber() {
    let innerNumber = parseInt(this.cartNumberElem.dataset.count);
    if (innerNumber > 1 && innerNumber <= 9) {
      this.removeClass(this.cartNumberElem, 'hidden');
      this.cartNumberElem.innerHTML = innerNumber - 1;
      this.cartNumberElem.dataset.count = innerNumber - 1;
    }
    if (innerNumber > 9 ) {
      this.removeClass(this.cartNumberElem, 'hidden');
      this.cartNumberElem.innerHTML = '9+';
      this.cartNumberElem.dataset.count = innerNumber - 1;
    }
    if (innerNumber === 1) {
      this.addClass(this.cartNumberElem, 'hidden');
      this.cartNumberElem.innerHTML = innerNumber - 1;
      this.cartNumberElem.dataset.count = innerNumber - 1;
    }
  }
    // if (innerNumber = 0) {
    //   this.addClass(this.cartNumberElem, 'hidden');
    //   this.cartNumberElem.innerText = innerNumber + 1;
    // }



  updateCartNumber(string = 'up') {
    if(typeof string === 'number') {
      let number = parseInt(string, 10);
      if (number == 0) {
        this.addClass(this.cartNumberElem, 'hidden');
        this.cartNumberElem.innerHTML = 0;
        this.cartNumberElem.dataset.count = 0;
      }
      if (number > 0 && number <= 9) {
        this.removeClass(this.cartNumberElem, 'hidden');
        this.cartNumberElem.innerHTML = number;
        this.cartNumberElem.dataset.count = number;
      }
      if (number > 9) {
        this.removeClass(this.cartNumberElem, 'hidden');
        this.cartNumberElem.innerHTML = '9+';
        this.cartNumberElem.dataset.count = number;
      }
    }
    if (string === 'up') {
      this.upCartNumber();
    }
    if (string === 'down') {
      this.downCartNumber();
    }
  }

  toggleClass(element, className) {
    element.classList.toggle(className);
  }

  addClass(element, className) {
      if (!element.classList.contains(className)) {
        element.classList.add(className);
      }
  }

  removeClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }


}
