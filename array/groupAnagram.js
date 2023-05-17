/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  const result = [];
  strs.forEach((char) => {
    let s = char.split("").sort().join("");
    if (map[s]) {
      map[s] = [...map[s], char];
    } else {
      map[s] = [char];
    }
  });
  return Object.values(map);
  for (let v in map) {
    result.push(map[v]);
  }
  return result;
};

let str = [""];
console.log(groupAnagrams(str));
