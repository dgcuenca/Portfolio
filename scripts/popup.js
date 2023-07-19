const dataPopup = [
  {
    closeIcon: './icons/closeIcon.png',
    title: 'Rent Cars',
    language1: 'React',
    language2: 'PostgreSQL',
    language3: 'Ruby on rails',
    image: './ScreenShots/CarRental1.png',
    textmulti: "We divided this project into two repositories: one for backend development with Ruby on Rails and the other for frontend development with React/Redux.\
    The app is responsive. Moreover, the frontend application consumes data from the backend app, which provides user authentication and authorization functionalities.",
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://github.com/gjuliao/car_app_backend',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/gjuliao/car_app_backend',
  },
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'To Do List',
    language1: 'HTML5',
    language2: 'CSS3',
    language3: 'JavaScript',
    image: './ScreenShots/ToDoList1.png',
    textmulti: "I created a simple but complete web app to manage a list of to do tasks. I used web pack to bundle the app and local storage to preserve data",
    btnSeelive: 'See Live',
    iconSeelive: '../icons/live.png',
    urlSeelive: 'https://dgcuenca.github.io/ToDoList/',
    btnSeeSource: 'See Source',
    iconSeeSource: '../icons/source.png',
    urlSeeSource: 'https://github.com/dgcuenca/ToDoList',
  },
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'NFT Gallery',
    language1: 'HTML5',
    language2: 'SCSS',
    language3: 'JavaScript',
    image: './ScreenShots/NFT1.png',
    textmulti: "To style this project I used Sass and Bootstrap, the website use semantic HTML and is focused on providing improved user accessibility.",
    btnSeelive: 'See Live',
    iconSeelive: '../icons/live.png',
    urlSeelive: 'https://dgcuenca.github.io/nftGallery/',
    btnSeeSource: 'See Source',
    iconSeeSource: '../icons/source.png',
    urlSeeSource: 'https://github.com/dgcuenca/nftGallery',
  },
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'The Anime Hub',
    language1: 'SCSS',
    language2: 'React',
    language3: 'Redux',
    image: './ScreenShots/animeHub1.png',
    textmulti: "I worked with API data in order to build a mobile web application to check a list of metrics and see the detail of those metrics in a page with a friendly URL generate dynamically.",
    btnSeelive: 'See Live',
    iconSeelive: '../icons/live.png',
    urlSeelive: 'https://reactcapstone.onrender.com/',
    btnSeeSource: 'See Source',
    iconSeeSource: '../icons/source.png',
    urlSeeSource: 'https://github.com/dgcuenca/capstone-react',
  },
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'Multi Post Storie 5',
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
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'Multi Post Storie 6',
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
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'Multi Post Storie 7',
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
  {
    closeIcon: '../icons/closeIcon.png',
    title: 'Multi Post Storie 8',
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

let card = 0;

function displayLayoutPopup(index) {
  const welcomePopupContainer = document.getElementById('welcomePopupContainer');
  welcomePopupContainer.replaceChildren();
  const h2 = document.createElement('h2');
  h2.textContent = `${dataPopup[index].title}`;
  const img = document.createElement('img');
  img.src = `${dataPopup[index].closeIcon}`;
  img.class = 'closePopup';

  const div = document.createElement('div');
  div.classList.add('containerHeadPopup');
  div.appendChild(h2);

  const divimg = document.createElement('div');
  div.appendChild(divimg);
  divimg.appendChild(img);
  welcomePopupContainer.appendChild(div);

  const divlanguages = document.createElement('div');
  divlanguages.classList.add('containerLanguages');

  const language1 = document.createElement('div');
  language1.textContent = `${dataPopup[index].language1}`;
  language1.classList.add('butoompopup');
  divlanguages.appendChild(language1);

  const language2 = document.createElement('div');
  language2.textContent = `${dataPopup[index].language2}`;
  language2.classList.add('butoompopup');
  divlanguages.appendChild(language2);

  const language3 = document.createElement('div');
  language3.textContent = `${dataPopup[index].language3}`;
  language3.classList.add('butoompopup');
  divlanguages.appendChild(language3);

  welcomePopupContainer.appendChild(divlanguages);

  const desktopPopup = document.createElement('div');
  desktopPopup.classList.add('desktopPopup');
  welcomePopupContainer.appendChild(desktopPopup);

  const divmainImagen = document.createElement('div');
  divmainImagen.classList.add('containerMainImagen');

  const image = document.createElement('img');
  image.src = `${dataPopup[index].image}`;
  divmainImagen.appendChild(image);

  desktopPopup.appendChild(divmainImagen);

  const divbottonPopup = document.createElement('div');
  divbottonPopup.classList.add('containerBottonPopup');
  desktopPopup.appendChild(divbottonPopup);

  const p = document.createElement('p');
  p.textContent = `${dataPopup[index].textmulti}`;
  divbottonPopup.appendChild(p);

  const divSee = document.createElement('div');
  divbottonPopup.appendChild(divSee);

  const btnSeelive = document.createElement('button');
  const linkSeelive = document.createElement('a');
  linkSeelive.textContent = `${dataPopup[index].btnSeelive}`;
  linkSeelive.href = `${dataPopup[index].urlSeelive}`;
  linkSeelive.target = "_blank";
  btnSeelive.appendChild(linkSeelive);
  divSee.appendChild(btnSeelive);
  const spanLive = document.createElement('span');
  spanLive.classList.add('liveIcon');
  linkSeelive.appendChild(spanLive);
  const imgSpan = document.createElement('img');
  imgSpan.src = `${dataPopup[index].iconSeelive}`;
  spanLive.appendChild(imgSpan);

  const btnSeeSource = document.createElement('button');
  const linkSeeSource = document.createElement('a');
  linkSeeSource.textContent = `${dataPopup[index].btnSeeSource}`;
  linkSeeSource.href = `${dataPopup[index].urlSeeSource}`;
  linkSeeSource.target = "_blank";
  btnSeeSource.appendChild(linkSeeSource);
  divSee.appendChild(btnSeeSource);
  const spanSource = document.createElement('span');
  spanSource.classList.add('sourceIcon');
  linkSeeSource.appendChild(spanSource);
  const imgSource = document.createElement('img');
  imgSource.src = `${dataPopup[index].iconSeeSource}`;
  spanSource.appendChild(imgSource);
}

// Need to be improve in future //

document.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'welcomeButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 1;
      displayLayoutPopup(0);
      break;
    case 'secondButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 2;
      displayLayoutPopup(1);
      break;
    case 'thirdButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 3;
      displayLayoutPopup(2);
      break;
    case 'fourthButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 4;
      displayLayoutPopup(3);
      break;
    case 'fifthButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 5;
      displayLayoutPopup(4);
      break;
    case 'sixthButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 6;
      displayLayoutPopup(5);
      break;
    case 'seventhButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 7;
      displayLayoutPopup(6);
      break;
    case 'eighthButtonPopup':
      document.getElementById('welcomePopupContainer').classList.toggle('show2');
      document.getElementById('overlay').classList.toggle('overlayOn');
      card = 8;
      displayLayoutPopup(7);
      break;
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 1) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 2) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 3) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 4) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 5) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 6) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 7) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup') && card === 8) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});