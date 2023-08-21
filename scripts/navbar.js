const lastSection = document.querySelector(".formSection")
const navBar = document.querySelector(".toolbar")
const diego = document.querySelector("#brandName")
navBar.style.transition = "background-color 1s ease, border-bottom-color 0.3s ease";

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navBar.style.backgroundColor = "rgb(229,230,230)";
      navBar.style.borderBottom = "rgb(229,230,230) solid 0.1rem";
      diego.style.color ="#179aac";
    } else {
      navBar.style.backgroundColor = "rgb(30,31,32)";
      navBar.style.borderBottom = "#179aac solid 0.1rem";
      diego.style.color ="rgb(229,230,230)";
    }
  })
})

observer.observe(lastSection)