export class SearchView {
  constructor(controller) {
    this.controller = controller;
    this.root = document.getElementById('search-root');

  }

  render(updateProductsList, getFoundObject, getImageURLObject) {
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
    this.addSearchEvents(updateProductsList, getFoundObject, getImageURLObject);
  }

  addSearchEvents(updateProductsList, getFoundObject, getImageURLObject) {
    this.rootInput = document.getElementById('search-input');
    this.rootClear = document.getElementById('search-clear');

    this.root.addEventListener('keyup', () => {
      updateProductsList(getFoundObject(this.rootInput.value.toLowerCase()));
    });

    this.root.addEventListener('click', () => {
      M.Autocomplete.init(document.querySelectorAll('.autocomplete'),
        {
          data: getImageURLObject(),
          onAutocomplete: () => {
            updateProductsList(getFoundObject(this.rootInput.value.toLowerCase()));
          },
        });
    });

    this.rootClear.addEventListener('click', () => {
      this.rootInput.value = '';
      updateProductsList(getFoundObject(this.rootInput.value.toLowerCase()));
    })

  }


}

