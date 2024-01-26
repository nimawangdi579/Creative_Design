document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("Clicked");
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
