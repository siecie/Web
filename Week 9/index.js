meals=["lunch", "dinner", "brunch"];

for(i=0; i<document.getElementsByClassName("meal").length; i++){
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML= "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("meal")[i].id=meals[i];
}
