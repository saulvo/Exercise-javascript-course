

const detectWord = (str) => {
   if (!str) return '';

   let word = '';
   for (char of str) {
      if (char === char.toLowerCase())
         word += char;
   }

   return word;
}

console.log(detectWord('bEEFGBuFBRrHgUHlNFYaYr'));