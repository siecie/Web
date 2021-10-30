const images = [""]
var prevDay = "sundayList";

function changeList(weekday){
  //console.log("button clicked!");
//grab id of div with image and change image
  document.getElementById(prevDay).style.display = "none";
  document.getElementById(weekday + "List").style.display = "block";
  prevDay = weekday + "List";
}

function show(weekday) {
  console.log(weekday);
  console.log(document.getElementById("image").src);
  document.getElementById("image").src = weekday;
}
