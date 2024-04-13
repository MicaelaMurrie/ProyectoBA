const flecha = document.querySelector(".flecha");

window.addEventListener("scroll", () => {
  if (scrollY >= 500 && scrollY <= 1900) {
    flecha.style.visibility = "visible";
    flecha.style.opacity = "1";
  } else {
    flecha.style.visibility = "hidden";
    flecha.style.opacity = "0";
  }

  flecha.addEventListener("click", () => {
    scrollTo(0, 0);
  });
});
