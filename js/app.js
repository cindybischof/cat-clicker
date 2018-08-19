let catClicksOne;
let catClicksTwo;

$('#img-one').click(function(e){
  catClicksOne++;
  console.log(catClicksOne);
});

$('#img-two').click(function(e){
  catClicksTwo++;
  console.log(catClicksTwo);
});
