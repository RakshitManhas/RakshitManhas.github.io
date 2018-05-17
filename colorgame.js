var numbersq= 6;
var square = document.querySelectorAll(".square");
var colors = generateRandomColors(numbersq);
var pickedColor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easyBtn= document.querySelector("#easy");
var hardBtn= document.querySelector("#hard");

easyBtn.addEventListener("click", function () {
    numbersq=3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    //generate new colors
    colors = generateRandomColors(numbersq);
    //pick new color
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
        square[i].style.background=colors[i];
        } else {
        square[i].style.display="none";
        }        
    }
        resetButton.textContent="NEW COLORS";
        messageDisplay.textContent="";
});

hardBtn.addEventListener("click", function () {
    numbersq=6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    //generate new colors
    colors = generateRandomColors(numbersq);
    //pick new color
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for (let i = 0; i < square.length; i++) {
        square[i].style.background=colors[i];
        square[i].style.display="block";
    }
    messageDisplay.textContent="";
    resetButton.textContent="NEW COLORS";

});

function reset() {
    //generate new colors
    colors = generateRandomColors(numbersq);
    //pick new color
    pickedColor = pickColor();
    //change squares 
    for (var i = 0; i < square.length; i++) {
        //add colors to squares
        square[i].style.background=colors[i];
    }    
    h1.style.background ="steelblue" ;
    resetButton.textContent="NEW COLORS";
    colorDisplay.textContent= pickedColor;
    messageDisplay.textContent="";
}
resetButton.addEventListener("click", function () {
    reset();    
});
colorDisplay.textContent= pickedColor;
for (var i = 0; i < square.length; i++) {
    //add colors to squares
    square[i].style.background=colors[i];
    //add click listenesrs
    square[i].addEventListener("click", function () {
        //grab color
        var clickedColor= this.style.background;
        //compare
        //correct
        if (clickedColor==pickedColor) {
            changeColors(clickedColor);              
            messageDisplay.textContent="Correct!";
            h1.style.background = clickedColor;
            resetButton.textContent="PLAY AGAIN?";
        } 
        //wrong
        else {
            this.style.background = "#232323" ;
            messageDisplay.textContent="Try Again!";
        }
    });
}

function changeColors(color) {      
    for (var i = 0; i < square.length; i++) {
        //Change All to Correct 
        square[i].style.background= color;
    }          
}

function pickColor() {
   var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var colorarr = [];
    for (let i = 0; i < num; i++) {
        //push into array
        colorarr.push(randomColor());        
    }
    return colorarr;
}

function randomColor() {
    //red
   var red =  Math.floor(Math.random() * 256);
    //green
   var green =  Math.floor(Math.random() * 256);
   //blue
   var blue =  Math.floor(Math.random() * 256);
   //rgb 
   return "rgb("+red+", "+green+", "+blue+")";     
}

