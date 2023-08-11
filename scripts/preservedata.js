const fullname = document.getElementById('name');
const email = document.getElementById('formMail');
const text = document.getElementById('formMessage');

const formData = {
  userName: '', userEmail: '', text: '',
};

const form = {
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
    form.userName = formData.userName;
    form.userEmail = formData.userEmail;
    form.text = formData.text;
  }
}

function populateStorage() {
  formData.userName = form.userName;
  formData.userEmail = form.userEmail;
  formData.text = form.text;
  localStorage.setItem('formData', JSON.stringify(formData));
  setStyles();
}

setStyles();

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;