const header = document.querySelector("header");
header.style.backgroundColor = "blue";

const h1 = document.querySelector("h1");
const headerParagraph = document.querySelector("#about-p");
const button = document.querySelector("#submit-button");

// Arrays for Akan names
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosau", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();

  // retrieve values from the form
  const year = parseInt(document.querySelector("#year-of-birth").value);
  const month = parseInt(document.querySelector("#month").value);
  const date = parseInt(document.querySelector("#date").value);
  const genderElement = document.querySelector('input[name="gender"]:checked');

  if (!genderElement) {
    headerParagraph.textContent = "Please select your gender.";
    return;
  }

  const gender = genderElement.value;

  // Validate inputs
  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(date) ||
    month < 1 ||
    month > 12 ||
    date < 1 ||
    date > 31
  ) {
    headerParagraph.textContent = "Please enter valid date, month, and year.";
    return;
  }

  // Calculate day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const birthDate = new Date(year, month - 1, date);
  const d = birthDate.getDay();

  // Get the name based on gender and day
  let name;
  if (gender === "male") {
    name = maleNames[d];
  } else {
    name = femaleNames[d];
  }

  // Display the result
  headerParagraph.textContent = `Your Akan name is ${name}`;
});
