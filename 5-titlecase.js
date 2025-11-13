function capitalize(str) {
  const words = str.split(" "); //split based on spaces

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("coding money is fun"));

// function capitalize(str) {
//   const words = str.split(" "); //split based on spaces

//   const result = [];

//   for (let word of words) {
//     result.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return result.join(" ");
// }

// console.log(capitalize("coding money is fun"));
