var fullname = document.getElementById('name');
var email = document.getElementById('email');
var text = document.getElementById('textarea');

fullname.onchange = populateStorage;
email.onchange = populateStorage;
text.onchange = populateStorage;

// if(!Storage.length) {
//   window.onload=populateStorage();
//   console.log('Enter to populateStorage');
// } else {
//   console.log('else');
//   setStyles();
// }

//window.onload=function(){
  

function populateStorage() {
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('textarea', document.getElementById('textarea').value);
  console.log(localStorage);
  setStyles();
}

function setStyles() {
  var currentname = localStorage.getItem('name');
  var currentmail = localStorage.getItem('email');
  var currentext = localStorage.getItem('textarea');

  document.getElementById ('name').innerHTML = currentname;

  document.getElementById('email').innerHTML = currentmail;
  console.log(document.getElementById('name').value);
  document.getElementById('textarea').innerHTML = currentext;
}
