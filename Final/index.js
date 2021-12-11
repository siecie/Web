let img = document.querySelector('#blossum');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
var prev = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  img.src= 'Media_Gallery/Blossum.jpg';
  var selected = document.getElementById('btn1');
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "black";
  btn3.style.backgroundColor = "black";
  selected.backgroundColor = "white";
  prev = selected;
})

btn2.addEventListener('click', () => {
  img.src= 'Media_Gallery/Crested Butte.jpg';
  var selected = document.getElementById('btn1');
  btn2.style.backgroundColor = "white";
  btn1.style.backgroundColor = "black";
  btn3.style.backgroundColor = "black";
  selected.backgroundColor = "white";
  prev = selected;
})

btn3.addEventListener('click', () => {
  img.src= 'Media_Gallery/Flatirons.jpg';
  var selected = document.getElementById('btn1');
  btn3.style.backgroundColor = "white";
  btn2.style.backgroundColor = "black";
  btn1.style.backgroundColor = "black";
  selected.backgroundColor = "white";
  prev = selected;
})
