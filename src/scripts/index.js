import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import ('../DATA.json').then(({ default: jsonData }) => {
    let dataRestaurant = jsonData['restaurants']
    let dataList = '';
    dataRestaurant.forEach(function(data) {
        dataList += `
      <div class="card">
        <article>
            <img src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <h4 class="city_name">kota.${data['city']}</h4>
            <h5>Rating : ${data['rating']}</h5>
            <h3>${data['name']}</h3>
            <p>${data['description'].slice(0, 150)}...</p>
            </div>
        </article>
    </div>
    `;
    });
    document.querySelector('#data-card').innerHTML = dataList;
});