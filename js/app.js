let catClicksOne = 0;
let catClicksTwo = 0;
let catOneCounter = document.querySelector('.clicks-one');
let catTwoCounter = document.querySelector('.clicks-two');

let imgOne = document.getElementById('img-one');
imgOne.addEventListener('click', function(){
  catClicksOne++;
  catOneCounter.innerText = catClicksOne;
  console.log('Second cat picture clicked ' + catClicksOne + ' times.');
},false);

let imgTwo = document.getElementById('img-two');
imgTwo.addEventListener('click', function(){
  catClicksTwo++;
  catTwoCounter.innerText = catClicksTwo;
  console.log('Second cat picture clicked ' + catClicksTwo + ' times.');
},false);
