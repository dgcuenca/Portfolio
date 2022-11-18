const dataPopup = [
  {
    close_icon: '../icons/closeIcon.png',
    title: 'Multi Post Stories',
    language1: 'Html',
    language2: 'Bootstrap',
    language3: 'Ruby on rails',
    image: '../images/mobilePopup.png',
    textmulti: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    btnSeelive: 'See Live',
    btnSeeSource: 'See Source',
  },

];

function displayLayoutPopup() {
  const firstPopupContainer = document.getElementById('firstPopupContainer');
  firstPopupContainer.replaceChildren();
  const h2 = document.createElement('h2');
  h2.textContent = `${dataPopup[0].title}`;
  const img = document.createElement('img');
  img.src = `${dataPopup[0].close_icon}`;
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

  const image = document.createElement('img');
  image.src = `${dataPopup[0].image}`;
  firstPopupContainer.appendChild(image);

  const p = document.createElement('p');
  p.textContent = `${dataPopup[0].textmulti}`;
  firstPopupContainer.appendChild(p);

  const btnSeelive = document.createElement('button');
  btnSeelive.textContent = `${dataPopup[0].btnSeelive}`;
  firstPopupContainer.appendChild(btnSeelive);

  const btnSeeSource = document.createElement('button');
  btnSeeSource.textContent = `${dataPopup[0].btnSeeSource}`;
  firstPopupContainer.appendChild(btnSeeSource);
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
