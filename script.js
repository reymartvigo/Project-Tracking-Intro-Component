let open = document.getElementById("open-btn");
let close = document.getElementById("close-btn");
let mobilenav = document.querySelector(".mobile-links");

open.addEventListener("click", (e) => {
  e.preventDefault();

  close.style.display = "flex";
  open.style.display = "none";
  mobilenav.style.display = "flex";
});

close.addEventListener("click", (e) => {
  e.preventDefault();

  close.style.display = "none";
  open.style.display = "flex";
  mobilenav.style.display = "none";
});
