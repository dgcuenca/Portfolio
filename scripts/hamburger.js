const hamburgerIcon = document.getElementById('hamburgerIcon');
hamburgerIcon.addEventListener('click', () => {
  document.getElementById('hamburgerDropdownContent').classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener('click', (e) => {
  const hamburgerDropdownContent = document.getElementById('hamburgerDropdownContent');
  if (!(e.target === hamburgerIcon)) hamburgerDropdownContent.classList.remove('show');
});