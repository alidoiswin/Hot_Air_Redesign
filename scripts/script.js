/*time selection button*/

const timeSelection = document.querySelectorAll(".time-btn");

for (let i = 0; i < timeSelection.length; i++) {
  timeSelection[i].addEventListener("click", function () {
    // remove selected from all buttons first
    for (let r = 0; r < timeSelection.length; r++) {
      timeSelection[r].classList.remove("selected");
    }
    // add to clicked one
    timeSelection[i].classList.add("selected");
  });
}

const addButtons = document.querySelectorAll(".add-btn");
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", () => {
    addButtons[i].classList.toggle("selected");
    if (addButtons[i].classList.contains("selected")) {
      addButtons[i].textContent = "ADDED";
    } else {
      addButtons[i].textContent = "ADD";
    }
  });
}

function saveBooking() {
  const date = document.querySelector(".date-picker").value;
  const passengers = document.querySelector(".passenger-dropdown").value;
  const selectedTime = document.querySelector(".time-btn.selected");
  const selectedAddons = document.querySelectorAll(".add-btn.selected");

  if (!date) {
    alert("Please select a date.");
    return;
  }

  if (!passengers) {
    alert("Please select number of passengers.");
    return;
  }

  if (!selectedTime) {
    alert("Please select a time.");
    return;
  }

  if (selectedAddons.length < 2) {
    alert("Please select at least 2 add-ons.");
    return;
  }

  let addons = [];
  selectedAddons.forEach(button => {
    const name = button.previousElementSibling.querySelector("h3").textContent;
    addons.push(name);
  });

  const time = selectedTime.textContent;

  localStorage.setItem("bookingDate", date);
  localStorage.setItem("bookingPassengers", passengers);
  localStorage.setItem("bookingTime", time);
  localStorage.setItem("bookingAddons", addons.join(", "));

  window.location.href = "summary.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("summary-date").textContent =
    localStorage.getItem("bookingDate") || "Not selected";
  document.getElementById("summary-passengers").textContent =
    localStorage.getItem("bookingPassengers") || "Not selected";
  document.getElementById("summary-time").textContent =
    localStorage.getItem("bookingTime") || "Not selected";
  document.getElementById("summary-addons").textContent =
    localStorage.getItem("bookingAddons") || "None selected";
    const passengers = parseInt(localStorage.getItem("bookingPassengers"));

let total = passengers * 280;
const addons =
  localStorage.getItem("bookingAddons");
  if (addons.includes("Charcuterie")) {
    total += 20 * passengers;
  }
  if (addons.includes("Photo Set")) {
    total += 10 * passengers;
  }
  if (addons.includes("Extensive")) {
    total += 15 * passengers;
  }
document.getElementById("summary-total").textContent =
  "$" + total;

});


/*confirm payment*/

function confirmed(event) {

  if (event) event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const expiry = document.getElementById("expiry").value;
  const cvc = document.getElementById("cvc").value;

  if (fullName === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  if (cardNumber.length !== 16) {
    alert("Card number must be 16 digits.");
    return;
  }

  if (expiry === "") {
    alert("Please enter an expiry date.");
    return;
  }

  if (cvc.length !== 3) {
    alert("CVC must be 3 digits.");
    return;
  }

  document.body.innerHTML = `
    <img src="../assets/Confirmed2.png"
         style="width:100%; object-fit:cover;">
  `;
}
