//counter variable for User Score.
var counter = 0;

//correct answer to image.
var correctAnswer;

//total squares covering images.
var totalSquares = 25;

//Adds 25 squares to cover image.
for (var i = 0; i < totalSquares; i++) {
    
    var imageCover = document.createElement("div"); 
    imageCover.className = "imageCover";
    imageCover.id = "imageCover" + i;
    document.getElementById("picture").appendChild(imageCover);
    
};

// Adds click listeners to individual squares, which are hidden when clicked.
for (var i = 0; i < totalSquares; i++) {
    
    let imageClick = document.getElementById("imageCover" + i)
    imageClick.addEventListener("click", function() {   
        imageClick.style.visibility = "hidden";
        counter++;
    }) 
}

//Function contructor for image to be guessed.
function ImageDetails(imageLink, answer, hint) {
    
    return {imageLink, answer, hint};
    
};

//Array of objects containing the image, answer and hint.
var arrayOfObjects = [

    ImageDetails("IMAGES/didier-drogba.jpg", "Didier Drogba", "It's a disgrace!!"),
    
    ImageDetails("IMAGES/bill-clinton.jpg", "Bill Clinton", "I did NOT have sexual relations with that woman."),
    
    ImageDetails("IMAGES/adele.jpg", "Adele", "Hello."),
    
    ImageDetails("IMAGES/winona-ryder.jpg", "Winona Ryder", "Wiiiill? Wiiiiiill?"),
    
    ImageDetails("IMAGES/michael-schumacher.jpg", "Michael Schumacher", "The greatest F1 driver ever."),

    ImageDetails("IMAGES/tom-cruise.jpg", "Tom Cruise", "Mission Impossible"),
     
    ImageDetails("IMAGES/ana-ivanovic.jpg", "Ana Ivanovic", "Serbian tennis superstar!"),
     
    ImageDetails("IMAGES/usain-bolt.jpg", "Usain Bolt", "Fastest man alive!")
    
];

//Randomly sets image to be guessed and hint value
function setImageAndHint() {
    
    var randomNumber = Math.floor(Math.random() * arrayOfObjects.length);
    document.getElementById("imageDisplay").src = arrayOfObjects[randomNumber].imageLink;
    document.getElementById("hintDisplay").innerHTML = '<p>" ' + arrayOfObjects[randomNumber].hint + ' "</p>';
    correctAnswer = arrayOfObjects[randomNumber].answer;
    
}

setImageAndHint();

//CSS changes when hint is clicked. 
function hintStyle() {
      
    document.getElementById("hint").style.display = "none";
    document.getElementById("hintDisplay").style.display = "inherit";
    document.getElementById("hintDisplay").style.margin = "90px 0px -64px 18px";
    
};

//Checks for correct answer
function checkAnswer(){
    
    var userAnswer = document.getElementById("userGuess").value;
    if (userAnswer.toUpperCase() == correctAnswer.toUpperCase()) {
        document.getElementById("userGuess").value = "";
        alert("Well done you scored: " + (totalSquares - counter) + " points! Click play again to have another go!");
    } else {
        alert("Try Again!");
    }
    
};

//Function resets squares that have been clicked, CSS for hint and counter.
function resetAll() {
    
//Resets all squares    
    for (var i = 0; i < totalSquares; i++) {
        let imageReset = document.getElementById("imageCover" + i)
        if (imageReset.style.visibility == "hidden") {
            imageReset.style.visibility = "visible"
        } 
    }
//CSS changes if User wants to play again.
    document.getElementById("hint").style.display = "inherit";    
    document.getElementById("hintDisplay").style.display = "none";

// Counter reset to 0.    
    counter = 0;
    
};

//Click listener for Guess Button
document.getElementById("guessButton").addEventListener("click", checkAnswer);

//Click listener for hint
document.getElementById("hint").addEventListener("click", hintStyle);

//Click listener for Play Again?
document.getElementById("playAgain").addEventListener("click", function() {
    
    setImageAndHint();
    resetAll();
    
});