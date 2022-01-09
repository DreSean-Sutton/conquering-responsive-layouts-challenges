let $link = document.querySelector('#link');
let $contentLayout = document.querySelector('#content-layout');
let $modal = document.querySelector('#modal');

$link.addEventListener('click', function(event) {
  event.preventDefault();
  $modal.classList.remove('hidden');
})

$modal.addEventListener('click', function(event) {
  if (event.target.matches('#no-button')) {
    event.preventDefault();
    $modal.classList.add('hidden');
  }
})
