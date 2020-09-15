/*
Write a function that takes a credit card number and only displays the last four characters.
The rest of the card number must be replaced by ************.

cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"
*/

function cardHide(card) {
   if (!card) return;
   let result = '';

   for (let i = 0; i < card.length - 4; i++)
      result += '*';

   return result + card.slice(-4);
}