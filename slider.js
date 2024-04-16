let tanim = 0;
slides();

function slides() {
  let slides = document.getElementsByClassName("slides")[0].children;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  tanim++;
  if (tanim > slides.length) {tanim = 1}
  slides[tanim-1].style.display = "block";
  
}

function prevSlide() {
  tanim -= 2;
  slides();
}

function nextSlide() {
  slides();
}
