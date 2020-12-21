console.log('App.js loaded');


/* Sound effects */
btnClickOn = new sound('audio/btn-click-on.mp3', 1);
btnClickOff = new sound('audio/btn-click-off.mp3', 1);
poweringOn = new sound('audio/powering-on.mp3', 1);

const buttonArray = document.querySelectorAll('.btn');
for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('mousedown', function() {
    toggleState(this);
  })
}

function toggleState(elem) {
  if (elem.classList.contains('pressed')) {
    elem.classList.remove('pressed');
    console.log(`debug: powering off.`);
    btnClickOff.play();
  } else {
    elem.classList.add('pressed');
    console.log(`debug: ⚡️ powering on.`);
    btnClickOn.play();
    poweringOn.play();
  }
}

function sound(src, volume) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  this.sound.volume = volume;
  document.body.appendChild(this.sound);

  this.play = function() {
    // Reset
    this.reset();
    this.sound.play();
  }

  this.reset = function() {
    this.sound.pause();
    this.sound.currentTime = 0;
  }
}
