const button = document.querySelector("#submit-button");
const clearButton = document.querySelector("#clear-button");
const resultParagraph = document.querySelector("#result");

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
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

button.addEventListener("click", (event) => {
  // prevent form from refreshing page
  event.preventDefault();

  // retrieve values from the form
  const year = parseInt(document.querySelector("#year-of-birth").value, 10);
  const month = parseInt(document.querySelector("#month").value, 10);
  const date = parseInt(document.querySelector("#date").value, 10);
  const genderElement = document.querySelector('input[name="gender"]:checked');

  if (!year || !month || !date ||!genderElement) {
    resultParagraph.textContent = "Please fill in all fields.";
    return;
  }

  if (month < 1 || month > 12 || date < 1 || date > 31 ||year < 1900 || year > 2100) {
    resultParagraph.textContent = "Please enter a valid date.";
    return;
  }
  const daysInMonth = new Date(year, month, 0).getDate();

//   ensures the day entered does not exceed the days in the month entered //
  if (date > daysInMonth) {
    resultParagraph.textContent = `Invalid date: Month ${month} in ${year} has only ${daysInMonth} days.`;
    return;
  }

  const birthDate = new Date(year, month - 1, date);

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== date
  ) {
    resultParagraph.textContent = "Please enter a valid date.";
    return;
  }

  // Calculate day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const d = birthDate.getDay();
  const gender = genderElement.value;

  // Get the name based on gender and day
  const name = gender === "male" ? maleNames[d] : femaleNames[d];

  // Display the result
  resultParagraph.textContent = `Your Akan Name ${name}`;
});

clearButton.addEventListener("click", () => {
  // Clear all inputs
  document.querySelector("#date").value = "";
  document.querySelector("#month").value = "";
  document.querySelector("#year-of-birth").value = "";

  // Uncheck radio buttons
  document.querySelectorAll('input[name="gender"]').forEach((radio) => {
    radio.checked = false;
  });

  // Clear the result
  resultParagraph.textContent = "";
});
