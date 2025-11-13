function chunk(array, size) {
  const result = [];

  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }

  return result;
}

console.log(chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 2));
