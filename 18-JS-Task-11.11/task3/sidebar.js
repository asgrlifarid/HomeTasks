const sidebar = document.querySelector(".side-bar");
const closeButton = document.querySelector(".close-btn");
const openButton = document.getElementById("open-btn");

openButton.addEventListener("click",function(){
    sidebar.classList.add("active-side-bar");
    openButton.style.display="none"
})
closeButton.addEventListener("click",function(){
    sidebar.classList.remove("active-side-bar");
    openButton.style.display="block"
})
