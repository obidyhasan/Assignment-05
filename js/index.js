const donationTab = document.getElementById("donationTab");
const historyTab = document.getElementById("historyTab");
const donationContainer = document.getElementById("donationContainer");
const historyContainer = document.getElementById("historyContainer");

// Tab switching
document
  .getElementById("donationTab")
  .addEventListener("click", function (event) {
    donationContainer.classList.remove("hidden");
    historyContainer.classList.add("hidden");
    event.target.className = "btn px-7 bg-primary text-black";
    historyTab.className =
      "btn px-7 border-gray-500 text-gray-500 hover:border-none hover:text-black bg-transparent";
  });

document
  .getElementById("historyTab")
  .addEventListener("click", function (event) {
    historyContainer.classList.remove("hidden");
    donationContainer.classList.add("hidden");
    event.target.className = "btn px-7 bg-primary text-black";
    donationTab.className =
      "btn px-7 border-gray-500 text-gray-500 hover:border-none hover:text-black bg-transparent";
  });

// Noakhali Donate Button
document
  .getElementById("noakhaliDonate")
  .addEventListener("click", function (event) {
    const value = getInputValueById("noakhaliInput");
    // validation
    if (isNaN(value) || value <= 0) {
      alert("Invalid Donation Amount");
      return;
    }
    // donate amount
    let amount = getElementTextById("noakhaliAmount");
    amount += value;
    setElementTextById("noakhaliAmount", amount);
    // total amount
    let totalAmount = getElementTextById("totalAmount");
    totalAmount -= value;
    setElementTextById("totalAmount", totalAmount);
    // show dialog
    donatedDialog.showModal();
    // set input empty
    setInputEmptyById("noakhaliInput");

    // get time
    const date = new Date();
    const formatDate = date.toString();

    // update History
    const div = document.createElement("div");
    div.className = "py-6 px-5 border rounded-md";
    div.innerHTML = `<h1 class="font-bold text-lg">
            <span>${value}</span> Taka is Donated for Donate for Flood at Noakhali, Bangladesh
          </h1>
          <p class="font-light text-sm mt-3">
            Date : <span>${formatDate}</span>
          </p>`;
    historyContainer.appendChild(div);
  });
