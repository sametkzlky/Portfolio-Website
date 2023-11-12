var imgnum = 1;
var autoChangeInterval;

function startAutoChange() {
  autoChangeInterval = setInterval(function () {
    right();
  }, 2000); // 5000 milisaniye = 5 saniye, değiştirebilirsiniz
}

function stopAutoChange() {
  clearInterval(autoChangeInterval);
}

function right() {
  if (imgnum != 3) {
    imgnum += 1;
    changeImg(imgnum, -1);
  } else {
    imgnum = 1;
    changeImg(imgnum, +2);
  }
}
function left() {
  if (imgnum != 1) {
    imgnum -= 1;
    changeImg(imgnum, +1);
  } else {
    imgnum = 3;
    changeImg(imgnum, -2);
  }
}
function changeImg(value, count) {
  document.getElementById(`img${value + count}`).style.opacity = "0";
  document.getElementById(`img${value}`).style.opacity = "1";
  document.getElementById(
    `circle${value + count}`
  ).style.background = `transparent`;
  document.getElementById(`circle${value}`).style.background = `white`;
}

window.onload = startAutoChange;
