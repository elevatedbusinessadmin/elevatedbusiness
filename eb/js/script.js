const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const diamond = document.querySelector('[data-diamond]');
const hero = document.querySelector('[data-hero]');
const duplicateDiamond = document.querySelector('[data-diamond-duplicate]');
const duplicateHero = document.querySelector('[data-hero-duplicate]');
const demoDialog = document.querySelector('[data-demo-dialog]');
const demoFrame = document.querySelector('[data-demo-frame]');
const demoTitle = document.querySelector('[data-demo-title]');
const demoStage = document.querySelector('[data-demo-stage]');
const demoClose = document.querySelector('[data-demo-close]');
const demoOpenButtons = document.querySelectorAll('[data-demo-open]');
const deviceButtons = document.querySelectorAll('[data-device]');
const faqItems = document.querySelectorAll('.faq-item');
const year = document.querySelector('[data-year]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (year) year.textContent = new Date().getFullYear();

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

faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

const closeDemo = () => {
  if (!demoDialog?.open) return;
  demoDialog.close();
  if (demoFrame) demoFrame.src = 'about:blank';
};

demoOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!demoDialog || !demoFrame) return;
    demoFrame.src = button.dataset.demoSrc;
    if (demoTitle) demoTitle.textContent = button.dataset.demoTitle || 'Website preview';
    if (demoStage) demoStage.dataset.view = 'desktop';
    deviceButtons.forEach((deviceButton) => {
      const active = deviceButton.dataset.device === 'desktop';
      deviceButton.classList.toggle('active', active);
      deviceButton.setAttribute('aria-pressed', String(active));
    });
    demoDialog.showModal();
  });
});

deviceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (demoStage) demoStage.dataset.view = button.dataset.device;
    deviceButtons.forEach((deviceButton) => {
      const active = deviceButton === button;
      deviceButton.classList.toggle('active', active);
      deviceButton.setAttribute('aria-pressed', String(active));
    });
  });
});

demoClose?.addEventListener('click', closeDemo);
demoDialog?.addEventListener('click', (event) => {
  if (event.target === demoDialog) closeDemo();
});
demoDialog?.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeDemo();
});

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

if (!reduceMotion && duplicateDiamond && duplicateHero) {
  let duplicateTicking = false;

  const rotateDuplicateDiamond = () => {
    const distanceIntoHero = window.scrollY - duplicateHero.offsetTop;
    const progress = Math.min(Math.max(distanceIntoHero / Math.max(duplicateHero.offsetHeight * .8, 1), 0), 1);
    duplicateDiamond.style.transform = `rotate(${8 + progress * 37}deg)`;
    duplicateTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!duplicateTicking) {
      window.requestAnimationFrame(rotateDuplicateDiamond);
      duplicateTicking = true;
    }
  }, { passive: true });
}

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

updateHeader();
