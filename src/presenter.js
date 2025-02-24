import convertir from "./conversor";

const number = document.querySelector("#num");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numerito = Number.parseInt(number.value);
  div.innerHTML = "<p>" + convertir(numerito) + "</p>";
});
