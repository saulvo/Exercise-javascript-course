/*
Find the Bomb

Create a function that finds the word "bomb" in the given string.
If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

Examples:
 - bomb("There is a bomb.") ➞ "Duck!!!"
 - bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
 - bomb("This goes boom!!!") ➞ "There is no bomb, relax."

Notes: "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
*/

function bomb(str) {
   let result = 'There is no bomb, relax.';
   if(!str) return result;

   const strs = str.split(' ');
   const find = strs.find(word => {
      const currentWord = word.replace(/[^a-z0-9]/gi,'');
      return currentWord.toLowerCase()  === 'bomb';
   });
   if(find) result = "Duck!!!";

   return result;
}