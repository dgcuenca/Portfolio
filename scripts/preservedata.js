const fullname = document.getElementById('name');
const email = document.getElementById('formMail');
const text = document.getElementById('formMessage');

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
    fullname.value = formData.userName;
    email.value = formData.userEmail;
    text.value = formData.text;
  }
}

function populateStorage() {
  formData.userName = fullname.value;
  formData.userEmail = email.value;
  formData.text = text.value;
  localStorage.setItem('formData', JSON.stringify(formData));
  setStyles();
}

setStyles();

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;