export class SearchView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('search-root');

    this.render();
  }

  render() {
    let liElem = document.createElement('li');
    liElem.innerHTML = `<nav class="z-depth-0 transparent ">
            <div class="nav-wrapper left">
              <form>
                <div class="input-field">
                  <input id="search-input" type="search" class="autocomplete" autocomplete="off" required>
                  <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                  <i class="material-icons" id="search-clear">close</i>
                </div>
              </form>
            </div>
          </nav>
    `;

    this.root.append(liElem);
    this.addSearchEvents();
  }

  addSearchEvents() {
    this.rootInput = document.getElementById('search-input');
    this.rootClear = document.getElementById('search-clear');

    this.root.addEventListener('keyup', () => {
      this.controller.updateProductsList(this.controller.getFoundObject(this.rootInput.value.toLowerCase()));
    });

    this.root.addEventListener('click', () => {
      M.Autocomplete.init(document.querySelectorAll('.autocomplete'),
        {
          data: this.controller.getImageURLObject(),
          onAutocomplete: () => {
            this.controller.updateProductsList(this.controller.getFoundObject(this.rootInput.value.toLowerCase()));
          },
        });
    });

    this.rootClear.addEventListener('click', () => {
      this.rootInput.value = '';
      this.controller.updateProductsList(this.controller.getFoundObject(this.rootInput.value.toLowerCase()));
    })

  }


}

