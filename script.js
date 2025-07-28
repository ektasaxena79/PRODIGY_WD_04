const words = ["Web Developer", "Creative Designer", "Learner"];
let wordIndex = 0;
let charIndex = 0;
let typeText = true;

function typeWriterEffect() {
  const textElement = document.querySelector(".typewriter");
  const currentWord = words[wordIndex];

  if (typeText) {
    charIndex++;
    if (charIndex === currentWord.length) typeText = false;
  } else {
    charIndex--;
    if (charIndex === 0) {
      typeText = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  textElement.textContent = currentWord.substring(0, charIndex);
  setTimeout(typeWriterEffect, 150);
}

document.addEventListener("DOMContentLoaded", typeWriterEffect);