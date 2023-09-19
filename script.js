const burgerBtn = document.querySelector(".burger__btn");
const headerNav = document.querySelector(".header__nav");
burgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  burgerBtn.classList.toggle("open");
});
