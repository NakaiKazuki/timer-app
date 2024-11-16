const intervalInput = document.getElementById('interval');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let timer = null;

function playSound() {
  const audio = new Audio('./sound.mp3'); // sound.mp3ファイルを使用
  audio.play();
}

startButton.addEventListener('click', () => {
  const interval = intervalInput.value;
  timer = setInterval(playSound, interval * 1000);
  
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalInput.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  
  startButton.disabled = false;
  stopButton.disabled = true;
  intervalInput.disabled = false;
});
