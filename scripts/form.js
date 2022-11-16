
  const form = document.querySelector("#signup");
  const EMAIL_INVALID = "Please enter a correct email address format";

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    let emailValid = validateEmail(form.elements["email"], EMAIL_INVALID);
  
    if (emailValid) {
      form.submit();
    }
  });

  function validateEmail(input, invalidMsg) {
   
    // validate email format
    const emailRegex =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  

function showMessage(input, message, type) {
	// get the <small> element and set the message
	const msg =document.getElementById("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
} 