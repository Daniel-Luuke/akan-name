const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("#header-p");
const button = document.querySelector("#submit-button");
let CC;
let YY;
let MM;
let DD;
let d;

button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();

  // retreive values from the form
  const CC = document.querySelector("#").value;
