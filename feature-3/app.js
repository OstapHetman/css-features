const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const card = document.querySelector(".container");
    if (card.classList.contains("container-origin")) {
      card.classList.remove("container-origin");
    } else {
      card.classList.add("container-origin");
    }
  });
});
