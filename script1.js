var answer1;
var counterVariable;
if (Math.random() < 0.2) {
    answer1=1;
}else if (Math.random() < 0.4) {
    answer1=2;
}else if (Math.random() < 0.6) {
    answer1=3;
}else if (Math.random() < 0.8) {
    answer1=4;
} else {
    answer1=5;
}
function myFunction(){
    var guess1 = prompt("Please enter your guess between 1 and 5:", "");
    if (guess1 == answer1) {
        alert("You guessed " + guess1 + ". You were right! It took you one try!");
} 
else {
      for(counterVariable=1; guess1!=answer1; counterVariable++){
          var guess1 = prompt("You guessed incorrectly. Please try again:");
}
    alert("Congratulations! It took you " + counterVariable + " guesses to complete!");
    }

}
