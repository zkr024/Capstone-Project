// Mobile menu set up //

// locate the open menu and the class action to work in the open/close states //
const mobile = document.querySelector('.mobileMenu');
const icons = document.querySelectorAll('.action');

// Function to assign the class that will display the menu //
function assignment() {
  mobile.classList.toggle('hiThere');
}

// For each to enable/disable the 'hiThere' class //
icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    assignment();
  });
});

// Locate the list inside de mobile menu //
const linksMobile = document.querySelectorAll('.mobileLi');

// forEach arrow function to react when the links are pressed //
linksMobile.forEach((link) => {
  link.addEventListener('click', () => {
    assignment();
  });
});

// array with objects that contains the information to fill the singers and location section //

const singers = [{
  image: ['images/singers/waters.jpg', 'Roger Waters at radionica'],
  name: 'Roger Waters',
  role: 'singer, bassist, and composer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/robert.jpg', 'Robert plan, the sun image'],
  name: 'Robert Plants',
  role: 'Songwriter and lead singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/ozzy.jpg', 'Ozzy Osbourne, source The rolling Stones'],
  name: 'Ozzy Osbourne',
  role: 'Songwriter and lead singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/brian.jpg', 'Brian Johnson, source rock magazine'],
  name: 'Brian Johnson',
  role: 'Songwriter and lead singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/mick.jpg', 'Mick Jagger, Aspen Magazine'],
  name: 'Mick Jagger',
  role: 'Songwriter and lead singer',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
},
{
  image: ['images/singers/map.jpg', 'Makuhari Messe, Chiba\'s Massive Convention Centre'],
  name: 'Makuhari Messe',
  role: 'Location',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere, eaque quod laboriosam nemo accusantium debitis quos obcaecati',
}];

// locate where to place the tags in the HTML //
const section = document.querySelector('.information');

const musicCont = document.createElement('div');
musicCont.classList.add('musicCont');
section.appendChild(musicCont);

// function to set up - cards information //
function band(artist) {
  const divCard = document.createElement('div');
  divCard.classList.add('divCard');
  musicCont.appendChild(divCard);
  // div that holds the image and img tag creation //
  const divImg = document.createElement('div');
  divImg.classList.add('divImg');
  divCard.appendChild(divImg);
  const contImg = document.createElement('div');
  contImg.classList.add('contImg');
  divImg.appendChild(contImg);
  const img = document.createElement('img');
  img.setAttribute('src', artist.image[0]);
  img.setAttribute('alt', artist.image[1]);
  contImg.appendChild(img);
  // div that holds the details //
  const divInfo = document.createElement('div');
  divInfo.classList.add('divInfo');
  divCard.appendChild(divInfo);
  const infoTitle = document.createElement('h3');
  infoTitle.textContent = artist.name;
  divInfo.appendChild(infoTitle);
  const infoRole = document.createElement('h4');
  infoRole.textContent = artist.role;
  divInfo.appendChild(infoRole);
  const separate = document.createElement('div');
  separate.classList.add('separate');
  divInfo.appendChild(separate);
  const infoP = document.createElement('p');
  infoP.textContent = artist.info;
  divInfo.appendChild(infoP);
}

// ForEach loop to apply the function band in the array singers elements //
singers.forEach((value) => {
  band(value);
});

// Array that holds the company images //

const company = [{
  name: ['images/png/firefox.png', 'Firefox logo, pngwing source'],
},
{
  name: ['images/png/google.png', 'Google logo, pngwing source'],
},
{
  name: ['images/png/naver.png', 'Naver logo, pngwing source'],
},
{
  name: ['images/png/daun.png', 'Daun logo, pngwing source'],
},
{
  name: ['images/png/airbnb.png', 'Airbnb logo, pngwing source'],
}];

const sponsor = document.querySelector('footer');

// div to hold all the images //
const sponsorCont = document.createElement('div');
sponsorCont.classList.add('sponsorCont');
sponsor.appendChild(sponsorCont);

function footer(brand) {
  // Div to contain each image //
  const sponsorDiv = document.createElement('div');
  sponsorDiv.classList.add('sponsorDiv');
  sponsorCont.appendChild(sponsorDiv);
  // Image src and atl attribute //
  const sponsorImg = document.createElement('img');
  sponsorImg.classList.add('sponsorImg');
  sponsorImg.setAttribute('src', brand.name[0]);
  sponsorImg.setAttribute('alt', brand.name[1]);
  sponsorDiv.appendChild(sponsorImg);
}

company.forEach((value) => {
  footer(value);
});

// Last footer part //
const last = document.createElement('div');
last.classList.add('last');
sponsor.appendChild(last);

const logContainer = document.createElement('div');
logContainer.classList.add('logContainer');
last.appendChild(logContainer);

const aLogo = document.createElement('a');
aLogo.classList.add('aLogo');
aLogo.setAttribute('href', '#');
logContainer.appendChild(aLogo);

const lastLogo = document.createElement('img');
lastLogo.setAttribute('src', 'images/png/logo.png');
lastLogo.setAttribute('alt', 'Rock logo icon');
aLogo.appendChild(lastLogo);

const infoDiv = document.createElement('div');
infoDiv.classList.add('infoDiv');
last.appendChild(infoDiv);

const infoDivH = document.createElement('h3');
infoDivH.textContent = '2022 Moon\'s fall Rock Festival';
infoDiv.appendChild(infoDivH);

const infoDivP = document.createElement('p');
infoDivP.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit facere.';
infoDiv.appendChild(infoDivP);
