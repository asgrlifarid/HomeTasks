import { BASE_URL } from "./data.js";


function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = ""; 
      data.forEach((company) => {
        cardContainer.innerHTML += createCard(company);
      });
     
      attachEventListeners();
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}


function createCard(product) {
  return `
   <div class="card" style="width: 18rem; margin-bottom: 20px;">
      <img src="${product.image}" class="card-img-top" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-category"><strong>Category:</strong> ${product.category}</p>
        <p class="card-price"><strong>Price:</strong> $${product.price}</p>
        <p class="card-rating"><strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)</p>
        <button class="delete btn btn-outline-danger mt-3" data-id="${product.id}">Delete</button>
        <button class="edit btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#edit-modal" data-id="${product.id}">Edit</button>
        <a class="btn btn-outline-primary d-flex align-items-center mt-3" href="details.html?id=${product.id}">Details</a>
      </div>
    </div>
  `;
}


function attachEventListeners() {
  const allDelete = document.querySelectorAll(".delete");
//   const allEdit = document.querySelectorAll(".edit");


  allDelete.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("products", id, this); 
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1000,
          });
        }
      });
    });
  });





function deleteData(endpoint, id, button) {
  
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
   
        button.closest(".card").remove();
        // console.log("Item deleted successfully");
      } else {
        console.log("Error deleting item");
      }
    })
    .catch((err) => {
    //   console.error("Error deleting data:", err);
    });
}
}

getAllData("products");


// allEdit.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       document
//         .querySelector(".edit-submit-btn")
//         .setAttribute("data-bs-dismiss", "modal");

//       const cId = this.getAttribute("data-id");
//       editedId = cId;
//     //   const editedCustomer = customers.find((q) => q.id == cId);
//     //   fillEditForm(editedCustomer);
//     });
//   });
