const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email-input');
const emailError     = document.getElementById('email-error');
const signupSection  = document.getElementById('signup-section');
const successSection = document.getElementById('success-section');
const confirmedEmail = document.getElementById('confirmed-email');
const dismissBtn     = document.getElementById('dismiss-btn');

const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function setError (show) {
    emailInput.setAttribute('aria-invalid', show ? 'true' : 'false');
    emailError.setAttribute('aria-hidden', show ? 'false' : 'true');
    emailError.style.display = show ? 'block' : 'none';
}

emailInput.addEventListener('input', () => {
    if (emailInput.getAttribute('aria-invalid') === 'true') {
        setError(false);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = emailInput.value.trim();

    if (!isValidEmail(val)) {
        setError(true);
        emailInput.focus();
        return;
    }

    setError(false);
    confirmedEmail.textContent = val;

    signupSection.setAttribute('aria-hidden', 'true');
    signupSection.style.display = 'none';

    successSection.setAttribute('aria-hidden', 'false');
    successSection.style.display = 'flex';

    document.getElementById('success-heading').setAttribute('tabindex', '-1');
    document.getElementById('success-heading').focus();
});

dismissBtn.addEventListener('click', () => {
    successSection.setAttribute('aria-hidden', 'true');
    successSection.style.display = 'none';

    signupSection.setAttribute('aria-hidden', 'false');
    signupSection.style.display = '';

    emailInput.value = '';
    setError(false);

    emailInput.focus();
});