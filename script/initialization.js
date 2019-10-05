import { mediator } from '../app/main.js';

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.materialboxed');
  let instances = M.Materialbox.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.tooltipped');
  let instances = M.Tooltip.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems, { accordion: false });
});

document.addEventListener('DOMContentLoaded', function() {
  let data = {};
  mediator.warehouse.goods.forEach((item) => data[item.name] = item.url);

  let elems = document.querySelectorAll('.autocomplete');
  let instances = M.Autocomplete.init(elems, {
    data,
    onAutocomplete: () => mediator.search.updateProducts(),
  });
});

document.addEventListener('click', function() {
  let data = {};
  mediator.warehouse.currentSet.forEach((item) => data[item.name] = item.url);

  let elems = document.querySelectorAll('.autocomplete');
  let instances = M.Autocomplete.init(elems, {
    data,
    onAutocomplete: () => mediator.search.updateProducts(),
  });
});
