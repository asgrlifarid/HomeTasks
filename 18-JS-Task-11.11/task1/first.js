
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");
  const applyBtn = document.getElementById("applyBtn");

 
  plusBtn.addEventListener("click", function () {
    deyisFontSize(10);
  });

  minusBtn.addEventListener("click", function () {
    deyisFontSize(-10);
  });

  applyBtn.addEventListener("click", function () {
    applyColor();
  });


function deyisFontSize(deyis) {
  const content = document.getElementById("content");
  let normalSize = parseInt(window.getComputedStyle(content).fontSize);
  content.style.fontSize = normalSize + deyis + "px";
}

function applyColor() {
  const color = document.getElementById("colorInput").value;
  document.getElementById("content").style.color = color;
}
