const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const diamond = document.querySelector('[data-diamond]');
const hero = document.querySelector('[data-hero]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
};

const closeMenu = () => {
  navToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('open');
  header?.classList.remove('menu-open');
  document.body.classList.remove('nav-open');
};

navToggle?.addEventListener('click', () => {
  const opening = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(opening));
  nav?.classList.toggle('open', opening);
  header?.classList.toggle('menu-open', opening);
  document.body.classList.toggle('nav-open', opening);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

if (!reduceMotion && diamond && hero) {
  let ticking = false;

  const rotateDiamond = () => {
    const progress = Math.min(Math.max(window.scrollY / Math.max(hero.offsetHeight * .8, 1), 0), 1);
    diamond.style.transform = `rotate(${8 + progress * 37}deg)`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(rotateDiamond);
      ticking = true;
    }
  }, { passive: true });
}

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

updateHeader();
