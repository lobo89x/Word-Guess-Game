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
var badg = 9;
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
    var badg = 9;

    for (var i=0; i<numoblank; i++){
        current.push("_");
    }

    document.getElementById("WordProgress").innerHTML = current.join(" ");
    document.getElementById("win").innerHTML = wins;
    document.getElementById("badAtt").innerHTML = wrong.join(" ");
    document.getElementById("Attleft").innerHTML = badg;

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
            log("letter is in word::: "+letterinword);
        }
    }
    if (letterinword) {
        for (var i=0; i<numoblank; i++) {
            if(wordarr[i] == A) {
                current[i] = A;
                log("this is the current "+current.join(" "))
                // alert(A+"  is in the word")
            }
        }
    }
    else{
        // for (var i=0; i<wrong.length; i++) {
        //     if(wrong[i] == A) {
        //         alert("You already tried "+A);
        //     }
        //     else {
                wrong.push(A);
                badg--
        //     }
        // }
        

    }
    // log(current);
    // document.getElementById("WordProgress").innerHTML = current;
    
    // log("you got these wrong   "+wrong);
}

function repeat(){
    log("win:: "+wins+" | loose:: "+losses);
    log("num oguesses left::  "+badg)
    document.getElementById("Attleft").innerHTML = badg;
    document.getElementById("WordProgress").innerHTML = current.join(" ");
    document.getElementById("badAtt").innerHTML = wrong.join(" ");

        if(wordarr.toString()==current.toString()){
            wins++;
            alert("Tadris has been unlocked! Great Job!!!");
            document.getElementById("win").innerHTML = wins;
            gamestart();

        }
        else if(badg<1){
            losses++;
            alert("The tardis is now quantum locked! You fialed!!");
            document.getElementById("loss").innerHTML = losses;
            gamestart();
            badg = 9;
        }
}



gamestart();

document.onkeyup = function(event) {
    var userGuess = (event.key).toLowerCase();
    // log("this is the user guess "+userGuess)
    // log("this is the key pressed  "+event.key)
    letterguess(userGuess);
    repeat();
    // log(current.join(" "));
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