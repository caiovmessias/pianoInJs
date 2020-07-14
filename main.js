const keys = document.querySelectorAll('.key');

window.addEventListener('load', start);

function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  const cantFoundAnyKey = !key;

  if (cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key);
  playAudio(audioKeyCode);
}

function addPlayingClass(key) {
  key.classList.add('playing');
}

function getKeyCode(event) {
  let keyCode;

  const isKeyBoard = event.type === 'keydown';
  if (isKeyBoard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event) {
  event.target.classList.remove('playing');
}

function start() {
  keys.forEach(function (key) {
    key.addEventListener('click', playNote);
    key.addEventListener('transitionend', removePlayingClass);
  });

  window.addEventListener('keydown', playNote);
}
