const webinarForm = document.querySelector('[data-webinar-form]');
const webinarStatus = document.querySelector('[data-webinar-status]');
const webinarGate = document.querySelector('[data-webinar-gate]');
const webinarRoom = document.querySelector('[data-webinar-room]');
const webinarFrame = document.querySelector('[data-webinar-frame]');
const webinarBackup = document.querySelector('[data-webinar-backup]');
const webinarPassword = 'profit';
const webinarAccessKey = 'elevatedWebinarAccess';

const buildWebinarUrl = (baseUrl, attendeeName, attendeeEmail) => {
  try {
    const url = new URL(baseUrl);
    if (attendeeName) url.searchParams.set('name', attendeeName);
    if (attendeeEmail) url.searchParams.set('userId', attendeeEmail);
    return url.toString();
  } catch (error) {
    return baseUrl;
  }
};

const showWebinarRoom = (attendeeName = '', attendeeEmail = '') => {
  const baseUrl = webinarFrame?.dataset.roomSrc || '';
  const roomUrl = buildWebinarUrl(baseUrl, attendeeName, attendeeEmail);

  if (webinarFrame && !webinarFrame.src) {
    webinarFrame.src = roomUrl;
  }

  if (webinarBackup) {
    webinarBackup.href = roomUrl;
  }

  webinarGate?.setAttribute('hidden', '');
  webinarRoom?.removeAttribute('hidden');
  webinarRoom?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

try {
  const savedAccess = JSON.parse(window.sessionStorage.getItem(webinarAccessKey) || 'null');
  if (savedAccess?.granted) {
    showWebinarRoom(savedAccess.name || '', savedAccess.email || '');
  }
} catch (error) {
  window.sessionStorage.removeItem(webinarAccessKey);
}

webinarForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!webinarForm.checkValidity()) {
    webinarForm.reportValidity();
    return;
  }

  const formData = new FormData(webinarForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '').trim();

  if (password.toLowerCase() !== webinarPassword.toLowerCase()) {
    webinarStatus.textContent = 'Tiny locked-door moment. Please check the password and try again.';
    return;
  }

  webinarStatus.textContent = '';
  window.sessionStorage.setItem(webinarAccessKey, JSON.stringify({
    granted: true,
    name,
    email,
    enteredAt: new Date().toISOString()
  }));

  showWebinarRoom(name, email);
});
