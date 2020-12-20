console.log('App.js loaded');

// const foo = document.getElementById('foo');
// foo.addEventListener('click', function() {
//   // console.log(this);
//   toggleState(this);
// })

const buttonArray = document.querySelectorAll('.btn');
for (let i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener('click', function() {
    toggleState(this);
  })
}

function toggleState(elem) {
  if (elem.classList.contains('pressed')) {
    elem.classList.remove('pressed');
    console.log(`debug: powering off.`)
  } else {
    elem.classList.add('pressed');
    console.log(`debug: ⚡️ powering on.`);
  }
}
