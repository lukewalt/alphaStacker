// Create an array that contains the letters of the alphabet
var alphabet = [ "a", "b", "c", "d", "e", "f" ];

// The stackLetter function should accept the array as the sole argument
function stackLetters (alphabet) {
  /*
    Write a `for` loop that iterates over the array argument and
    outputs the letters.
   */
  for(var i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
  }
}

// Invoke the function and pass in the array
stackLetters(alphabet)
