const dataPopup = [
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'Multi Post Stories',
    language1: 'Html',
    language2: 'Bootstrap',
    language3: 'Ruby on rails',
    image: '../images/mobilePopup.png',
    textmulti: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
    btnSeelive: 'See Live',
    iconSeelive: '../icons/live.png',
    btnSeeSource: 'See Source',
    iconSeeSource: '../icons/source.png',
  },

];

function displayLayoutPopup() {
  const firstPopupContainer = document.getElementById('firstPopupContainer');
  firstPopupContainer.replaceChildren();
  const h2 = document.createElement('h2');
  h2.textContent = `${dataPopup[0].title}`;
  const img = document.createElement('img');
  img.src = `${dataPopup[0].closeIcon}`;
  img.class = 'closePopup';

  const div = document.createElement('div');
  div.classList.add('containerHeadPopup');
  div.appendChild(h2);

  const divimg = document.createElement('div');
  div.appendChild(divimg);
  divimg.appendChild(img);
  firstPopupContainer.appendChild(div);

  const divlanguages = document.createElement('div');
  divlanguages.classList.add('containerLanguages');

  const language1 = document.createElement('button');
  language1.textContent = `${dataPopup[0].language1}`;
  language1.classList.add('butoompopup');
  divlanguages.appendChild(language1);

  const language2 = document.createElement('button');
  language2.textContent = `${dataPopup[0].language2}`;
  language2.classList.add('butoompopup');
  divlanguages.appendChild(language2);

  const language3 = document.createElement('button');
  language3.textContent = `${dataPopup[0].language3}`;
  language3.classList.add('butoompopup');
  divlanguages.appendChild(language3);

  firstPopupContainer.appendChild(divlanguages)

  const divmainImagen = document.createElement('div');
  divmainImagen.classList.add('containerMainImagen');

  const image = document.createElement('img');
  image.src = `${dataPopup[0].image}`;
  divmainImagen.appendChild(image);

  firstPopupContainer.appendChild(divmainImagen);

  const divbottonPopup = document.createElement('div');
  divbottonPopup.classList.add('containerBottonPopup');
  firstPopupContainer.appendChild(divbottonPopup);

  const p = document.createElement('p');
  p.textContent = `${dataPopup[0].textmulti}`;
  divbottonPopup.appendChild(p);

  const divSee = document.createElement('div');
  divbottonPopup.appendChild(divSee);

  const btnSeelive = document.createElement('button');
  btnSeelive.textContent = `${dataPopup[0].btnSeelive}`;
  divSee.appendChild(btnSeelive);

  const spanLive = document.createElement('span');
  spanLive.classList.add('liveIcon');
  btnSeelive.appendChild(spanLive);

  const imgSpan = document.createElement('img');
  imgSpan.src = `${dataPopup[0].iconSeelive}`;
  spanLive.appendChild(imgSpan);

  const btnSeeSource = document.createElement('button');
  btnSeeSource.textContent = `${dataPopup[0].btnSeeSource}`;
  divSee.appendChild(btnSeeSource);

  const spanSource = document.createElement('span');
  spanSource.classList.add('sourceIcon');
  btnSeeSource.appendChild(spanSource);

  const imgSource = document.createElement('img');
  imgSource.src = `${dataPopup[0].iconSeeSource}`;
  spanSource.appendChild(imgSource);
}

const firstButtonPopup = document.getElementById('firstButtonPopup');
firstButtonPopup.addEventListener('click', () => {
  document.getElementById('firstPopupContainer').classList.toggle('show2');
  document.getElementById('overlay').classList.toggle('overlayOn');
  displayLayoutPopup();
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.class === 'closePopup') {
    document.getElementById('firstPopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});
