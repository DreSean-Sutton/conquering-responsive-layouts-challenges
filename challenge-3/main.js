let $link = document.querySelector('#link');
let $modal = document.querySelector('#modal');

$link.addEventListener('click', function(event) {
  event.preventDefault();
  $modal.className = 'hidden';
  // $modal.modal {
  //   backdrop: 'static',
  //   keyboard: false
  // })
})

$modal.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.matches('#no-button') {
    $modal.className = 'hidden'
  }
})
