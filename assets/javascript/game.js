//global used varriables
//______________________________________________________
var log = console.log;
// var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var word = ["Alex", "Lee"];
// var answer = word[randomWrd];
var numoblank = 0;
var wordarr = [];
// var randW = "";
var current = [];
var wrong = [];
var wins = 0;
var losses = 0;
var badg = 0;
// document.onkeyup = function(event) {
// var userGuess = event.key;
// //   }
// var userGuess = event.key.toLowerCase();
// var wordarr = word[randomWrd].toCharArray();

// document.getElementById("hud").innerHTML = 'Bad guesses:  '+badg;

function gamestart() {
    var randomWrd = Math.floor(Math.random() * 2);
    wordarr = word[randomWrd].split("");
    numoblank = wordarr.length;

    //reset counters
    var current = [];
    var wrong = [];
    var badg = 0;

    for (var i=0; i<numoblank; i++){
        current.push("_");
    }

    document.getElementById("WordProgress").innerHTML = current.join(" ");

    log('THis is your word  :::  '+word[randomWrd]);
    log('this is the array of that word!:::  '+wordarr);
    log('this is the number of blank needed!!!::  '+numoblank);
    log('this is the current status of the word   '+current);


}

function letterguess(A) {
    var letterinword = false;

    for (var i=0; i<numoblank; i++) {
        if(wordarr[i] == A) {
            letterinword = true;
        }
    }
}

gamestart();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.key).toLowerCase();
    letterguess(userGuess);
  }


// if (badg > 9) {


    
    //tennant1
    // var randomWrd = Math.floor(Math.random() * 14);
    // log("random number = "+randomWrd)
//     if (randomWrd === 0) {
//         if () {

//         }
//         else if () {

//         }
//         else 

//     }
//     else if (randomWrd === 0) {

//     }
    

// }
// else{
//     alert("Sorry but you loose!");
//     losses++;
//     var again = confirm("Play Again?");
//     if (confirm){
//         var badg === 0;
//     }
// }