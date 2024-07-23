const dataPopup = [
  {
    closeIcon: './icons/closeIcon.png',
    title: 'Rent Cars',
    language1: 'React',
    language2: 'PostgreSQL',
    language3: 'Ruby on rails',
    image: './ScreenShots/CarRental1.png',
    textmulti: `We divided this project into two repositories: one for backend development with Ruby on Rails and the other for frontend development with React/Redux.
    The app is responsive. Moreover, the frontend application consumes data from the backend app, which provides user authentication and authorization functionalities.`,
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://github.com/lojacho/car_app_backend',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/car_app_backend',
  },
  {
    closeIcon: './icons/closeIcon.png',
    title: 'To Do List',
    language1: 'HTML5',
    language2: 'CSS3',
    language3: 'JavaScript',
    image: './ScreenShots/ToDoList1.png',
    textmulti: 'I created a simple but complete web app to manage a list of to do tasks. I used web pack to bundle the app and local storage to preserve data',
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://dgcuenca.github.io/ToDoList/',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/ToDoList',
  },
  {
    closeIcon: './icons/closeIcon.png',
    title: 'NFT Gallery',
    language1: 'HTML5',
    language2: 'SCSS',
    language3: 'JavaScript',
    image: './ScreenShots/NFT1.png',
    textmulti: 'To style this project I used Sass and Bootstrap, the website use semantic HTML and is focused on providing improved user accessibility.',
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://dgcuenca.github.io/nftGallery/',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/nftGallery',
  },
  {
    closeIcon: './icons/closeIcon.png',
    title: 'The Anime Hub',
    language1: 'SCSS',
    language2: 'React',
    language3: 'Redux',
    image: './ScreenShots/animeHub1.png',
    textmulti: 'I worked with API data in order to build a mobile web application to check a list of metrics and see the detail of those metrics in a page with a friendly URL generate dynamically.',
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://reactcapstone.onrender.com/',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/capstone-react',
  },
  {
    closeIcon: './icons/closeIcon.png',
    title: 'Vehicles rental (frontend)',
    language1: 'CSS3',
    language2: 'React',
    language3: 'Redux',
    image: './ScreenShots/vehicle1.png',
    textmulti: 'This app consume data from a RAILS API that I developed collaborative in a previous project, I used RTK Querry to fetch the data',
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://github.com/lojacho/vehicles-rental-frontend',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/vehicles-rental-frontend',
  },
  {
    closeIcon: './icons/closeIcon.png',
    title: 'Blog App',
    language1: 'HTML5',
    language2: 'CSS3',
    language3: 'Rails',
    image: './ScreenShots/blog1.png',
    textmulti: 'I concentrate in give real life functionalities to this app, like authentication, authorizations',
    btnSeelive: 'See Live',
    iconSeelive: './icons/live.png',
    urlSeelive: 'https://github.com/lojacho/Blog-app',
    btnSeeSource: 'See Source',
    iconSeeSource: './icons/source.png',
    urlSeeSource: 'https://github.com/lojacho/Blog-app',
  },
];

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
  linkSeelive.target = '_blank';
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
  linkSeeSource.target = '_blank';
  btnSeeSource.appendChild(linkSeeSource);
  divSee.appendChild(btnSeeSource);
  const spanSource = document.createElement('span');
  spanSource.classList.add('sourceIcon');
  linkSeeSource.appendChild(spanSource);
  const imgSource = document.createElement('img');
  imgSource.src = `${dataPopup[index].iconSeeSource}`;
  spanSource.appendChild(imgSource);
}

document.addEventListener('click', (e) => {
  const buttonIdToCardMapping = {
    welcomeButtonPopup: 0,
    secondButtonPopup: 1,
    thirdButtonPopup: 2,
    fourthButtonPopup: 3,
    fifthButtonPopup: 4,
    sixthButtonPopup: 5,
  };

  const targetId = e.target.id;
  const card = buttonIdToCardMapping[targetId];
  if (card !== null && card !== undefined) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
    displayLayoutPopup(card);
  }
});

document.addEventListener('click', (e) => {
  if ((e.target && e.target.class === 'closePopup')) {
    document.getElementById('welcomePopupContainer').classList.toggle('show2');
    document.getElementById('overlay').classList.toggle('overlayOn');
  }
});