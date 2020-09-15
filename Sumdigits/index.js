//
const TongCacChuSo = num => {
   if (num < 100 || num > 999) return 0;

   const n1 = Math.trunc(num / 100);
   const n2 = Math.trunc((num % 100) / 10);
   const n3 = num % 10;

   return n1 + n2 + n3;
}

const TongSoChanLe = num => {
   let total = 0;

   if (num < 0) return 0;

   for (let i = 1; i <= num; i++) {
      total += ((i < 10 && i % 2 === 1) || (i >= 10 && i % 2 === 0)) ? i : 0;
   }

   return total;
}

console.log(TongSoChanLe(15));