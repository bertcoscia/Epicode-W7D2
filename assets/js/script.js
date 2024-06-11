const form = document.querySelector("form");
const nameForm = document.getElementById("name");
const deleteBtn = document.getElementById("deleteBtn");
const stopwatchContainer = document.getElementById("footerContainer");
let seconds = 0;
const secondsOnScreen = document.createElement("h3");
let title = document.createElement("h1");
title.classList.add("text-center");

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

const stopwatch = () => {
  sessionStorage.setItem("stopwatch", seconds);
  secondsOnScreen.innerText = seconds;
  stopwatchContainer.classList.remove("d-none");
  stopwatchContainer.appendChild(secondsOnScreen);
  seconds++;
};

window.addEventListener("DOMContentLoaded", () => {
  const nameInStorage = localStorage.getItem("nameInStorage");
  const secondsInStorage = sessionStorage.getItem("stopwatch");

  if (nameInStorage) {
    welcomeBack(nameInStorage);
  } else {
    title.innerHTML = "Write your name &#128516;";
  }
  form.prepend(title);

  if (secondsInStorage) {
    seconds = secondsInStorage;
  }
  setInterval(stopwatch, 1000);
});

deleteBtn.addEventListener("click", clearStorage);
