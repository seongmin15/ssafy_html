const a = "치킨|삼겹살|마라탕";
const array = a.split("|");
console.log(array);

for (let str of array) {
  console.log(str);
}