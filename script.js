'use strict';
const container = document.querySelector('.container');
const authCode = '159981671508983e15899014x66566';

const renderLocation = function (data) {
  const html = ` 
        <article class="country">
          <div class="country__data">
            <h4 class="country__region">${data.message}</h4>  
          </div>
        </article>`;

  container.insertAdjacentHTML('beforeend', html);
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${authCode}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data.city || !data.country) throw new Error('Invalid location data');

      const location = {
        city: data.city,
        country: data.country,
        message: `You are in ${data.city}, ${data.country}`,
      };

      renderLocation(location);
    })
    .catch(err => {
      container.insertAdjacentHTML(
        'beforeend',
        `❌ Something went wrong: ${err.message}`,
      );
    })
    .finally(() => {
      console.log('Request finished');
    });
};

whereAmI(52.50201, 13.4057);
// whereAmI('a', 13.4057);
