console.log(document.getElementsByClassName("options"));
console.log(document.getElementsByClassName("options")[0].innerHTML);




const images=[ "Tina.jpg", "Gene.jpeg" , "Louise.jpeg"];
const title=["Tina", "Gene", "Louise"];
for(i=0;i<document.getElementsByClassName('options').length; i++){
  document.getElementsByClassName('label')[i].innerHTML=title[i];
  console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML+='<img src="assets/'+ images[i]+' ">';
}
