const startbtn = document.querySelector("#startbtn"),
  endbtn = document.querySelector("#endbtn"),
  prevnext = document.querySelectorAll(".prevnext"),
  numbers = document.querySelectorAll(".link");

let currentstep = 0;

const updatebtn = () => {
  if (currentstep === 4) {
    endbtn.disabled = true;
    prevnext[1].disabled = true;
  } else if (currentstep === 0) {
    startbtn.disabled = true;
    prevnext[0].disabled = true;
  } else {
    endbtn.disabled = false;
    prevnext[1].disabled = false;
    startbtn.disabled = false;
    prevnext[0].disabled = false;
  }
};

numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    currentstep = numIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    updatebtn();
  });
});

prevnext.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentstep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
      number.classList.toggle("active", numIndex === currentstep);
      updatebtn();
    });
  });
});

startbtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[0].classList.add("active");
  currentstep = 0;
  updatebtn();
  endbtn.disabled = false;
  prevnext[1].disabled = false;
});

endbtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[4].classList.add("active");
  currentstep = 4;
  updatebtn();
  startbtn.disabled = false;
  prevnext[0].disabled = false;
});
