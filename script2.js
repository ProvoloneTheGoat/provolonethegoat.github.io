function myFunction(){
    var guess1 = prompt("Please enter your password", "");
    if (guess1 == "ilovekarl") {
} 
else {
      while (guess1!=="ilovekarl") {
    guess1 = prompt("Please try again:", "");
}
}
alert("You have sucessfully logged in!")
}
