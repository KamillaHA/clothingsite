const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#product-cardTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p").textContent = product.price;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);

  document.querySelector("main").appendChild(copy);
}
