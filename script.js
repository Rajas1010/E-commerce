var sidenav = document.querySelector(".side-navbar");
var navbar = document.querySelector(".navbar");
var productSearch = document.querySelector(".product-search");
sidenav.style.left = "-60%";

function showNavbar() {
  sidenav.style.left = "0";

  navbar.classList.add("hide");
  setTimeout(() => {
    navbar.classList.add("hidden");
  }, 1000);
  productSearch.style.display = "none";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
  navbar.classList.remove("hide");
  setTimeout(() => {
    navbar.classList.add("show");
  }, 1000);
  productSearch.style.display = "flex";
}



const colors = [
  "cyan",
  "maroon",
  "red",
  "yellow",
  "teal",
  "blue",
  "pink",
  "black",
  "gray",
  "violet",
  "green",
  "orange",
  "purple",
  "brown",
  "khaki",
  "magenta",
  "white",
];

const dresses = [
  "Jacket",
  "Crop Top",
  "Pants",
  "Cardigan",
  "Shirt",
  "Sweater",
  "T-shirt",
  "Swimsuit",
  "Blazer",
  "Skirt",
  "Dress",
  "Hoodie",
  "Overalls",
  "Play suit",
  "Romper",
  "Shorts",
  "Blouse",
  "Tunic",
  "Jumpsuit",
  "Coat",
];
const container = document.getElementById("id-products");

function generateProducts() {
  for (let i = 0; i < 99; i++) {
    const color = colors[i % colors.length];
    const dress = dresses[i % dresses.length];
    const productBox = document.createElement("div");
    productBox.className = "product-box";

    const img = document.createElement("img");
    //img.src = `https://source.unsplash.com/random/480x480/?${color} ${dress}`;
     img.src = `https://picsum.photos/300/300?random=${i}&${color},${dress}`;
    //img.src = `https://loremflickr.com/480/480/${color}_${dress}`;

    productBox.appendChild(img);

    const p = document.createElement("p");
    p.textContent = `${color} ${dress}`;
    productBox.appendChild(p);
    container.appendChild(productBox);
  }
}
generateProducts();

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function (event) {
  const enteredValue = event.target.value.toUpperCase();
  const productBoxes = container.querySelectorAll(".product-box");

  productBoxes.forEach((box) => {
    const pName = box.querySelector("p").textContent;
    if (pName.toUpperCase().indexOf(enteredValue) < 0) {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  });
});


