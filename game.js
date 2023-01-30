const urlParams = new URLSearchParams(window.location.search);
const save_id = urlParams.get("id");

element = document.querySelector("body");

fetch('saves.json')
  .then(response => response.json())
  .then(data => {
    element.innerHTML = "Trésorerie : " + data[save_id].cash
  })
  .catch(error => {
    console.error(error);
  });