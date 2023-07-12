"use strict";
const submitButton = document.querySelector(".submit-button");
const continueButton = document.querySelector(".continue-button");
const cardForm = document.querySelector(".card-form");
const submittedForm = document.querySelector(".submitted-form");
const displayValues = [
  ".name-image",
  ".number-image",
  ".month-image",
  ".year-image",
  ".cvc-image",
];
const inputValues = [
  "cardholder-name",
  "card-number",
  "exp-month",
  "exp-year",
  "cvc-number",
];
const errorBlankValues = [
  ".name-error-blank",
  ".cardnumber-error-blank",
  ".exp-month-error-blank",
  ".exp-year-error-blank",
  ".cvc-error-blank",
];
const errorFormatValues = [
  ".cardnumber-error-format",
  ".exp-month-error-format",
  ".exp-year-error-format",
  ".cvc-error-format",
];

const regExp = [
  /^(\d{4}\s\d{4}\s\d{4}\s\d{4})$/,
  /^\d{2}$/,
  /^\d{2}$/,
  /^\d{3}$/,
];

function displayCardValues() {
  document.querySelector("form").addEventListener("input", function (e) {
    let currentIndex = inputValues.indexOf(e.target.id);
    document.querySelector(`${displayValues[currentIndex]}`).textContent =
      document
        .querySelector(`#${inputValues[currentIndex]}`)
        .value.toUpperCase();
  });
}
displayCardValues();

function retryValues() {
  document.querySelector("form").addEventListener("input", function (e) {
    e.target.style.border = "1px solid hsl(270, 3%, 87%)";
    let currentIndex = inputValues.indexOf(e.target.id);
    document
      .querySelector(`${errorBlankValues[currentIndex]}`)
      .classList.add("hidden");
    if (!currentIndex == 0) {
      document
        .querySelector(`${errorFormatValues[currentIndex - 1]}`)
        .classList.add("hidden");
    }
  });
}
retryValues();

function returnToForm() {
  continueButton.addEventListener("click", function () {
    location.reload();
  });
}
returnToForm();

function submitForm() {
  submitButton.addEventListener("click", function (e) {
    let valid = true;
    e.preventDefault();
    inputValues.forEach((input, i) => {
      if (document.querySelector(`#${input}`).validity.valueMissing) {
        document.querySelector(errorBlankValues[i]).classList.remove("hidden");
        document.querySelector(`#${input}`).style.border =
          " 1px solid hsl(0, 100%, 66%)";
        valid = false;
        return valid;
      } else if (
        !document.querySelector(`#${input}`).validity.valueMissing &&
        !i == 0
      ) {
        if (
          (i == 1 || i == 4) &&
          !regExp[i - 1].test(document.querySelector(`#${input}`).value)
        ) {
          document
            .querySelector(errorFormatValues[i - 1])
            .classList.remove("hidden");
          document.querySelector(`#${input}`).style.border =
            " 1px solid hsl(0, 100%, 66%)";
          valid = false;
          return valid;
        } else if (
          (i == 2 &&
            !document.querySelector(`#${inputValues[i + 1]}`).value == "" &&
            !regExp[i - 1].test(document.querySelector(`#${input}`).value)) ||
          (i == 3 &&
            !document.querySelector(`#${inputValues[i - 1]}`).value == "" &&
            !regExp[i - 1].test(document.querySelector(`#${input}`).value))
        ) {
          document
            .querySelector(errorFormatValues[i - 1])
            .classList.remove("hidden");
          document.querySelector(`#${input}`).style.border =
            " 1px solid hsl(0, 100%, 66%)";
          valid = false;
          return valid;
        }
      }
    });
    if (valid) {
      cardForm.style.display = "none";
      submittedForm.style.display = "flex";
    }
  });
}
submitForm();

//0000 0000 0000 0000
