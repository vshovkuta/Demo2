import { mediator } from '../app/main.js';

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.dropdown-trigger');
  let instances = M.Dropdown.init(elems, {});
});

// document.addEventListener('DOMContentLoaded', function() {
//   let elems = document.querySelectorAll('.collapsible');
//   let instances = M.Collapsible.init(elems, { accordion: false });
// });
