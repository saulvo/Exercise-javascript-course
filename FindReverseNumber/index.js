// Tìm số đảo ngược

const findReverseNumber = num => {
   const reversedInt = parseInt(Math.abs(num).toString().split('').reverse().join(''));

   if (reversedInt > 2 ** 31) return 0;

   return reversedInt * Math.sign(num); // -1 --> 1 or 1 --> -1
}