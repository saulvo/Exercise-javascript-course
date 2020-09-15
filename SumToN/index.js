// Tính S(n) = 1 + 2 + ... + n

const sum1ToN = n => {
   let result = 0;
   if (n < 1) return result;

   for (let i = 1; i <= n; i++) {
      result += i;
   }

   return result;
}

//Tính S(n) = 1 x 2 x ... + n
const multiply1ToN = n => {
   let result = 1;
   if (n <= 1) return result;

   for (let i = 1; i <= n; i++) {
      result *= i;
   }

   return result;
}