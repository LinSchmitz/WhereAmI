'use strict';
const container = document.querySelector('.container');
const authCode = '159981671508983e15899014x66566';

const renderLocation = function (data) {
  const message = `You are in ${data.city}, ${data.country}`;

  const html = ` 
        <article class="country">
          <div class="country__data">
            <h4 class="country__region">${message}</h4>  
          </div>
        </article>`;

  container.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${authCode}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log('FULL DATA:', data);
      const message = `You are in ${data.city}, ${data.country}`;
      renderLocation(data);
      console.log(message);
    });
};

whereAmI(52.50201, 13.4057);
