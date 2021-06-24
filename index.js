
//Random Image Generator Player 1

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImageGenerator1 = "images/dice" + randomNumber1 + ".png" ;
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomImageGenerator1);

//Random Image Generator Player 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageGenerator2 = "images/dice" + randomNumber2 + ".png" ;
var image1=document.querySelectorAll("img")[1].setAttribute("src",randomImageGenerator2);

///Winner
if(randomNumber1 === randomNumber2 ){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML="Player 1 Won!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Won!";
}


