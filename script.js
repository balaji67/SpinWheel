// Immediately invoked function expression
// to not pollute the global scope
// (function () {
const wheel = document.querySelector('.wheel');
const startButton = document.querySelector('.button');
let deg = 0;
let c_50 = 0;
let c_100 = 0;
// ==============
let arr = [0, 72, 108, 180, 216, 288, 324,0,72,144,252,36]
let index = 0;

// ===============
wheel.style.transform = `rotate(${0}deg)`;

startButton.addEventListener('click', () => {
  // Disable button during spin
  startButton.style.pointerEvents = 'none';
  // Calculate a new rotation between 5000 and 10 000
  deg = Math.floor(5000 + Math.random() * 5000);
  // Set the transition on the wheel
  wheel.style.transition = 'all 1s ease-out';
  // Rotate the wheel
  wheel.style.transform = `rotate(${deg}deg)`;
  // Apply the blur
  wheel.classList.add('blur');

  // =====================
  // console.log(arrEl)
  index = Math.floor(Math.random() * (10))
  if(c_100 == 5) {
    index = 11
    c_100 = 0
    c_50 = 0
  }else if(c_50 == 2)
  {
    index = 10
    // c_50 = 0
  }
console.log("Index No "+ index)
console.log("c_50 : " + c_50)
console.log("c_100 : " + c_100)
c_50++;
c_100++;
  // =====================
});

wheel.addEventListener('transitionend', () => {
  // Remove blur
  wheel.classList.remove('blur');
  // Enable button when spin is over
  startButton.style.pointerEvents = 'auto';
  // Need to set transition to none as we want to rotate instantly
  wheel.style.transition = 'none';
  // Calculate degree on a 360 degree basis to get the "natural" real rotation
  // Important because we want to start the next spin from that one
  // Use modulus to get the rest value from 360
  const actualDeg = deg % 360;
  // ================

  console.log(arr[index])
  // ================
  // Set the real rotation instantly without animation
  // wheel.style.transform = `rotate(${actualDeg}deg)`;
  wheel.style.transform = `rotate(${arr[index]}deg)`;
  // wheel.style.transition = 'none';
  wheel.style.transition = 'all 10s ease-out';


});
// })();
