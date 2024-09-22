function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getElementTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function setElementTextById(id, text) {
  document.getElementById(id).innerText = text;
}

function setInputEmptyById(id) {
  document.getElementById(id).value = "";
}
