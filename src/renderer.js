const intervalInput = document.getElementById('interval');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const countdownDisplay = document.getElementById('countdownDisplay');

let timer = null;
let countdownTimer = null;
let remainingTime = 0;

function playSound() {
  const audio = new Audio('./sound.mp3'); // sound.mp3ファイルを使用
  audio.play();
  
  // 音が鳴ったら残り時間をリセット
  remainingTime = parseInt(intervalInput.value);
  updateCountdownDisplay();
}

function updateCountdownDisplay() {
  countdownDisplay.textContent = `残り時間: ${remainingTime}秒`;
}

function countdown() {
  if (remainingTime > 0) {
    remainingTime--;
    updateCountdownDisplay();
  }
}

startButton.addEventListener('click', () => {
  const interval = intervalInput.value;
  
  // 初期カウントダウン値を設定
  remainingTime = parseInt(interval);
  updateCountdownDisplay();
  
  // 音を鳴らすタイマー設定
  timer = setInterval(playSound, interval * 1000);
  
  // カウントダウンタイマー設定（1秒ごとに更新）
  countdownTimer = setInterval(countdown, 1000);
  
  startButton.disabled = true;
  stopButton.disabled = false;
  intervalInput.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  clearInterval(countdownTimer);
  
  // カウントダウン表示をクリア
  countdownDisplay.textContent = '';
  
  startButton.disabled = false;
  stopButton.disabled = true;
  intervalInput.disabled = false;
});