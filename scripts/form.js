const form = document.querySelector('#signup');
const EMAIL_INVALID = 'Please enter a correct email address format';

function showMessage(input, message, type) {
  // get the <small> element and set the message
  const msg = document.getElementById('small');
  msg.innerText = message;
  // update the class for the input
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  // validate email format
  const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements[1], EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});
