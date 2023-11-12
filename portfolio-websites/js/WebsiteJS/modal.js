var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  modal.style.display = "flex";
  setTimeout(() => {
    modalform.style.left = "50%";
  }, 400);
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalBtnTwo");
var closeModalBtn = document.getElementById("closeModalBtnTwo");
var modalTwo = document.getElementById("modalTwo");

openModalBtn.addEventListener("click", function () {
  modalTwo.style.display = "block";
  modalTwo.style.display = "flex";
  setTimeout(() => {
    modalform.style.left = "50%";
  }, 400);
});

closeModalBtn.addEventListener("click", function () {
  modalTwo.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
});

var openModalBtn = document.getElementById("openModalBtnThree");
var closeModalBtn = document.getElementById("closeModalBtnThree");
var modalThree = document.getElementById("modalThree");

openModalBtn.addEventListener("click", function () {
  modalThree.style.display = "block";
  modalThree.style.display = "flex";
  setTimeout(() => {
    modalform.style.left = "50%";
  }, 400);
});

closeModalBtn.addEventListener("click", function () {
  modalThree.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
});
