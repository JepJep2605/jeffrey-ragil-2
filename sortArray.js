let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names sorted alphabetically:", sortedNames);