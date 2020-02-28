# Word-Guess-Game

This is a hangman - esque type game. It is made using javascript, bootstrap, CSS and HTML using a few simple functions. Login and help the Doctor unlock the T.A.R.D.I.S.!

The JavaScript will start by generating a random number within the length of a set array of phrases from the show. It will then parse the string to make an array to use as a results bank. From there the script can us he length of this array to make a blank array in the classic hang man style. 
On every key press, the letter is checked against the word array and if it letter matches one in the array it takes its place in the current array with the blanks. If the letter is not in the word array, the incorrect counter will drop by one. The game is over when there are no attempts left or when there are no more blanks in the word array.
