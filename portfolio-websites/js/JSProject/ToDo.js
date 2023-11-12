const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const deleteall = document.getElementById("delete-all");
const element = document.getElementById("cont");
let position = 0;

function animate() {
  position += 1;
  element.style.left = position + "px";

  if (position < 200) {
    setTimeout(animate, 10);
  }
}

animate();

function addtask() {
  if (inputbox.value === "") {
    alert("You must write somethink!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
