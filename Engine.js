/*Kyle Bigart, 10-6-19
Engine.js holds the majority of the javescript funcitons to run calculations
 and selecting a photo/image to enlarge it.
*/
//Allow the browser to be more strict on errors, including undeclared values.
"use strict";

//A shortcut to say document.getElementById(id) by $(NAMEOFID)
var $ = function (id) {
    return document.getElementById(id);
};
//https://www.youtube.com/watch?v=Dc2WHsuiXos
//https://stackoverflow.com/questions/34867276/change-nan-to-error-in-javascript-calculator
//https://www.w3schools.com/js/js_errors.asp
//This declares photoReel element to show all the images listed.
var images = document.getElementById("photoReel").getElementsByTagName("img");
//When an image have the mouse cursor hovering over an image a red border is around it.
//Otherwise, the image have a grey border.
for (var i = 0; i < images.length; i++) {
    images[i].onmouseover = function () {
        this.style.cursor = 'hand';
        this.style.borderColor = 'red';
    }
    images[i].onmouseout = function () {
        this.style.cursor = 'pointer';
        this.style.borderColor = 'grey';
    }
}
//This method/function is declaring, when the user clicks on an image will result the main image,
// being replaced by what the user had just clicked.
function changeImage(event) {
    event = event || window.event;

    var targetElement = event.target || event.srcElement;
    if (targetElement.tagName == "IMG") {
        document.getElementById("mainImage").src = targetElement.getAttribute("src");
    }
}
//Grabing the value from the textbox to parse it into an int and calcuate it.
function calculateDogYears() {
    console.log("Click!");
    var isValid = true;
    var DogYearsValue = $("DogTextBox").value;
    var DogYearsCalc = parseInt(document.getElementById("DogTextBox").value) * 7;

    //Zero as an answer results in a custom error message, including leaving the textbox empty.
    if (DogYearsValue == 0) {
        console.log("What a cute puppy!")
        alert("What a cute puppy!")
        isValid = false;
    }

    //No negative numbers allowed, so this error message will come up.
    if (DogYearsValue < 0) {
        console.log("You are less then zero, please try again!")
        alert("You are less then zero, please try again!")
        isValid = false;
    }
    //If the value isn't a number it will have my custom error posted.
    if (isNaN(DogYearsValue)) {
        console.log("Invalid! Please place an integer!");
        alert("Invalid! Please place an integer!");
        isValid = false;
    }
    if (isValid == true) {
        console.log("Your Dog is " + DogYearsCalc + " years old.");
        alert("Your Dog is " + DogYearsCalc + " years old.");
    }

}
//Grabing the value from the textbox to parse it into an int and calcuate it.
function calculateCatYears() {
    console.log("Click!");
    var isValid = true;
    var CatYearsValue = $("CatTextBox").value;
    var CatYearsCalc = parseInt(document.getElementById("CatTextBox").value) * 4;

    //Zero as an answer results in a custom error message, including leaving the textbox empty.
    if (CatYearsValue == 0) {
        console.log("What a cute kitten!")
        alert("What a cute kitten!")
        isValid = false;
    }

    //No negative numbers allowed, so this error message will come up.
    if (CatYearsValue < 0) {
        console.log("You are less then zero, please try again!")
        alert("You are less then zero, please try again!")
        isValid = false;
    }
    //If the value isn't a number it will have my custom error posted.
    if (isNaN(CatYearsValue)) {
        console.log("Invalid! Please place an integer!");
        alert("Invalid! Please place an integer!");
        isValid = false;
    }
    if (isValid == true) {
        console.log("Your Cat is " + CatYearsCalc + " years old.");
        alert("Your Cat is " + CatYearsCalc + " years old.");
    }

}




/*
  //I tried to have this window.onload function at Engine.js,
  // due to it not working I had to have the script seprate in their class: Cat.html and Dog.html

   window.onload = function() {
     $("CalculateDogYearsBtn").onclick = calculateDogYears;
    $("CalculateCatYearsBtn").onclick = calculateCatYears;
    //$("Calculate").focus();
};
*/