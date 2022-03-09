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