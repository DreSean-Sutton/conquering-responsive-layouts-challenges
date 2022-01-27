var $navItem = document.querySelector('#header-nav');
var $CRLLogo = document.querySelector('#logo');

$CRLLogo.addEventListener('click', toggleNavbar)

function toggleNavbar (event) {
  if ((!$navItem.className.includes('hidden')) && (!$navItem.className.includes('desktop'))) {
    $navItem.classList.add('hidden', 'nav__mobile');
  } else {
    $navItem.classList.remove('hidden', 'nav__mobile');
  }
}
