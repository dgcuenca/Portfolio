const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerDropdownContent = document.getElementById('hamburgerDropdownContent');

hamburgerIcon.addEventListener('click', () => {
  document.getElementById('hamburgerDropdownContent').classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', (e) => {
  e.preventDefault(); // because href="#" in HTML, prevent after close navigate to top
  if (!(e.target === hamburgerIcon)) hamburgerDropdownContent.classList.remove('show');
});