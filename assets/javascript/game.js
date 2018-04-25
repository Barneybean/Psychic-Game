// assign global variables
var wins=0;
var loss=0;
var guessleft=9;
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// assign an empty array
var sofar =[];
var computerGuess=alphabet[Math.floor(Math.random()*alphabet.length)];
var random=Math.floor(Math.random()*alphabet.length);

// onkeyupfunction
document.onkeyup=function(game) {
    var userInput=game.key;
    // var strinput=string(userInput);
    // console.log(stringinput);
//  !!!!
    if (sofar.indexOf(userInput) === -1){
        document.getElementById("alert").innerHTML="keep going";
        if (computerGuess === userInput) {
            wins++;
            guessleft=9;
            sofar=[];
            computerGuess=alphabet[Math.floor(Math.random()*alphabet.length)];
        }
        else if(guessleft > 1) {
            guessleft=guessleft-1;
            sofar.push(userInput);
        }
        else {
            loss++;
            guessleft=9;
            sofar=[];
        }
    }
    else{
        document.getElementById("alert").innerHTML="Duplicated letter, try again!";
    }
    document.getElementById("wins").innerHTML=wins;
    document.getElementById("loss").innerHTML=loss;
    document.getElementById("guessleft").innerHTML=guessleft;
    document.getElementById("sofar").innerHTML=sofar;
};
