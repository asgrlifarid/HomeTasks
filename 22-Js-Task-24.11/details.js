import { BASE_URL } from "./data.js";


window.addEventListener("DOMContentLoaded", function () {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");


  if (id) {
    getProductDetails(id);
  } else {
    console.error("No product ID found in URL");
  }
});


function getProductDetails(id) {
  fetch(`${BASE_URL}/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayProductDetails(data);
    })
    .catch((err) => {
      console.error("Error fetching product details:", err);
    });
}

function displayProductDetails(product) {
  
  const card = document.querySelector(".card");
  const img = card.querySelector(".card-img-top");
  const title = card.querySelector(".card-title");
  const description = card.querySelector(".card-text");
  const category = card.querySelector(".card-category");
  const price = card.querySelector(".card-price");
  const rating = card.querySelector(".card-rating");

  img.src = product.image;
  img.alt = product.title;
  title.textContent = product.title;
  description.textContent = product.description;
  category.innerHTML = `<strong>Category:</strong> ${product.category}`;
  price.innerHTML = `<strong>Price:</strong> $${product.price}`;
  rating.innerHTML = `<strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)`;

  document.querySelector(".spinner").style.display = "none";
}


