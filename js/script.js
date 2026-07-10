const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const diamond = document.querySelector('[data-diamond]');
const hero = document.querySelector('[data-hero]');
const demoDialog = document.querySelector('[data-demo-dialog]');
const demoFrame = document.querySelector('[data-demo-frame]');
const demoTitle = document.querySelector('#demo-dialog-title');
const demoStage = document.querySelector('[data-demo-stage]');
const demoClose = document.querySelector('[data-demo-close]');
const demoOpenButtons = document.querySelectorAll('[data-demo-open]');
const deviceButtons = document.querySelectorAll('[data-device]');
const faqItems = document.querySelectorAll('.faq-item');
const year = document.querySelector('[data-year]');
const previewWindows = document.querySelectorAll('.preview-window');
const motionCards = document.querySelectorAll('.reassurance-note, .effort-card');
const forminitContactForm = document.querySelector('[data-forminit-contact]');
const forminitStatus = document.querySelector('[data-forminit-status]');
const quizPopup = document.querySelector('[data-quiz-popup]');
const quizPopupClose = document.querySelector('[data-quiz-popup-close]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const quizPopupEnabled = true;
const quizPopupDelay = 12000;

if (year) year.textContent = new Date().getFullYear();

if (forminitContactForm && forminitStatus) {
  const submitButton = forminitContactForm.querySelector('button[type="submit"]');
  const phoneInput = forminitContactForm.querySelector('[name="fi-sender-phone"]');
  const buttonContent = submitButton?.innerHTML || '';

  forminitContactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!forminitContactForm.checkValidity()) {
      forminitContactForm.reportValidity();
      return;
    }

    if (!window.Forminit) {
      forminitStatus.textContent = 'The form could not load. Please refresh the page and try again.';
      forminitStatus.className = 'form-status is-error';
      return;
    }

    const formData = new FormData(forminitContactForm);
    const phone = phoneInput?.value.trim() || '';

    if (phone) {
      let normalizedPhone = phone.replace(/[^\d+]/g, '');
      if (normalizedPhone.startsWith('00')) normalizedPhone = `+${normalizedPhone.slice(2)}`;
      if (normalizedPhone.startsWith('0')) normalizedPhone = `+44${normalizedPhone.slice(1)}`;
      if (normalizedPhone.startsWith('+440')) normalizedPhone = `+44${normalizedPhone.slice(4)}`;

      if (!/^\+[1-9]\d{7,14}$/.test(normalizedPhone)) {
        forminitStatus.textContent = 'Please enter the phone number with its country code, for example +44 7700 900000.';
        forminitStatus.className = 'form-status is-error';
        phoneInput?.focus();
        return;
      }

      formData.set('fi-sender-phone', normalizedPhone);
    } else {
      formData.delete('fi-sender-phone');
    }

    forminitStatus.textContent = 'Sending your message…';
    forminitStatus.className = 'form-status is-sending';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }

    try {
      const forminit = new window.Forminit();
      const { error } = await forminit.submit('oqlfobusouy', formData);

      if (error) {
        forminitStatus.textContent = error.message || 'Your message could not be sent. Please try again.';
        forminitStatus.className = 'form-status is-error';
        return;
      }

      forminitStatus.textContent = 'Thank you—your message has been sent. I’ll be in touch soon.';
      forminitStatus.className = 'form-status is-success';
      forminitContactForm.reset();
    } catch (error) {
      forminitStatus.textContent = 'Your message could not be sent. Please check your connection and try again.';
      forminitStatus.className = 'form-status is-error';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = buttonContent;
      }
    }
  });
}

if (!reduceMotion && 'IntersectionObserver' in window) {
  motionCards.forEach((card) => card.classList.add('motion-ready'));

  const motionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      motionObserver.unobserve(entry.target);
    });
  }, { threshold: .28, rootMargin: '0px 0px -8% 0px' });

  motionCards.forEach((card) => motionObserver.observe(card));
}

const closeQuizPopup = () => {
  if (!quizPopup || quizPopup.hidden) return;
  quizPopup.hidden = true;
  quizPopup.classList.remove('is-visible');
  document.body.classList.remove('nav-open');
  window.sessionStorage?.setItem('elevatedQuizPopupClosed', 'true');
};

const openQuizPopup = () => {
  if (!quizPopup) return;
  if (window.sessionStorage?.getItem('elevatedQuizPopupClosed') === 'true') return;
  quizPopup.hidden = false;
  document.body.classList.add('nav-open');
  window.requestAnimationFrame(() => quizPopup.classList.add('is-visible'));
  quizPopupClose?.focus({ preventScroll: true });
};

if (quizPopupEnabled && quizPopup) {
  window.setTimeout(openQuizPopup, quizPopupDelay);
}

quizPopupClose?.addEventListener('click', closeQuizPopup);
quizPopup?.addEventListener('click', (event) => {
  if (event.target === quizPopup) closeQuizPopup();
});
quizPopup?.querySelector('a')?.addEventListener('click', closeQuizPopup);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeQuizPopup();
});

const sizePreviewFrame = (previewWindow) => {
  const desktopCanvasWidth = 1440;
  const scale = previewWindow.clientWidth / desktopCanvasWidth;
  previewWindow.style.setProperty('--preview-scale', scale.toFixed(4));
};

previewWindows.forEach(sizePreviewFrame);

if ('ResizeObserver' in window) {
  const previewObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => sizePreviewFrame(entry.target));
  });
  previewWindows.forEach((previewWindow) => previewObserver.observe(previewWindow));
} else {
  window.addEventListener('resize', () => previewWindows.forEach(sizePreviewFrame));
}

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

  if (button.getAttribute('role') === 'button') {
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      button.click();
    });
  }
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

window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu();
});

updateHeader();
