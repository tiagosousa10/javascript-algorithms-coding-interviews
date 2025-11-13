function reverseInt(int) {
  reversed = int.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(int);
}

console.log(reverseInt(334445));

// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }
