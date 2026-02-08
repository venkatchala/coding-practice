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
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
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

for (let i = 0; i < arraySort.length - 1; i += 1) {
  for (let j = 0; j < arraySort.length - 1; j += 1) {
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

const reversedString = reverseString(originalString);
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
  const reversedString = reversedStr(cleanedString);
  return reversedString === cleanedString;
}
console.log(isPalindrome('Level'))

//18. Find Longest word in the string

function findLongestWord(str) {
  let words = str.split(' '),
  longestWord = '';

  words.forEach(word => {
    if (word.length > longestWord.length) longestWord = word;
  })
  return longestWord;

}

console.log(findLongestWord("Hello find the longest word in the given string"));

//19. Find First Non repeating character of string

function firstNonRepeatingCharacter(str) {
  const count = {};

  for (const char of str) {
    count[char] ? count[char] += 1 : count[char] = 1;
  }

  for (const char in count) {
    if (count[char] === 1) {
      return char;
    }
  }
return null;
}

console.log(firstNonRepeatingCharacter('swiss'));

// 20. Anagrams

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s+/g,'').toLowerCase();
  str2 = str2.replace(/\s+/g,'').toLowerCase();
  let count1 = {},
  count2 = {};

  if (str1.length !== str2.length) {
    return false
  }
  for (const char of str1) {
    count1[char] ? count1[char] += 1 : count1[char] = 1;
  }
  for (const char of str2) {
    count2[char] ? count2[char] += 1 : count2[char] = 1; 
  }

  for (const char in count1) {
    if (count1[char] !== count2[char]) {
      return false
    }
  }
  return true;
}

console.log(areAnagrams('listen', 'silent'))

// 21. Find missing numbers in the array

function findMissingNumber(arr) {
  const n = arr.length + 1;

  const totalSum = (n * (n + 1)) / 2;

  const arraySum = arr.reduce((acc, num) => acc + num ,0);

  return totalSum - arraySum;
}

console.log(findMissingNumber([1,2,4,5]))

// 22. Find intersections

function intersection(arr1, arr2) {
  const newArr1 = new Set(arr1);
  const result = arr2.filter(item => newArr1.has(item));
  return [...new Set(result)];
}

console.log(intersection([1,2,2,1], [2,2]))

// 23. Rotate array

function rotateArray(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k-1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Method 2

function rotateArrayByK(arr, k) {
  for (let i = 0; i < k; i += 1) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    let popElement = arr.pop();
    arr.unshift(popElement);
  }
  return arr;
}

console.log(rotateArrayByK([1,2,3,4,5], 2))

// 24. have 1 unsorted array, like a shuffled element from positive integers, re-arrange it as 1st digit should be highest num and the 2nd should be the lowest integer and then the 3rd digit will be the second highest integer num and 4th should be second lowest integer number and so on

function sortArray(arr) {
  arr.sort((a,b) => a - b);

  let result = [],
  start = 0,
  end = arr.length - 1;

  for (let i = 0; i < arr.length; i += 1 ) {
    if (i % 2 === 0) {
      result.push(arr[end]);
      end--;
    } else {
      result.push(arr[start]);
      start++;
    }
  }
  return result;

}

console.log(sortArray([6, 3, 7, 8, 12, 5, 22, 1]))

output: [22,1,12,3,8,5,7,6]


// 25. Write a function which loops through an array and checks if n of the elements

// of the array satisfy the condition function that is passed
// Signature of the 'some' function

// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy
// Signature of the 'isEven' and 'isPrime' functions. They should take one integer as input and return a true or false value.

// (int) -> trueOrFalse

// Write the some function and isEven and isPrime functions

function isEven(num) {
  return num % 2 === 0;
}

function isPrimeN(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
}
function some(array, n, conditionFunction) {
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (conditionFunction(array[i])) {
      count++;
    }
    if (count >= n) {
      return true;
    }
  }
  return false;
}

console.log(some([2,4,6], 3, isEven)) // should print true
console.log(some([2,3,4], 3, isEven)) // should print false
console.log(some([2,3,11], 4, isPrimeN)) // should print false
console.log(some([2,3,5,9], 3, isPrimeN)) // should print true


// 26. Write a function whch returns a function that generates fibonacci numbers.
// Don't use generators.


// Example: (When you run the following code, don't change anything)

function createFibonacciGenerator() {
  let a = 0, b = 1;

  return function() {
    let current = a;
    [a, b] = [b, a + b];
    return current;
  }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator()); // 0
console.log(fibonacciGenerator()); // 1
console.log(fibonacciGenerator()); // 1
console.log(fibonacciGenerator()); // 2
console.log(fibonacciGenerator()); // 3
console.log(fibonacciGenerator()); // 5
console.log(fibonacciGenerator()); // 8


// 27. create Counter


function counter() {
  let count = 0;

  return function() {
    count += 1;
    return count;
  }
}

let count = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 28. Range generator

function createrangeGenerator (start, end) {
  let current = start;
  return function () {
    if (current <= end) {
      return current += 1;
    }
    return undefined;
  }
}


let rangeGenerator = createrangeGenerator(3,6);

console.log(rangeGenerator()) // 3
console.log(rangeGenerator()) // 4
console.log(rangeGenerator()) // 5
console.log(rangeGenerator()) // 6
console.log(rangeGenerator()) // undefined
console.log(rangeGenerator()) // undefined

// 29. Power Generator

function createPowerGenerator(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  }
}

let square = createPowerGenerator(2),
cube = createPowerGenerator(3);

console.log(square(3)) // 9
console.log(cube(2)) // 8

// 30. sum Calculator

