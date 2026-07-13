const masterclassForm = document.querySelector('[data-masterclass-form]');
const masterclassStatus = document.querySelector('[data-masterclass-status]');

masterclassForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!masterclassForm.checkValidity()) {
    masterclassForm.reportValidity();
    return;
  }

  const submitButton = masterclassForm.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton?.innerHTML || '';
  const formData = new FormData(masterclassForm);
  const payload = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim()
  };

  masterclassStatus.textContent = 'Registering you now…';
  masterclassStatus.className = 'webinar-form-status is-sending';

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Registering…';
  }

  try {
    const response = await fetch('/api/masterclass-register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.ok !== true) {
      masterclassStatus.textContent = result.message || 'Registration is having a tiny wobble. Please try again.';
      masterclassStatus.className = 'webinar-form-status is-error';
      return;
    }

    window.location.assign('/webinar-registered/');
  } catch (error) {
    masterclassStatus.textContent = 'Registration could not be completed. Please check your connection and try again.';
    masterclassStatus.className = 'webinar-form-status is-error';
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonContent;
    }
  }
});
