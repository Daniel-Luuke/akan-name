const header = document.querySelector("header");

const button = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-button");
const resultParagraph = document.querySelector("#result");

// Arrays for Akan names
const maleNames = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();

  // retrieve values from the form
  const year = parseInt(document.querySelector("#year-of-birth").value);
  const month = parseInt(document.querySelector("#month").value);
  const date = parseInt(document.querySelector("#date").value);
  const genderElement = document.querySelector('input[name="gender"]:checked');

  // Check empty fields
  if (!year || !month || !date){
    resultParagraph.textContent = "Please fill in the fields."
  }
  if (!genderElement) {
    resultParagraph.textContent = "Please select your gender.";
    return;
  }

  const gender = genderElement.value;

  // Validate inputs
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== date
  ) {
    resultParagraph.textContent = "Please enter a valid date.";
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
  resultParagraph.textContent = `Your Akan name is ${name}`;
});

clearButton.addEventListener("click", () => {
  // Clear all inputs
  document.querySelector("#date").value = "";
  document.querySelector("#month").value = "";
  document.querySelector("#year-of-birth").value = "";

  // Uncheck radio buttons
  const radios = document.querySelectorAll('input[name="gender"]');
  radios.forEach((radio) => (radio.checked = false));

  // Clear the result
  resultParagraph.textContent = "";
});
