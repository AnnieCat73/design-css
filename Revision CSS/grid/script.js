const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-nav");

openBtn.addEventListener("click", () => {
  navMenu.classList.add("open-nav")
})

closeBtn.addEventListener("click", e => {
  navMenu.classList.remove("open-nav")
})