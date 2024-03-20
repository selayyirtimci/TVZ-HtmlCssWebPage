document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const searchForm = document.querySelector(".search-form");

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
  });

  const menuBtn = document.getElementById("menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const cartBtn = document.getElementById("cart-btn");
  const cartContainer = document.querySelector(".cart-items-container");

  cartBtn.addEventListener("click", () => {
    cartContainer.classList.toggle("active");
  });
});
