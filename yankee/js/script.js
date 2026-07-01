const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

function setMenu(open) {
  navToggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  header?.classList.toggle('menu-open', open);
  document.body.classList.toggle('nav-open', open);
  const label = navToggle?.querySelector('.sr-only');
  if (label) label.textContent = open ? 'Close navigation' : 'Open navigation';
}

navToggle?.addEventListener('click', () => {
  setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Template setting: change this one value to update the VA rate everywhere
// in the calculator. It is intentionally not exposed as a visitor control.
const VA_HOURLY_RATE = 35;
const WORKING_WEEKS_PER_YEAR = 52;
const calculator = document.querySelector('[data-calculator]');

if (calculator) {
  const hourlyValue = calculator.querySelector('[data-hourly-value]');
  const adminHours = calculator.querySelector('[data-admin-hours]');
  const currency = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  });

  const updateSliderTrack = (slider) => {
    const progress = ((Number(slider.value) - Number(slider.min)) /
      (Number(slider.max) - Number(slider.min))) * 100;
    slider.style.setProperty('--range-progress', `${progress}%`);
  };

  const updateCalculator = () => {
    const hourly = Number(hourlyValue.value);
    const weeklyHours = Number(adminHours.value);
    const annualHours = weeklyHours * WORKING_WEEKS_PER_YEAR;
    const annualAdminValue = hourly * annualHours;
    const annualVAInvestment = VA_HOURLY_RATE * annualHours;
    const potentialValue = Math.max(annualAdminValue - annualVAInvestment, 0);

    calculator.querySelector('[data-hourly-output]').textContent = currency.format(hourly);
    calculator.querySelector('[data-hours-output]').textContent = `${weeklyHours} ${weeklyHours === 1 ? 'hr' : 'hrs'}/week`;
    calculator.querySelector('[data-annual-value]').textContent = currency.format(annualAdminValue);
    calculator.querySelector('[data-va-rate]').textContent = `${currency.format(VA_HOURLY_RATE)}/hour`;
    calculator.querySelector('[data-va-investment]').textContent = currency.format(annualVAInvestment);
    calculator.querySelector('[data-value-unlocked]').textContent = currency.format(potentialValue);
    calculator.querySelector('[data-hours-returned]').textContent = `${annualHours.toLocaleString('en-GB')} hours`;

    hourlyValue.setAttribute('aria-valuetext', `${currency.format(hourly)} per hour`);
    adminHours.setAttribute('aria-valuetext', `${weeklyHours} ${weeklyHours === 1 ? 'hour' : 'hours'} per week`);
    updateSliderTrack(hourlyValue);
    updateSliderTrack(adminHours);
  };

  hourlyValue.addEventListener('input', updateCalculator);
  adminHours.addEventListener('input', updateCalculator);
  updateCalculator();
}

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details[open]').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

document.querySelectorAll('[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = form.dataset.success;
    form.reset();
  });
});

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}
