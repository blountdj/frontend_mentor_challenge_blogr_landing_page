/////////////////// menu items //

const menuItemElms = document.querySelectorAll(
  ".header__nav__menu__details__wrapper"
);
const navMenuElm = document.querySelector(".header__nav__menu");

function menuItemClick() {
  this.classList.toggle("active");
}

menuItemElms.forEach((item) => {
  item.addEventListener("click", menuItemClick);
});

/////////////////// menu icon //
const menuIcon = document.querySelector(".header__nav__icon");
menuIcon.addEventListener("click", menuIconClick);

function animate() {
  // Remove starting no animation class
  const t = document.querySelectorAll(".header__nav__icon__line");
  t.forEach((el) => {
    el.classList.remove("noAnimation");
  });

  // toggle animation class
  menuIcon.classList.toggle("transform-active");
}

function menuIconClick() {
  animate();
  navMenuElm.classList.toggle("hidden");
}