function sumCalculator() {
  let total = 0;
  return function(value) {
    total += value;
    return total;
  }
}

let sum = sumCalculator();
console.log(sum(5)) // 5
console.log(sum(2)) // 7
console.log(sum(-3)) // 4


// 31. Multiplication table

function createMultiplicationTable(n) {
  return function(base) {
    for (let i = 1; i <= n; i += 1) {
      console.log(`${base} x ${i} = ${base * i}`);
    }
  }
}

let table = createMultiplicationTable(5);
table(2)

// 32. const array = ["2A","3B","4C"]; convert this array
// output : [AA, BB, CCCC]

const arr = ['2A', '3B', '4C'];
const output = [];

arr.forEach(val => {
  let num = parseInt(val);
  let char = val.replace(num, '');
  return output.push(char.repeat(num));
});

console.log(output);

//33. Compress String (Run Length Encoding)

// Input: "aaabbc"
// Output: "a3b2c1"

const inputVal = 'aaabbc';
let outputVal = '',
countN = 1;

for (let i = 0; i <= inputVal.length - 1; i += 1) {
  if (inputVal[i] === inputVal[i + 1]) {
    countN++;
  } else {
    outputVal += inputVal[i] + countN;
    countN = 1; 
  }
}

console.log(outputVal);

// 34. Expand Encoded String

// Input: "a3b2c1"
// Output: "aaabbc"

const strVal = 'a3b2c1';
let result = '';

for (let i = 0; i < strVal.length; i += 2) {
  const char = strVal[i];
  const count = Number(strVal[i + 1]);
  result += char.repeat(count);
}

console.log(result);

// 35. Reverse Each Word in a Sentence

// Input: "hello world"
// Output: "olleh dlrow"

const strV = 'Hello World';

const resultV = strV.split(" ").map(word => {
  let reversed = '';

  for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i];
  }
return reversed;
}).join(" ");

console.log(resultV)

// 36. Find average of given array

const arrayA = [{Name : 'semester1', total: 8.7}, {Name: 'semester2', total: 7.5}];

const average = arrayA.reduce((sum, item) => sum + item.total, 0)/ arrayA.length;

console.log(average);

// 37. Count Vowels

function countVowels(str) {
  const vowels = 'áeiouAEIOU';
  let count = 0;

  for (let i = 0; i <= str.length - 1; i += 1) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels('hello world'));

// 38. Find totalPrice when category is Electroncis and status not returned

const orders = [
  { id: 1, category: 'Electronics', price: 500,  status: 'shipped' },
  { id: 2, category: 'Clothing',    price: 50,   status: 'shipped' },
  { id: 3, category: 'Electronics', price: 1200, status: 'returned' },
  { id: 4, category: 'Electronics', price: 150,  status: 'shipped' },
  { id: 5, category: 'Books',       price: 20,   status: 'shipped' }
];

const totalPrice = orders.reduce((acc, item) => {
  if (item.category === 'Electronics' && item.status !== 'returned') {
    return acc + item.price;
  }
  return acc;
}, 0);

console.log(totalPrice); 

//39. Capitalize first letter of each word

const str = "My name is venkatachalam";

const result1 = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(result1);

//output : My Name Is Venkatachalam

// Create a typeahead search in react similar to google 

import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState([]);
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    fetchApi();
  }, [typedText]);

  const fetchApi = async () => {
    const response = await fetch(`https://api.datamuse.com/sug?s=${typedText}`);
    const result = await response.json();
    setText(result);
  };

  const handleChange = (e) => {
    setTypedText(e.target.value);
    setText(text.filter((char) => typedText.includes(char)));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {text.map((item) => (
          <li>{item.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


//Add Instruction List

const InstructionBoard = () => {
  const [instruction, setInstruction] = useState("");
  const [instructionList, setInstructionList] = useState([]);

  const handleClickAdd = () => {
    setInstructionList([...instructionList, instruction]);
  };

  const handkeClickUp = (index) => {
    if (index <= 0) return;
    const newList = [...instructionList];
    [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
    setInstructionList(newList);
  };

  const handleClickDown = (index) => {
    if (index === instructionList.length - 1) return;
    const newList = [...instructionList];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    setInstructionList(newList);
  };
  return (
    <div>
      <h2>Instruction Board</h2>
      <input
        type="text"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
      />
      <button onClick={handleClickAdd}>Add Instruction</button>
      <ul>
        {instructionList.map((list, index) => (
          <li key={index}>
            <span>{index + 1} </span>
            <span>{list}</span>
            <button disabled={index === 0} onClick={() => handkeClickUp(index)}>
              MoveUp
            </button>
            <button
              onClick={() => handleClickDown(index)}
              disabled={index === instructionList.length - 1}
            >
              MoveDown
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstructionBoard;

// HOC

const HocWithAuth = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    let isAuthenticated = false;
    const user = { name: "venkat", role: "Admin" };

    if (!isAuthenticated) {
      return (
        <div>
          <span>Please Login</span>
        </div>
      );
    }
    return <WrappedComponent {...props} user={user} />;
  };
};

const Dashboard = ({ user }) => {
  return (
    <div>
      <p>Welcome user, {user.name}</p>
    </div>
  );
};

export default HocWithAuth(Dashboard);

const data = [
{
	name:'Jems',
	car:'Maruti',
	value:'400000'
},
{
	name:'Mark',
	car:'Maruti',
	value:'490000'
},
{
	name:'Jems',
	car:'tata',
	value:'590000'
},
{
	name:'Preet',
	car:'hundai',
	value:'790000'
}
]












// https://onecompiler.com/javascript/42qygaerg