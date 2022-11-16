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

  let language1 = document.createElement('button');
  language1.textContent = `${dataPopup[0].language1}`;
  firstPopupContainer.appendChild(language1);

  let language2 = document.createElement('button');
  language2.textContent = `${dataPopup[0].language2}`;
  firstPopupContainer.appendChild(language2);

  let language3 = document.createElement('button');
  language3.textContent = `${dataPopup[0].language3}`;
  firstPopupContainer.appendChild(language3);

  let image = document.createElement('img');
  image.src = `${dataPopup[0].image}`;
  firstPopupContainer.appendChild(image);

  let p = document.createElement('p');
  p.textContent = `${dataPopup[0].textmulti}`;
  firstPopupContainer.appendChild(p);


};

document.addEventListener('click', function (e) {
  if (e.target && e.target.class == 'closePopup') {
    document.getElementById("firstPopupContainer").classList.toggle("show2");
  }
});



