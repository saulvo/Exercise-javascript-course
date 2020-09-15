/*
Remove Every Vowel from a String

Create a function that takes a string and returns a new string with all vowels removed.
notes: "y" is not considered a vowel.
ex:
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

*/
function removeVowels(str) {
   let result = '';
   if (!str) return result;

   const vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'O', 'I', 'U'];
   for (char of str) {
      if (!vowels.includes(char))
         result += char;
   }

   return result;
}

console.log(removeVowels('I have never seen a thin person drinking Diet Coke.'));