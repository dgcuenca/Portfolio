const dataPopup = [
  {
    close_icon: "../icons/closeIcon.png",
    title: "Multi Post Stories",
    language1: "Html",
    language2: "Bootstrap",
    language3: "Ruby on rails",
    image: "../images/mobilePopup.png",
    textmulti: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    btn_seelive: "See Live",
    btn_seeSource: "See Source",
  }
];

const firstButtonPopup = document.getElementById('firstButtonPopup');
firstButtonPopup.addEventListener('click', () => {
  document.getElementById("firstPopupContainer").classList.toggle("show2");
  displayLayoutPopup();
});

function displayLayoutPopup() {
  const firstPopupContainer = document.getElementById("firstPopupContainer");
  firstPopupContainer.replaceChildren();
  let img = document.createElement('img');
  img.src = `${dataPopup[0].close_icon}`;
  img.class = 'closePopup';
  firstPopupContainer.appendChild(img);
  let h2 = document.createElement('h2');
  h2.textContent = `${dataPopup[0].title}`;
  firstPopupContainer.appendChild(h2);
};

document.addEventListener('click', function (e) {
  if (e.target && e.target.class == 'closePopup') {
    document.getElementById("firstPopupContainer").classList.toggle("show2");
  }
});



