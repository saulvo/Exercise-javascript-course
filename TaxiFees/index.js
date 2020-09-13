/*
Tính tiền taxi biết:
- 1km đầu giá 15000
- 2 -> 5km giá 13500
- 6 trở lên giá 11000
- Nếu hơn 120km thì đc giảm 10%
*/

const taxiFees = km => {
   let money = 0;

   if (km <= 0) return money;
   if (km < 1) {
      money = km * 15000;
   } else {
      if (km < 5) {
         money = 15000 + (km - 1) * 13500;
      } else {
         money = 15000 + (5 - 1) * 13500 + (km - 5) * 11000;
         if (km > 120) money = money * (1 - 10 / 100);
      }
   }

   return money;
}