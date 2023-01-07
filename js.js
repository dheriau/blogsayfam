let flyToggleButton = document.getElementById("flyToggleButton");
let flyMenu = document.getElementById("flyMenu");

flyToggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  flyMenu.classList.toggle("open");
});

