var $link = document.querySelector('#link');
var $contentLayout = document.querySelector('#content-layout');
var $modal = document.querySelector('#modal');

$link.addEventListener('click', function(event) {
  event.preventDefault();
  $modal.className = 'row modal-layout';
  // $contentLayout.modal {
  //   backdrop: 'static',
  //   keyboard: false
  // })
})

$modal.addEventListener('click', function(event) {
  if (event.target.matches('#no-button')) {
    event.preventDefault();
    $modal.className = 'row modal-layout hidden'
  }
})
