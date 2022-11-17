var fullname = document.getElementById('name');
var email = document.getElementById('formMail');
var text = document.getElementById('formMessage');
var form = document.getElementById('desktopFORM');

const formData = {
  userName: '', userEmail: '', text: ''
}

function populateStorage() {
  formData.userName = form.userName.value;
  formData.userEmail = form.userEmail.value;
  formData.text = form.text.value;
  localStorage.setItem('formData', JSON.stringify(formData));

  console.log(localStorage);
  setStyles();
}

function setStyles() {
  if (localStorage.getItem("formData") === null) {
    formData.userName = '';
    formData.userEmail = '';
    formData.text = '';

  } else {
    let data = JSON.parse(localStorage.getItem("formData"));
    formData.userName = data.userName;
    formData.userEmail = data.userEmail;
    formData.text = data.text;
    form.userName.value = formData.userName;
    form.userEmail.value = formData.userEmail;
    form.text.value = formData.text;
  }

}
setStyles();

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;