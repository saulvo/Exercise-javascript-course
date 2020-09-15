/*
How Many Vowels?

Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples:
   countVowels("Celebration") ➞ 5

   countVowels("Palm") ➞ 1

   countVowels("Prediction") ➞ 4

Notes
 - a, e, i, o, u are considered vowels (not y).
 - All test cases are one word and only contain letters.
*/

function countVowels(str) {
   const vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'O', 'I', 'U'];
   let result = 0;

   for(char of str)
      if(vowels.includes(char)) result++;
      
   return result;
}

console.log(countVowels('Celebration')) // ---> 5


