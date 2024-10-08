//1. Sort EvenNumbers

function sortEvenNumbers(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  let evenIndex = 0;
  return arr.map((num) => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));
}

console.log(sortEvenNumbers([5, 3, 2, 8, 1, 4]));


//2. Find UniqCharacters in String

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

//3. flattenArray

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten)? flattenArray(toFlatten) : toFlatten)
    },[])
}

console.log(flattenArray([1,[2,[3,4],5],6]))


//4. fibonacci

function fibonacci(n) {
    let fib = [0,1];
    for(let i = 2; i <= n; i++ ) {
        fib[i] = fib(n-1) + fib(n-2);
    }
    return fib;
}

console.log(fibonacci(10))

//5. Return the given value present in array if not return previous value present in array

const array = [1, 3, 5, 9, 12, 16, 19, 21, 23];
let x = 8,
  prevValue = null;
for (let i = 0; i < array.length; i += 1) {
  if (array[i] < x) {
    prevValue = array[i];
  } else if (array[i] === x) {
     console.log(array[i]);
  }
}
console.log(prevValue);

//6. Find repeated String

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

//7. Find Maximum and minimum in array

function findMaxMin(arr) {
  let max = arr[0],
    min = arr[0];
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    } else {
      min = num;
    }
  });
  return { max, min };
}
console.log(findMaxMin([3, 6, 2, 7, 12]));


//8. setTimeOut Example

function displayName() {
  console.log(`Hai, Eniyan`);
  setTimeout(() => {
    console.log("Hai, Venkat")
  },1000);
  console.log("Hai, Kani");
}

displayName();

//9. Spread operator

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

//10. rest parameter

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

//11. PrimeNumber

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const arrayNumbers = [1,2,3,4,5,7,9,12];
const primeNumbers = arrayNumbers.filter(isPrime);
console.log(primeNumbers);

// 12. Prime Number Between Numbers

let startNum = 40,
endNum = 50;

for (let num = startNum; num <= endNum; num += 1) {
  let isPrime =true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) console.log(num)
}


//13. Sort an array without using sort method
const arraySort = [35, 4, 76, 1, 8787, 45];

for (let i = 0; i < array.length - 1; i += 1) {
  for (let j = 0; j < array.length - 1; j += 1) {
    if (arraySort[j] > arraySort[j + 1]) {
      let temp = arraySort[j];
      arraySort[j] = arraySort[j + 1];
      arraySort[j + 1] = temp;
  }
  }
}

console.log(arraySort);

// 14. Find Duplicates in the array

// Example 1

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]))

// Example 2

function removeDuplicateNum(arr) {
  return arr.filter((val, index, self) => self.indexOf(val) === index)
}

console.log(removeDuplicateNum([1, 2, 3, 4, 5, 5, 6, 6, 7, 7]))

// Example 3

function findDuplicates(arr) {
  let duplicates = [],
  withoutDuplicates = [];
  
  arr.forEach(num => {
    if (withoutDuplicates[num]) {
      duplicates.push(num);
    } else {
      withoutDuplicates.push(num);
    }
  })
  return {duplicates, withoutDuplicates};
}

console.log(findDuplicates([1,2,3,4,2,5,1]));

//15. Find Number of occurence in word
// Method 1

function findOccurence(str) {
  let letters = str.toLowerCase().split(''),
  count = {};
  letters.forEach(letter =>{
    if (count[letter]) {
      count[letter]++;
    } else {
      count[letter] = 1;
    }
  }) 
}
console.log(findOccurence("Elephant"))

//Method 2

function charactersOccurence(str) {
  let word = str.toLowerCase(),
  count = {};

  for (let char of word) {
    count[char] ? count[char]++ : count[char] = 1;
  }
  return count;
}
console.log(charactersOccurence('Google'))



//16. Reverse the string

const originalString = 'Hello';

const reversedString = reverseStirng(originalString);
console.log(reversedString);

function reverseStirng(str) {
  let reversed = '';

  for (let i = str.length - 1; i >=0; i--) {
    reversed += str[i];
  }
  return reversed;

}

//17. Check if a string is Palindrome
function isPalindrome(str) {
  function reversedStr(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
    }
    return reversed;
  }
  const cleanedString = str.toLowerCase();
  return reversedString === reversedStr(cleanedString);
}
console.log(isPalindrome('Level'))

//18. Find Longest word in the string

function findLongestWord(str) {
  let words = str.split(' '),
  longetsWord = '';

  words.forEach(word => {
    if (word.length > longetsWord.length) longetsWord = word;
  })
  return longetsWord;

}

console.log(findLongestWord("Hello find the longest word in the given string"));

//19. 


// https://onecompiler.com/javascript/42qygaerg