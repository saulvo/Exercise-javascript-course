// Đếm số lượng chữ số của một số nguyên dương

const countCharInteger = (num) => {
   let result = 0;

   if(!Number.isInteger(num)) {
      console.log('Please enter the integer🥱');
      return;
   }
   if(num < 0) return result;
   result = num.toString().length;

   return result;
}

console.log(countCharInteger(56564465))