const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayDisp = document.getElementById("DD");
const monthDisp = document.getElementById("MM");
const yearDisp = document.getElementById("YY");

const submit = document.querySelector(".submit");

submit.addEventListener("click", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required";
      validator = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerText =
        "Must be a valid month";
      validator = false;
    } else if (dayInp.value > 31) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerText =
        "Must be a valid day";
      validator = false;
    } else if (yearInp.value == "") {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("small").innerText =
        "This field is required";
      validator = false;
    } else {
      i.style.borderColor = "#8b8b8b";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayDisp.innerHTML = d;
    monthDisp.innerHTML = m;
    yearDisp.innerHTML = y;
  }

}
