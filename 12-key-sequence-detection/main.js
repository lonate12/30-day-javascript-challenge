const pressedArray = [];
const secretCode = 'rene';

window.addEventListener('keyup', (e)=> {
  pressedArray.push(e.key);
  pressedArray.splice(-secretCode.length - 1, pressedArray.length - secretCode.length);
  if (pressedArray.join('').includes(secretCode)) {
    console.log('That\'s the secret code!');
  }
})