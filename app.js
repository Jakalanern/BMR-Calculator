const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let form = $(".form");
let allInputs = $$(".input");
let genderInput = $(".gender-select");
let ageInput = $(".age");
let heightInput = $(".height");
let weightInput = $(".weight");
let bmrDisplay = $(".bmr");

form.addEventListener("submit", function (e) {
  // PREVENT PAGE RELOAD
  e.preventDefault();
  // ASSIGN INPUT VALUES TO VARIABLES
  let gender = genderInput.value;
  let age = ageInput.value;
  let height = heightInput.value;
  let weight = weightInput.value;
  // MAKE SURE AGE IS NOT A STRING
  age = parseFloat(age);
  // IF EVERYTHING IS FILLED WE CAN SUBMIT
  if (age !== "" && height !== "" && weight !== "") {
    // WE RUN THE RETURN BMR FUNCTION WHICH TAKES THE VARIABLES AND RETURNS BMR DEPENDING ON GENDER
    calculateBMR(gender, age, height, weight);
    // NOW WE CLEAR INPUTS SO USER CAN INPUT AGAIN WITHOUT NEEDING TO CLEAR EACH INPUT THEMSELVES
    allInputs.forEach(function (input) {
      input.value = "";
    });
  } else {
    // IF EVERYTHING IS NOT FILLED WE SEND AN ALERT
    alert("Please fill all fields");
  }
});

function calculateBMR(gender, age, height, weight) {
  // Convert inches to centimeters
  height = height * 2.54;
  // Convert pounds to kilograms
  weight = weight / 2.2;

  if (gender === "M") {
    // MALE EQUATION
    let bmr = age + 13.7 * weight + 5 * height - 6.8 * age;
    // FLOOR THE BMR TO PREVENT REPEATING NUMBERS
    bmr = Math.floor(bmr, 100);
    bmr = String(bmr);
    // SET THE BMR DISPLAY = BMR'S RETURN VALUE
    if (bmr.length >= 4) {
      bmr = bmr.substring(0, 1) + "," + bmr.substring(1, bmr.length);
      console.log(bmr);
      bmrDisplay.innerHTML = bmr;
    } else {
      bmrDisplay.innerHTML = bmr;
    }
  } else if (gender === "F") {
    // FEMALE EQUATION
    let bmr = age + 9.6 * weight + 1.8 * height - 4.7 * age;
    // FLOOR THE BMR TO PREVENT REPEATING NUMBERS
    bmr = Math.floor(bmr, 100);
    bmr = String(bmr);
    // SET THE BMR DISPLAY = BMR'S RETURN VALUE
    if (bmr.length >= 4) {
      bmr = bmr.substring(0, 1) + "," + bmr.substring(1, bmr.length);
      console.log(bmr);
      bmrDisplay.innerHTML = bmr;
    } else {
      bmrDisplay.innerHTML = bmr;
    }
  } else {
    ("ERR - SOMETHING WENT WRONG!");
  }
}

// WHAT WE NEED
// AGE
// HEIGHT IN INCHES || * 2.54 (WHICH GIVES CM)
// WEIGHT in LBS || / 2.2 (WHICH GIVES KGs)

// MEN
// AGE + (13.7 * WEIGHT in KG) + (5 * HEIGHT in CM) - (6.8 * AGE)
// WOMEN
// AGE + (9.6 * WEIGHT in KG) + (1.8 * HEIGHT in CM) - (4.7 * AGE)
