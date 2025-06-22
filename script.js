const text = "Hello there, I am DataScientist, DataEngineer, DataAnalyst and what not!";
let idx = 0;

function typeEffect() {
  const target = document.getElementById("typing-text");

  if (idx < text.length) {
    target.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      target.innerHTML = "";
      idx = 0;
      typeEffect(); // restart typing
    }, 2000); // pause before looping again
  }
}

window.onload = () => {
  typeEffect();

  const buttons = document.querySelectorAll('.read-more-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.previousElementSibling;
      const card = button.closest('.card');

      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        card.classList.add('expanded');
        button.textContent = 'Show Less';
      } else {
        details.classList.add('hidden');
        card.classList.remove('expanded');
        button.textContent = 'Read More';
      }
    });
  });
};
