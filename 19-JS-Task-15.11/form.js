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
