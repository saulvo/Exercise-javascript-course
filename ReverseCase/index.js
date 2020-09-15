/*
Reverse the Case
Given a string, create a function to reverse the case.
All lower-cased letters should be upper-cased, and vice versa.

Examples:
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
reverseCase("MANY THANKS") ➞ "many thanks"
reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
*/

function reverseCase(str) {
   let result = '';
   if (!str) return result;

   for (char of str) {
      result += (char === char.toLowerCase()) ? char.toUpperCase() : char.toLowerCase();
   }

   return result;
}