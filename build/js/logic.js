var numbers = [8, 6, 9, 12, 54, 109, 1, 14, 62, 3];

//Math.max - Get the largest value from an array
var max = Math.max.apply(null, numbers);
document.getElementById("max").innerHTML = "Result: " + max;

//Math.min - Get the smallest value from an array
var min = Math.min.apply(null, numbers);
document.getElementById("min").innerHTML = "Result: " + min;

//.reduce() sum
var sum = numbers.reduce(add, 0);
function add(a, b) {
  return a + b;
}
document.getElementById("reduce-sum").innerHTML = "Result: " + sum;

//least to greatest
function sortNumber(a,b) {
	return a - b;
}
var sortLeastToGreatest = numbers.sort(sortNumber);
document.getElementById("least-to-greatest").innerHTML = "Result: " + sortLeastToGreatest;

//greatest to least
function sortNumberTwo(a,b) {
	return b - a;
}
var sortGreatestToLeast = numbers.sort(sortNumberTwo);
document.getElementById("greatest-to-least").innerHTML = "Result: " + sortGreatestToLeast;