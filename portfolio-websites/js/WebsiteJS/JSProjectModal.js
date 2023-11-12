var openModalBtn = document.getElementById("openModalWeather");
var closeModalBtn = document.getElementById("closeModalWeather");
var modal = document.getElementById("modalWeather");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalToDo");
var closeModalBtn = document.getElementById("closeModalToDo");
var modalToDo = document.getElementById("modalToDo");

openModalBtn.addEventListener("click", function () {
  modalToDo.style.display = "block";
  modalToDo.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalToDo.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalToDo) {
    modalToDo.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalCalc");
var closeModalBtn = document.getElementById("closeModalCalc");
var modalCalc = document.getElementById("modalCalc");

openModalBtn.addEventListener("click", function () {
  modalCalc.style.display = "block";
  modalCalc.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalCalc.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalCalc) {
    modalCalc.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalChange");
var closeModalBtn = document.getElementById("closeModalChange");
var modalChange = document.getElementById("modalChange");

openModalBtn.addEventListener("click", function () {
  modalChange.style.display = "block";
  modalChange.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalChange.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalChange) {
    modalChange.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalClock");
var closeModalBtn = document.getElementById("closeModalClock");
var modalClock = document.getElementById("modalClock");

openModalBtn.addEventListener("click", function () {
  modalClock.style.display = "block";
  modalClock.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalClock.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalClock) {
    modalClock.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalCredit");
var closeModalBtn = document.getElementById("closeModalcredit");
var modalcredit = document.getElementById("modalcredit");

openModalBtn.addEventListener("click", function () {
  modalcredit.style.display = "block";
  modalcredit.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalcredit.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalcredit) {
    modalcredit.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalNotes");
var closeModalBtn = document.getElementById("closeModalNotes");
var modalNotes = document.getElementById("modalNotes");

openModalBtn.addEventListener("click", function () {
  modalNotes.style.display = "block";
  modalNotes.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalNotes.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalNotes) {
    modalNotes.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalProgress");
var closeModalBtn = document.getElementById("closeModalProgress");
var modalProgress = document.getElementById("modalProgress");

openModalBtn.addEventListener("click", function () {
  modalProgress.style.display = "block";
  modalProgress.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalProgress.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalProgress) {
    modalProgress.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalScroll");
var closeModalBtn = document.getElementById("closeModalScroll");
var modalScroll = document.getElementById("modalScroll");

openModalBtn.addEventListener("click", function () {
  modalScroll.style.display = "block";
  modalScroll.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  modalScroll.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalScroll) {
    modalScroll.style.display = "none";
  }
});

