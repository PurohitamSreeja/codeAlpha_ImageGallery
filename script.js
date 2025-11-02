// FILTER BUTTONS
const buttons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.image-container');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    images.forEach(image => {
      if (category === 'all' || image.classList.contains(category)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

// FULLSCREEN POPUP
const fullScreenDiv = document.getElementById('fullscreen');
const fullImg = document.getElementById('fullImg');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    fullScreenDiv.style.display = 'flex';
    fullImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  fullScreenDiv.style.display = 'none';
});
