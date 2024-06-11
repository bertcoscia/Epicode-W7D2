const form = document.querySelector("form");
const nameForm = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const title = document.querySelector("h1");

const createName = (name) => {
  title.innerHTML = `Hello ${name} &#128516;`;
  localStorage.setItem("nameInStorage", name);
};

form.onsubmit = function (event) {
  event.preventDefault();
  createName(nameForm.value);
  form.reset();
};

window.addEventListener("DOMContentLoaded", () => {
  const nameInStorage = localStorage.getItem("nameInStorage");

  if (nameInStorage) {
    createName(nameInStorage);
  } else {
    title.innerHTML = "Write your name &#128516;";
  }
});
