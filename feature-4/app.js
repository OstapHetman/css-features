document.querySelector(".envelope").addEventListener("click", () => {
  const envelope = document.querySelector(".envelope__top");
  const paper = document.querySelector(".paper");
  const envelopeClass = "envelope__top_close";
  const paperClass = "paper_close";

  envelope.classList.toggle(envelopeClass);
  paper.classList.toggle(paperClass);
});
