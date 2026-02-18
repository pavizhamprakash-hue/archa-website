
// Spinner
window.addEventListener('load', function () {
  const spinner = document.getElementById('spinner');
  if (spinner) spinner.classList.remove('show');
});

// Dropdown hover for desktop
function handleDropdown() {
  const isDesktop = window.innerWidth >= 992;
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (isDesktop) {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });
    } else {
      dropdown.onmouseenter = null;
      dropdown.onmouseleave = null;
    }
  });
}

window.addEventListener('load', handleDropdown);
window.addEventListener('resize', handleDropdown);

// Scroll and back to top
window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const sticky = document.querySelector('.sticky-top');
  const backToTop = document.querySelector('.back-to-top');

  if (sticky) sticky.style.top = scrollTop > 300 ? '0px' : '-100px';
  if (backToTop) {
    backToTop.style.display = scrollTop > 300 ? 'block' : 'none';
  }
});

// Back to top click
document.addEventListener('DOMContentLoaded', function () {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
