/*
Recursion to Repeat a String n Number of Times

Examples:
repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"

*/

function repetition(txt, n) {
   let string = '';
   if (!txt || n < 1) return string;

   for (let i = 0; i < n; i++)
      string += txt

   return string;
}
