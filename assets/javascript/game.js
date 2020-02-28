//global used varriables
//______________________________________________________
var log = console.log;
var word = ["wibblywobbly timeywimey", "alonsy","jellybaby","geronimo","fantastic","nonsense","dash","run","imposiblegirl","who","wonder","polarity","brilliant"];
var numoblank = 0;
var wordarr = [];
var current = [];
var wrong = [];
var wins = 0;
var losses = 0;
var badg = 9;

var a1 = new Audio("./assets/sounds/Doctor Who Theme 10.mp3");

function playWin() {
    a1.play();
};

function pauseWin() {
    a1.pause();
};


function gamestart() {
    pauseWin();
    var randomWrd = Math.floor(Math.random() * 13);
    wordarr = word[randomWrd].split("");
    numoblank = wordarr.length;

    //reset counters
    current = [];
    wrong = [];
    badg = 9;

    for (var i=0; i<numoblank; i++){
        current.push("_");
    }
    // link back to the html
    document.getElementById("WordProgress").innerHTML = current.join(" ");
    document.getElementById("win").innerHTML = wins;
    document.getElementById("badAtt").innerHTML = wrong.join(" ");
    document.getElementById("Attleft").innerHTML = badg;
    // //logs to test my vars
    // log('THis is your word  :::  '+word[randomWrd]);
    // log('this is the array of that word!:::  '+wordarr);
    // log('this is the number of blank needed!!!::  '+numoblank);
    // log('this is the current status of the word   '+current);


}

function letterguess(A) {
    //make trigger for if letter in word
    var letterinword = false;
    //check if letter is in word
    for (var k=0; k<numoblank; k++) {
        if(wordarr[k] == A) {
            letterinword = true;
            log("letter is in word::: "+letterinword);
        }
    }
    //since letter is in word... we replace the space
    if (letterinword==true) {
        for (var j=0; j<numoblank; j++) {
            if(wordarr[j] == A) {
                current[j] = A;
                log("this is the current "+current.join(" "))
                
            }
            
        }
    }
    else{
            wrong.push(A);
            badg--;
    }
log("checking the progress  "+current);
}
// funciton to return results and check if user wins
function result(A){
    log("win:: "+wins+" | loose:: "+losses);
    log("num oguesses left::  "+badg)
    document.getElementById("Attleft").innerHTML = badg;
    document.getElementById("WordProgress").innerHTML = current.join(" ");
    document.getElementById("badAtt").innerHTML = wrong.join(" ");

        if(wordarr.toString()==current.toString()){
            for (var j=0; j<numoblank; j++) {
                if(wordarr[j] == A) {
                    current[j] = A;
                }
            }
            playWin();
            wins++;
            document.getElementById("WordProgress").innerHTML = current.join(" ");
            alert("Passphrase was  :  "+current.join(" "));
            alert("Tadris has been unlocked! Great Job!!!");
            document.getElementById("win").innerHTML = wins;
            //a1.pause();
            gamestart();

        }
        else if(badg<1){
            losses++;
            alert("Passphrase was  :  "+wordarr.join(" "));
            alert("The tardis is now quantum locked! You fialed!!");
            document.getElementById("loss").innerHTML = losses;
            gamestart();
            badg = 9;
        }
}

gamestart();

document.onkeyup = function(event) {
    var userGuess = (event.key).toLowerCase();
    letterguess(userGuess);
    result(userGuess);
  }