'use strict';

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  document.documentElement.classList.add('js-nav');
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
}

const demoDialog = document.querySelector('#demo-dialog');
const demoButton = document.querySelector('[data-demo-open]');
if (demoDialog && demoButton && typeof demoDialog.showModal === 'function') {
  demoButton.hidden = false;
  demoButton.addEventListener('click', () => {
    demoDialog.showModal();
    document.body.classList.add('dialog-open');
  });
  demoDialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    demoButton.focus();
  });
  demoDialog.addEventListener('click', (event) => {
    const bounds = demoDialog.getBoundingClientRect();
    if (event.target === demoDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) demoDialog.close();
  });
}
