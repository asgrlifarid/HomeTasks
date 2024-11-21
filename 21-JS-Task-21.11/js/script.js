import { carsData } from './data.js'; 

const carList = document.getElementById('car-list'); 

carsData.forEach(car => {
  const carItem = document.createElement('div');
  carItem.classList.add('car-item', 'mb-3');
  carItem.innerHTML = `
    <div class="card   ">
      <img src="${car.img}" class="card-img-top " alt="${car.name} image ">  <!-- Add the image here -->
      <div class="card-body">
        <h5 class="card-title">${car.name} - ${car.type}</h5>
        <p class="card-text">Yanacaq: ${car.fuel}</p>
        <p class="card-text">Transport: ${car.transmission}</p>
        <p class="card-text">Yolçular: ${car.passengers}</p>    
        <p class="card-text">Qiymət: $${car.price}</p>
        ${car.discount ? `<p class="card-text">Endirim: ${car.discount}</p>` : ''}
      </div>
    </div>
  `;
  carList.appendChild(carItem); 
});
