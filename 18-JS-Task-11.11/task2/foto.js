let div1 = document.createElement("div");
document.body.append(div1);
div1.classList.add("card", "mb-3", "container-xl", "div1");

let img = document.createElement("img");
div1.append(img);
img.classList.add("card-img-top", "object-fit-cover");
img.setAttribute(
  "src",
  "https://www.evanshalshaw.com/-/media/evanshalshaw/blog/whats-it-like-to-drive-a-ford-mustang/2021-update/ford-mustang-carousel-1920x774px.ashx"
);

let rowContain = document.createElement("div");
document.body.append(rowContain);
rowContain.classList.add("cotainer-xl", "mb-3");

let row = document.createElement("div");
rowContain.append(row);
row.classList.add(
  "d-flex",
  "gap-2",
  "row-cols-1",
  "row-cols-md-3",
  "g-4",
  "container-xl"
);

let col = document.createElement("div");
row.append(col);
col.classList.add("col");

let card = document.createElement("div");
col.append(card);
card.classList.add("card", "h-100");

let img2 = document.createElement("img");
card.append(img2);
img2.classList.add("card-img-top");
img2.setAttribute(
  "src",
  "https://www.evanshalshaw.com/-/media/evanshalshaw/blog/whats-it-like-to-drive-a-ford-mustang/2021-update/ford-mustang-rear-1280x720px.ashx"
);

let cardBody = document.createElement("div");
card.append(cardBody);
cardBody.classList.add("card-body");

let h5 = document.createElement("h5");
h5.textContent = "Impossible created home";
h5.classList.add("card-title");
cardBody.append(h5);

let p = document.createElement("p");
p.classList.add("card-text");
p.textContent = "ipsum dolar euro takes maas ev ipsum dolar solar sun system";
cardBody.append(p);

let col1 = document.createElement("div");
row.append(col1);
col1.classList.add("col");

let card1 = document.createElement("div");
col1.append(card1);
card1.classList.add("card", "h-100");

let img3 = document.createElement("img");
card1.append(img3);
img3.classList.add("card-img-top");
img3.setAttribute(
  "src",
  "https://www.evanshalshaw.com/-/media/evanshalshaw/blog/whats-it-like-to-drive-a-ford-mustang/2021-update/ford-mustang-front-1280x720px.ashx"
);

let cardBody1 = document.createElement("div");
card1.append(cardBody1);
cardBody1.classList.add("card-body");

let h51 = document.createElement("h5");
h51.textContent = "Impossible created home";
h51.classList.add("card-title");
cardBody1.append(h51);

let p1 = document.createElement("p");
p1.classList.add("card-text");
p1.textContent = "ipsum dolar euro takes maas ev ipsum dolar solar sun system";
cardBody1.append(p1);

let col2 = document.createElement("div");
row.append(col2);
col2.classList.add("col");

let card2 = document.createElement("div");
col2.append(card2);
card2.classList.add("card", "h-100");

let img4 = document.createElement("img");
card2.append(img4);
img4.classList.add("card-img-top");
img4.setAttribute(
  "src",
  "https://www.evanshalshaw.com/-/media/evanshalshaw/ford/car-models/mustang/mach-1/ford-mustang-mach-1-garage-480x270px.ashx?mh=519&la=en&h=270&w=480&mw=519&hash=C56B62F69A0DE0F03A2F4DF1A017A75A"
);

let cardBody2 = document.createElement("div");
card2.append(cardBody2);
cardBody2.classList.add("card-body");

let h2 = document.createElement("h5");
h2.textContent = "Impossible created home";
h2.classList.add("card-title");
cardBody2.append(h2);

let p2 = document.createElement("p");
p2.classList.add("card-text");
p2.textContent = "ipsum dolar euro takes maas ev ipsum dolar solar sun system";
cardBody2.append(p2);
