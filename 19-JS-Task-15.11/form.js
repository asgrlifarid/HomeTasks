import { products } from "./data.js";

const submitButton = document.getElementById("submitBtn");
const closeErrorButton = document.getElementById("closeErrorModal");
const closeUgurluButton = document.getElementById("closeUgurluModal");

submitButton.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const image = document.getElementById("image").value;

  if (title === "" || price === "" || description === "" || image === "") {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("ugurlu").style.display = "block";
  }
});

closeErrorButton.addEventListener("click", function () {
  document.getElementById("error").style.display = "none";
});

closeUgurluButton.addEventListener("click", function () {
  document.getElementById("ugurlu").style.display = "none";
});

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
      
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
               <td><img src="${product.image}" width="100"/></td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
        `;

    tBody.appendChild(trElem);
  });
}
searchInput.addEventListener("input", function (event) {
  console.log(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(event.target.value.trim())
  );

  drawTable(filteredProducts);
});
drawTable(products);

const allDeleteBtns = document.querySelectorAll(".delete-btn");
allDeleteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    const idx = products.findIndex((item) => item.id == productId);

    Swal.fire({
      title: "Are you sure to delete product!?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(idx, this);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  });
});

drawTable(products);

function deleteProduct(index, btn) {
  products.splice(index, 1);
  console.log(products);
  btn.closest("tr").remove();
  drawTable(products);
}

const ascBtn = document.querySelector(".asc");
const descBtn = document.querySelector(".desc");
const defaultBtn = document.querySelector(".default");
const sortBtn = document.querySelector(".sort");

const productForm = document.querySelector(".product-form");



// searchInput.addEventListener("input", function (event) {
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(event.target.value.trim())
//   );

//   drawTable(filteredProducts);
// });

// ascBtn.addEventListener("click", function () {
//   const sortedProducts = products.toSorted((a, b) => a.price - b.price);
//   drawTable(sortedProducts);
// });
// descBtn.addEventListener("click", function () {
//   const sortedProducts = products.toSorted((a, b) => b.price - a.price);
//   drawTable(sortedProducts);
// });
// defaultBtn.addEventListener("click", function () {
//   drawTable(products);
// });

// sortBtn.addEventListener("click", function () {
//   let sorted;
//   if (this.textContent === "ASC by Price") {
//     this.textContent = "DESC by Price";
//     sorted = products.toSorted((a, b) => a.price - b.price);
//   } else if (this.textContent === "DESC by Price") {
//     this.textContent = "Default";
//     sorted = products.toSorted((a, b) => b.price - a.price);
//   } else {
//     this.textContent = "ASC by Price";
//     sorted = structuredClone(products);
//   }
//   drawTable(sorted);
// });

// productForm.addEventListener("submit", function (e) {
//   e.preventDefault();
// });
