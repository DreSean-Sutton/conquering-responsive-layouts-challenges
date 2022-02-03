let $navItem = document.querySelector('#header-nav');
let $headerNavbar = document.querySelector('#header__navbar');
let $bottomNavbar = document.querySelector('.navbar-icon--bottom');
let $navSectionMobile = document.querySelector('#navbar-section__mobile');
let $overlay = document.querySelector('.overlay');

$headerNavbar.addEventListener('click', toggleTopNavbar);
$bottomNavbar.addEventListener('click', toggleBottomNavbar);


function toggleTopNavbar (event) {
  if ((!$navItem.className.includes('hidden-mobile-show-desktop'))) {
    $navItem.classList.add('hidden-mobile-show-desktop', 'nav__mobile');
    $overlay.classList.add('hidden-mobile-show-desktop');
  } else {
    $navItem.classList.remove('hidden-mobile-show-desktop', 'nav__mobile');
    $overlay.classList.remove('hidden-mobile-show-desktop');
  }
}

function toggleBottomNavbar (event) {
  if ($navSectionMobile.className.includes('hidden-mobile-show-desktop')) {
    $navSectionMobile.classList.remove('hidden-mobile-show-desktop');
    $overlay.classList.remove('hidden-mobile-show-desktop')
  } else {
    $navSectionMobile.classList.add('hidden-mobile-show-desktop');
    $overlay.classList.add('hidden-mobile-show-desktop');
  }
}
