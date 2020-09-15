/*
Finding Nemo
You're given a string of words. You need to find the word "Nemo",
and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

note:
! , ? . are always separated from the last word.
Nemo will always look like Nemo, and not NeMo or other capital variations.
Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
If there are multiple Nemo's in the sentence, only return for the first one.
*/

function findNemo(sentence) {
   let result = 'I can\'t find Nemo :(';
   if(!sentence) return result;

   strings = sentence.split(' ');
   const index = strings.findIndex(char => char === 'Nemo') + 1;
   if(index !== 0) {
      result = `I found Nemo at ${index}!`;
   }

   return result;
}