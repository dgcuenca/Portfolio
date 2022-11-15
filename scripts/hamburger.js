const hamburgerIcon=document.getElementById("hamburgerIcon");
hamburgerIcon.addEventListener('click', () => {
    document.getElementById("hamburgerDropdownContent").classList.toggle("show");
  });

// Close the dropdown menu if the user clicks outside of it
window.addEventListener ('click', function(e){
  if (!(e.target === hamburgerIcon)) hamburgerDropdownContent.classList.remove('show');
});