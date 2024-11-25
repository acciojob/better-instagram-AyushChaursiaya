//your code here
let draggedElement = null;

document.querySelectorAll('.image').forEach(item => {
  // When dragging starts
  item.addEventListener('dragstart', event => {
    draggedElement = event.target;
    event.target.classList.add('selected');
  });

  // When dragging ends
  item.addEventListener('dragend', event => {
    event.target.classList.remove('selected');
    draggedElement = null;
  });

  // Allow dropping
  item.addEventListener('dragover', event => {
    event.preventDefault();
  });

  // When dropped
  item.addEventListener('drop', event => {
    event.preventDefault();
    if (draggedElement && draggedElement !== event.target) {
      // Swap background images
      const tempBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = event.target.style.backgroundImage;
      event.target.style.backgroundImage = tempBackground;
    }
  });
});
