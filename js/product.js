const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product1 h3").textContent =
    product.productdisplayname;
  document.querySelector(".product1 .brand").textContent = product.brandname;
  document.querySelector(".product1 .category").textContent =
    product.articletype;
  document.querySelector(".product1 .price").textContent = product.price;
  document.querySelector(".product1 .discount").textContent = product.discount;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
