// Sort EvenNumbers

function sortEvenNumbers(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  let evenIndex = 0;
  return arr.map((num) => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));
}

console.log(sortEvenNumbers([5, 3, 2, 8, 1, 4]));


// Find UniqCharacters in String

function hasUniqCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqCharacters("abcdef"));
console.log(hasUniqCharacters("hello"));

// flattenArray

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten)? flattenArray(toFlatten) : toFlatten)
    },[])
}

console.log(flattenArray([1,[2,[3,4],5],6]))


// fibonacci

function fibonacci(n) {
    let fib = [0,1];
    for(let i = 2; i <= n; i++ ) {
        fib[i] = fib[n - 1] + fib[n - 2];
    }
    return fib;
}

console.log(fibonacci(10))

// Return the given value present in array if not return previous value present in array

const array = [1, 3, 5, 9, 12, 16, 19, 21, 23];
let prevValue = 0,
  x = 17;
array.forEach((num) => {
  if (num === x) {
    console.log(num);
  } else if (num < x) {
    prevValue = num;
  }
});
console.log(prevValue);

// Find repeated String

function countRepeatedString(str) {
  let words = str.toLowerCase().split(' '),
  count = {};

  words.forEach(word => {
    if (count[word]) {
      count[word]++;
    }
    else {
      count[word] = 1;
    }
  })
  return count;
}

console.log(countRepeatedString("The sun rises in the morning"));

// Find Maximum and minimum in array

function findMaxMin(arr) {
  let max = arr[0],
    min = arr[0];
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  });
  return { max, min };
}
console.log(findMaxMin([3, 6, 2, 7, 12]));


// setTimeOut Example

function displayName() {
  console.log(`Hai, Eniyan`);
  setTimeout(() => {
    console.log("Hai, Venkat")
  },1000);
  console.log("Hai, Kani");
}

displayName();

//Spread operator

//Example1

const array1 = [1,2,3];
const array2 = [4,5,6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//Example2

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const object = {...obj1, ...obj2};

console.log(object);

//Example3

function sum(x,y,z) {
  return x+y+z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));

//rest parameter

//Example 1

function sumOfNumbers(...numbers) {
  return numbers.reduce((total,sum) => total + sum, 0);
}

console.log(sumOfNumbers(1,2,3,4,5,6))

// Example 2

function multiplyBy(multiplier, ...numbersList) {
  return numbersList.map(num => num * multiplier);
}

console.log(multiplyBy(2,1,2,3));

// https://onecompiler.com/javascript/42qygaerg