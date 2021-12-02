// var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

// var sum = 0;

// testArray.push(50)

// var newElement = prompt('Enter a number:');

// testArray.push(parseInt(newElement))

// for (var position = 0; position < testArray.length; position++) {
//     sum += testArray[position];
// }
// console.log("The sum of " + testArray + " is: " + sum);


//Challenge

var sum = 0;

var elements = prompt('enter 5 whole numbers separated by commas');

elements = elements.replace(/\s/g, '').split(',');

console.log(elements)

for (var position = 0; position < elements.length; position++) {
    sum += parseInt(elements[position]);
}
console.log("The sum of " + elements + " is: " + sum);