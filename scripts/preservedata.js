const fullname = document.getElementById('name');
const email = document.getElementById('formMail');
const text = document.getElementById('formMessage');
const form = document.getElementById('signup');

const formData = {
  userName: '', userEmail: '', text: '',
};

function setStyles() {
  if (localStorage.getItem('formData') === null) {
    formData.userName = '';
    formData.userEmail = '';
    formData.text = '';
  } else {
    const data = JSON.parse(localStorage.getItem('formData'));
    formData.userName = data.userName;
    formData.userEmail = data.userEmail;
    formData.text = data.text;
    form.userName.value = formData.userName;
    form.userEmail.value = formData.userEmail;
    form.text.value = formData.text;
  }
}

function populateStorage() {
  formData.userName = form.userName.value;
  formData.userEmail = form.userEmail.value;
  formData.text = form.text.value;
  localStorage.setItem('formData', JSON.stringify(formData));
  setStyles();
}

setStyles();

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;