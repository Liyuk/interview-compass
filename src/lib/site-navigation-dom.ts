const toggle = document.querySelector<HTMLButtonElement>('[data-site-navigation-toggle]');
const header = document.querySelector<HTMLElement>('.site-header');
const menu = document.querySelector<HTMLElement>('[data-site-navigation]');
function closeMenu(returnFocus = false) {
  toggle?.setAttribute('aria-expanded', 'false');
  header?.classList.remove('nav-open');
  if (returnFocus) toggle?.focus();
}
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  header?.classList.toggle('nav-open', expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (event.target instanceof Node && !menu?.contains(event.target) && !toggle?.contains(event.target)) closeMenu();
});
document.addEventListener('focusin', event => {
  if (event.target instanceof Node && !menu?.contains(event.target) && !toggle?.contains(event.target)) closeMenu();
});
window.matchMedia('(max-width: 1280px)').addEventListener('change', () => closeMenu());
