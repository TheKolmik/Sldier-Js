var left = 0;
var slide = document.getElementById('move');

function sliderLeft() {
  left = left - 960;
  if (left < 0) {
    left = 0;
  }
  slide.style.left = left + 'px';
}

function sliderRight() {
  left = left + 960;
  if (left > 4800) {
    left = 4800;
  }
  slide.style.left = left + 'px';
}
