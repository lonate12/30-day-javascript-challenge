(function(){

const SECOND_HAND = document.querySelector('.second-hand');
const MINUTE_HAND = document.querySelector('.minute-hand');
const HOUR_HAND = document.querySelector('.hour-hand');

function setDate(){
  var date = new Date();

  var seconds = date.getSeconds();
  var secDegrees = ((seconds / 60) * 360) + 90;
  SECOND_HAND.style.transform = 'rotate('+secDegrees+'deg)';
  // console.log(secDegrees);


  var minutes = date.getMinutes();
  var minDegrees = ((59 / 60) * 360) + 90;
  MINUTE_HAND.style.transform = 'rotate('+minDegrees+'deg)';

  var hours = date.getHours();
  var hourDegrees = ((hours / 12) * 360) + 90;
  HOUR_HAND.style.transform = 'rotate('+hourDegrees+'deg)';
}

setInterval(setDate, 1000);

setDate();

}());
