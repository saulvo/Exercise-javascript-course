/*
1. Tìm từ dài nhất/ ngắn nhất trong chuổi
2. Thống kê ký tự có trong chuỗi
3. Lấy thông tin số tiền từ chuỗi `$120  --> 120 `
4. Cắt chuỗi và thêm 3 dấu chấm nếu dài hơn 30 ký tự
5. Viết hoa ký tự đầu tiên của các từ trong chuỗi.
*/

// 1
const findTheLongestWord = (str) => {
   if(!str) return '';

   let longestWord = '';
   const wordList = str.split(' ');

   for(let i = 0; i < wordList.length; i++) {
      const currentWord = wordList[i];
      if(currentWord.length > longestWord.length)
         longestWord = currentWord;
   }

   return longestWord;
}

console.log(findTheLongestWord('Vo Thanh Son'));
