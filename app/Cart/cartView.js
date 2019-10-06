export class CartView {
  constructor(controller) {
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
          </a>
    `;

    this.root.append(newLi);
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

}
