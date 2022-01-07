let $link = document.querySelector('#link');
let $contentLayout = document.querySelector('#content-layout');
let $modal = document.querySelector('#modal');

$link.addEventListener('click', function(event) {
  event.preventDefault();
  $modal.className = 'row modal-layout';
})

$modal.addEventListener('click', function(event) {
  if (event.target.matches('#no-button')) {
    event.preventDefault();
    $modal.className = 'row modal-layout hidden'
  }
})
