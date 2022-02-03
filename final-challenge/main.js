let $navItem = document.querySelector('#header-nav');
let $headerNavbar = document.querySelector('#header__navbar');
let $bottomNavbar = document.querySelector('.navbar-icon--bottom');
let $navSectionMobile = document.querySelector('#navbar-section__mobile');
let $overlay = document.querySelector('.overlay');

$headerNavbar.addEventListener('click', toggleTopNavbar);
$bottomNavbar.addEventListener('click', toggleBottomNavbar);


function toggleTopNavbar (event) {
  if ((!$navItem.className.includes('hidden')) && (!$navItem.className.includes('desktop'))) {
    $navItem.classList.add('hidden', 'nav__mobile');
    $overlay.classList.add('hidden');
  } else {
    $navItem.classList.remove('hidden', 'nav__mobile');
    $overlay.classList.remove('hidden');
  }
}

function toggleBottomNavbar (event) {
  if ($navSectionMobile.className.includes('hidden')) {
    $navSectionMobile.classList.remove('hidden');
    $overlay.classList.remove('hidden')
  } else {
    $navSectionMobile.classList.add('hidden');
    $overlay.classList.add('hidden');
  }
}
