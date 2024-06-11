const form = document.querySelector("form");
const nameForm = document.getElementById("name");
const deleteBtn = document.getElementById("deleteBtn");
const title = document.querySelector("h1");

const createName = (name) => {
  title.innerHTML = `Hello ${name} &#128516;`;
  localStorage.setItem("nameInStorage", name);
};

const welcomeBack = (name) => {
  title.innerHTML = `Welcome back ${name} &#128516;`;
};

form.onsubmit = function (event) {
  event.preventDefault();
  createName(nameForm.value);
  form.reset();
};

const clearStorage = () => {
  localStorage.clear();
  title.innerHTML = "Write your name &#128516;";
};

window.addEventListener("DOMContentLoaded", () => {
  const nameInStorage = localStorage.getItem("nameInStorage");

  if (nameInStorage) {
    welcomeBack(nameInStorage);
  } else {
    title.innerHTML = "Write your name &#128516;";
  }
});

deleteBtn.addEventListener("click", clearStorage);
