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

    let totalAmount = getElementTextById("totalAmount");
    if (totalAmount < value) {
      alert("You don't have enough balance");
      return;
    }
    // total amount
    totalAmount -= value;
    setElementTextById("totalAmount", totalAmount);

    // donate amount
    let amount = getElementTextById("noakhaliAmount");
    amount += value;
    setElementTextById("noakhaliAmount", amount);

    // show dialog
    donatedDialog.showModal();
    // set input empty
    setInputEmptyById("noakhaliInput");

    // get time
    const date = new Date();
    const formatDate = date.toString();

    // update History
    historyContainer.innerHTML += `<div class="py-6 px-5 border rounded-md">
          <h1 class="font-bold text-lg">
            <span>${value}</span> Taka is Donated for Flood at Noakhali, Bangladesh
          </h1>
          <p class="font-light text-sm mt-3">
            Date : <span>${formatDate}</span>
          </p></div>`;
  });

// Fani Donate Button
document
  .getElementById("feniDonate")
  .addEventListener("click", function (event) {
    const value = getInputValueById("feniInput");
    // validation
    if (isNaN(value) || value <= 0) {
      alert("Invalid Donation Amount");
      return;
    }

    let totalAmount = getElementTextById("totalAmount");
    if (totalAmount < value) {
      alert("You don't have enough balance");
      return;
    }
    // total amount
    totalAmount -= value;
    setElementTextById("totalAmount", totalAmount);

    // donate amount
    let amount = getElementTextById("feniAmount");
    amount += value;
    setElementTextById("feniAmount", amount);

    // show dialog
    donatedDialog.showModal();
    // set input empty
    setInputEmptyById("feniInput");

    // get time
    const date = new Date();
    const formatDate = date.toString();

    // update History
    historyContainer.innerHTML += `<div class="py-6 px-5 border rounded-md">
        <h1 class="font-bold text-lg">
          <span>${value}</span> Taka is Donated for Flood Relief in Feni,Bangladesh
        </h1>
        <p class="font-light text-sm mt-3">
          Date : <span>${formatDate}</span>
        </p></div>`;
  });

// Injured in the Quota Donate Button
document
  .getElementById("quotaDonate")
  .addEventListener("click", function (event) {
    const value = getInputValueById("quotaInput");
    // validation
    if (isNaN(value) || value <= 0) {
      alert("Invalid Donation Amount");
      return;
    }

    let totalAmount = getElementTextById("totalAmount");
    if (totalAmount < value) {
      alert("You don't have enough balance");
      return;
    }
    // total amount
    totalAmount -= value;
    setElementTextById("totalAmount", totalAmount);

    // donate amount
    let amount = getElementTextById("qoutaAmount");
    amount += value;
    setElementTextById("qoutaAmount", amount);

    // show dialog
    donatedDialog.showModal();
    // set input empty
    setInputEmptyById("quotaInput");

    // get time
    const date = new Date();
    const formatDate = date.toString();

    // update History
    historyContainer.innerHTML += `<div class="py-6 px-5 border rounded-md">
        <h1 class="font-bold text-lg">
          <span>${value}</span> Taka is Donated for Aid for Injured in the Quota Movement
        </h1>
        <p class="font-light text-sm mt-3">
          Date : <span>${formatDate}</span>
        </p></div>`;
  });

// Blog button
document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
