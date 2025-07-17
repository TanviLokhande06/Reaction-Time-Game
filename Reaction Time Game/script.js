// Get DOM elements
const box = document.getElementById("box");
const message = document.getElementById("message");
const reactionTimeDisplay = document.getElementById("reaction-time");

let startTime;

// Move the box to a random position 
function moveBox() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.position = "absolute";
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;

  // Record the time just before user can click
  startTime = new Date().getTime();
}

// Handle click on box in seconds
box.addEventListener("click", () => {
  const clickTime = new Date().getTime();
  const reactionTime = (clickTime - startTime) / 1000;

  // Display reaction time
  reactionTimeDisplay.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;

 // Change box color randomly
  box.style.backgroundColor = getRandomColor();

  // Move box after short delay
  setTimeout(moveBox, 1000);
});

// Generate random color
function getRandomColor() {
  const colors = ["#af6057ff", "#764e87ff", "#74a6c7ff", "#5e9073ff", "#baa966ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Start the game
window.onload = () => {
  moveBox();
};

