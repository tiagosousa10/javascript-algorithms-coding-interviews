function vowels(str) {
  const vowelcheck = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowelcheck.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(vowels("CodingMoney"));

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0;
// }

// console.log(vowels("CodingMoney"));
