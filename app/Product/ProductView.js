export class ProductView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('products-root');
  }

  render(arrayOfObject) {
    // this.controller.controllers.warehouse.currentSet = arrayOfObject;
    this.root.innerHTML = '';

    arrayOfObject.forEach((item) => {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'col s12 m4');
      newDiv.innerHTML = `
        <div class="card sticky-action hoverable">
            <div class="card-image">
              <img class="materialboxed" src="${item.url}">
            </div>
            <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      ${item.name}
                      <i class="material-icons right tooltipped" data-position="top" data-tooltip="View details">expand_less</i>
                    </span>
              <p><strong>Category:</strong> ${item.type}</p>
              <p><strong>Gender:</strong> ${item.gender}</p>
              <p><strong>Quantity:</strong> ${item.quantity}</p>
              <p><strong>Age:</strong> ${item.ageMonth} month</p>
              <p><strong>Lifetime:</strong> ${item.lifetimeYears} yr.</p>
              <p><strong>Weight:</strong> ${item.weightKg} kg.</p>
              <p><strong>Color:</strong> ${item.color.map((colour) => `<span class="truncate"><i class="material-icons left ${colour}-text ${colour !== 'wild'? 'stroke':''}">lens</i>${colour}</span>`).join('')}</p>
              <p><strong>Rapacity:</strong> ${item.rapacity}</p>
            </div>
            <div class="card-action flex-between">
              <span class="right">Price: <strong>$${item.price}</strong></span>
             <span class=""><a class="btn truncate">
                <i class="material-icons left">add_shopping_cart</i>
                BUY
              </a></span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${item.name}<i class="material-icons right">close</i></span>
                ${item.type === 'cat' || item.type === 'dog'?
                `<p><strong>Fur:</strong> ${item.fur}</p>
                 <p><strong>Short legged:</strong> ${item.shortLegged}</p>
                 <p><strong>Pedigree:</strong> ${item.pedigree}</p>
                 <p><strong>Trimming:</strong> ${item.trimming}</p>`:''
                }
                ${item.type === 'cat'?`<p><strong>Lopiness:</strong> ${item.lopiness}</p>`:''}
                ${item.type === 'dog'?`<p><strong>Specialization:</strong> ${item.specialization}</p>`:''}
                ${item.type === 'fish'?`<p><strong>Freshwater:</strong> ${item.freshwater}</p><p><strong>Zonality:</strong> ${item.zonality.join(', ')}</p>`:''}
                ${item.type === 'bird'?`<p><strong>Flying:</strong> ${item.flying}</p><p><strong>Talking:</strong> ${item.talking}</p><p><strong>Singing:</strong> ${item.singing}</p>`:''}
                
            </div>
          </div>`;

      this.root.append(newDiv);
    })
  }


}
