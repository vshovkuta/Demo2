import { router } from '../app/Router.js';

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
  let elems = document.querySelectorAll('.autocomplete');
  let instances = M.Autocomplete.init(elems, {
    data: {
      'Siamese': 'data/img/pets/cats/siamskaya.jpg',
      'Balinese': 'data/img/pets/cats/balines.jpg',
      'Abyssinian': 'data/img/pets/cats/abussian.jpg',
      'Bambino': 'data/img/pets/cats/bambino.jpg',
      'American Bobtail': 'data/img/pets/cats/bobtail.jpg',
      'Bengal': 'data/img/pets/cats/bengal.jpg',
      'Maine Coon': 'data/img/pets/cats/mainecoon.jpg',
      'Exotic Shorthair': 'data/img/pets/cats/exoticshorthair.jpg',
      'Korat': 'data/img/pets/cats/korat.jpg',
      'Peterbald': 'data/img/pets/cats/peterbald.jpg',
      'English Bulldog': 'data/img/pets/dogs/bulldog.jpg',
      'Doberman': 'data/img/pets/dogs/doberman.jpg',
      'Chinese Crested': 'data/img/pets/dogs/kitayskaya.jpg',
      'German Shepherd': 'data/img/pets/dogs/ovcharka.jpg',
      'Dachshund': 'data/img/pets/dogs/taksa.jpg',
      'Pug': 'data/img/pets/dogs/pug.jpg',
      'Beagle': 'data/img/pets/dogs/beagle.jpg',
      'Poodle': 'data/img/pets/dogs/poodle.jpg',
      'American Bully': 'data/img/pets/dogs/americanbully.jpg',
      'Papillon': 'data/img/pets/dogs/papillon.jpg',
      'Astronotus': 'data/img/pets/fish/astronotus.jpg',
      'Coryphaena hippurus': 'data/img/pets/fish/coryphaena.jpg',
      'Betta splendens': 'data/img/pets/fish/betta.jpg',
      'Ancistrus': 'data/img/pets/fish/ancistrus.jpg',
      'Guppi': 'data/img/pets/fish/guppi.jpg',
      'Goldfish': 'data/img/pets/fish/goldfish.jpg',
      'Dwarf gourami': 'data/img/pets/fish/dwarfgourami.jpg',
      'Pygmy corydoras': 'data/img/pets/fish/pygmycorydoras.jpg',
      'Pearl danio': 'data/img/pets/fish/pearldanio.jpg',
      'Kamfa': 'data/img/pets/fish/kamfa.jpg',
      'Canary': 'data/img/pets/bird/canary.jpg',
      'Aratingi': 'data/img/pets/bird/aratingi.jpg',
      'Cockatoo': 'data/img/pets/bird/сockatoo.jpg',
      'Owl': 'data/img/pets/bird/sova.jpg',
      'Jaco': 'data/img/pets/bird/jaco.jpg',
      'Monk parakeet': 'data/img/pets/bird/monkparakeet.jpg',
      'Blue-winged': 'data/img/pets/bird/bluewinged.jpg',
      'Western rosella': 'data/img/pets/bird/westernrosella.jpg',
      'Jandaya parakeet': 'data/img/pets/bird/jandayaparakeet.jpg',
      'Magpie': 'data/img/pets/bird/magpie.jpg',
    },
    onAutocomplete: () => router.search.view.viewFound(),
  });
});
