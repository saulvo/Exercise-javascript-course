function cardHide(card) {
   if (!card) return;
   let result = '';

   for (let i = 0; i < card.length - 4; i++)
      result += '*';

   return result + card.slice(-4);
}