function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

console.log(anagrams("RAIL! SAFETY!", "liar ytefsa"));

// function charMap(str) {
//   const charmap = {};
//   str = str.toLowerCase().replace(/[\W]/g, "");

//   for (let char of str) {
//     charmap[char] = ++charmap[char] || 1;
//   }

//   return charmap;
// }

// function anagrams(stringA, stringB) {
//   const charmapA = charMap(stringA);

//   const charmapB = charMap(stringB);

//   //check if the length is the same
//   if (Object.keys(charmapA).length !== Object.keys(charmapB).length)
//     return false;

//   //check if the values are the same
//   for (let key in charmapA) {
//     if (charmapA[key] !== charmapB[key]) return false;
//   }

//   return true;
// }

// console.log(anagrams("RAIL! SAFETY!", "liar ytefsa"));
