const form = document.querySelector("form");
const nameForm = document.getElementById("name");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const nameContainer = document.getElementById("nameContainer");

class Names {
  constructor(name) {
    this.name = name;
  }
}

const nameSaved = [];

const createName = (name) => {
  const nameObj = new Names(name);
  const h2Name = document.createElement("h2");
  h2Name.innerText = name;
  nameContainer.innerText = "";
  nameSaved[0] = nameObj;
  console.log(nameSaved);
  return h2Name;
};

form.onsubmit = function (event) {
  event.preventDefault();
  nameContainer.appendChild(createName(nameForm.value));
  form.reset();
};
