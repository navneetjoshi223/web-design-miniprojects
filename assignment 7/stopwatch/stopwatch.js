let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let running = false;

// Get the current date
const today = new Date();

// Format the date to "yyyy-MM-dd" format
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// Set the date picker value to the formatted date
document.getElementById('datePicker').value = formattedDate;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

async function startTimer() {
  if (!running) {
    if (elapsedTime === 0) {
        startTime = new Date().getTime();
    } else {
        const currentTime = new Date().getTime();
        startTime = currentTime - elapsedTime;
    }
    running = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    await updateTimerWithAsync();
  }
}

function stopTimer() {
  if (running) {
    clearInterval(intervalId);
    elapsedTime = new Date().getTime() - startTime;
    running = false;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

function resetTimer() {
  clearInterval(intervalId);
  running = false;
  elapsedTime = 0;
  timerElement.innerText = "00:00:00";
  startButton.disabled = false;
  stopButton.disabled = true;
}

async function updateTimerWithAsync() {
  while (running) {
    const currentTime = new Date().getTime();
    //const elapsed = currentTime - startTime;
    elapsedTime = currentTime - startTime;
    const hours = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
    timerElement.innerText = `${hours}:${minutes}:${seconds}`;
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
  }
}
