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
  document.getElementById('overlay').classList.toggle('overlayOn')
  displayLayoutPopup();
});

function displayLayoutPopup() {
  const firstPopupContainer = document.getElementById("firstPopupContainer");
  firstPopupContainer.replaceChildren();
  let h2 = document.createElement('h2');
  h2.textContent = `${dataPopup[0].title}`;
  let img = document.createElement('img');
  img.src = `${dataPopup[0].close_icon}`;
  img.class = 'closePopup';

  let div = document.createElement('div');
  div.classList.add('containerHeadPopup');
  div.appendChild(h2);

  let divimg = document.createElement('div');
  div.appendChild(divimg);
  divimg.appendChild(img);
  firstPopupContainer.appendChild(div);


  let language1 = document.createElement('button');
  language1.textContent = `${dataPopup[0].language1}`;
  language1.classList.add('butoompopup');
  firstPopupContainer.appendChild(language1);
  

  let language2 = document.createElement('button');
  language2.textContent = `${dataPopup[0].language2}`;
  language2.classList.add('butoompopup');
  firstPopupContainer.appendChild(language2);

  let language3 = document.createElement('button');
  language3.textContent = `${dataPopup[0].language3}`;
  language3.classList.add('butoompopup');
  firstPopupContainer.appendChild(language3);

  let image = document.createElement('img');
  image.src = `${dataPopup[0].image}`;
  firstPopupContainer.appendChild(image);

  let p = document.createElement('p');
  p.textContent = `${dataPopup[0].textmulti}`;
  firstPopupContainer.appendChild(p);

  let btn_seelive = document.createElement('button');
  btn_seelive.textContent = `${dataPopup[0].btn_seelive}`;
  firstPopupContainer.appendChild(btn_seelive);

  let btn_seeSource = document.createElement('button');
  btn_seeSource.textContent = `${dataPopup[0].btn_seeSource}`;
  firstPopupContainer.appendChild(btn_seeSource);

};

document.addEventListener('click', function (e) {
  if (e.target && e.target.class == 'closePopup') {
    document.getElementById("firstPopupContainer").classList.toggle("show2");
    document.getElementById('overlay').classList.toggle('overlayOn')
  }
});
