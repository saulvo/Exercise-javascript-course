// Cho số giây, chuyển thành chuỗi có dạng: hh:mm:ss

const TimeFormat = s => {
   let result = '';
   let remmaining = 0;

   if (s <= 0) return result;
   const hour = `0${Math.trunc(s / 3600)}`.slice(-2);

   remmaining = s % 3600;
   const minute = `0${Math.trunc(remmaining / 60)}`.slice(-2);

   const second = `0${Math.trunc(remmaining % 60)}`.slice(-2);
   result = `${hour}:${minute}:${second}`;

   return result;
}