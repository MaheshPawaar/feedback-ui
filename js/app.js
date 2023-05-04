const ratingElements = document.querySelectorAll('.rating');
const containerEl = document.getElementById('container');
const btnEl = document.getElementById('btn');

let selectedRating = '';

ratingElements.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

btnEl.addEventListener('click', () => {
  if (selectedRating !== '') {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'l use your feedback to improve our customer support.</p>
    `;
  }
});

function removeActive() {
  ratingElements.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
  });
}
