
// Function to duplicate the existing photos
function duplicatePhotos() {
  const photos = document.querySelectorAll('#photo-grid img');
  photos.forEach(photo => {
    const clone = photo.cloneNode(true); // Clone each photo
    grid.appendChild(clone); // Add the clone to the grid
  });
}

// Infinite scroll functionality
scrollContainer.addEventListener('scroll', () => {
  const nearBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 100;
  const nearRight = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 100;

  if (nearBottom || nearRight) {
    duplicatePhotos(); // Duplicate photos when nearing the bottom or right edge
  }
});


function approach1Fn(className) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      if (box.classList.contains(className)) {
          box.style.display = 'block';
      } else {
          box.style.display = 'none';
      }
  });
}
function showFn() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
      box.style.display = 'block';
  });
}
