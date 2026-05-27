/*time selection button*/

const timeSelection = document.querySelectorAll(".time-btn");
for (let i=0; i<timeSelection.length; i++){
  timeSelection[i].addEventListener("click", function(){
    timeSelection[i].classList.add("selected");
   })
for (let r=0; r<timeSelection.length;r++){
  timeSelection[i].classList.remove("selected");
}
};

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
  const time = selectedTime ? selectedTime.textContent : "No time selected";
  const selectedAddons = document.querySelectorAll(".add-btn.selected");

  let addons = [];
  selectedAddons.forEach(button => {
    const name = button.previousElementSibling.querySelector("h3").textContent;
    addons.push(name);
  });

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
    const passengers =
  parseInt(localStorage.getItem("bookingPassengers"));

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