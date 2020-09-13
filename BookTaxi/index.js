// Cho số khách, hỏi cần gọi bao nhiêu taxi 4 chỗ để chở đủ số khách

const calculateBookTaxi = numGuest => {
   let result = 0;
   if (numGuest <= 0) return result;

   result = Math.trunc(numGuest / 4);
   if (numGuest % 4 > 0) result++;

   return result;
}