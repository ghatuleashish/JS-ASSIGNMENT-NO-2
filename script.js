// Question 1:
// Write a program to search if a number exists in an array. If the number exists
// then return the position. If it exists multiple time then return an array with all the
// positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

function positionOfElement(arr, element_position) {
    let positions = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element_position) {
            positions.push(i);
        }
    }
    if (positions.length === 0) {
        return -1;
    } else if (positions.length === 1) {
        return positions[0];
    } else {
        return positions;
    }
}
let arr1 = [1, 2, 3, 4, 5, 1, 3];
console.log("The element is found at the index: ")
console.log(positionOfElement(arr1, 4));
console.log("The element is found at the index: ")
console.log(positionOfElement(arr1, 1));
console.log("The element is found at the index: ")
console.log(positionOfElement(arr1, 7));

console.log("\n\n\n")
console.log("Q1 End ****************************************************************")
console.log("\n\n\n")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

function number_pattern(num) {
    for (let i = 1; i <= num ; i++) {
        let line = '';
        for (let j = 5; j >= i; j--) {
            line += j;
        }
        console.log(line);
    }
}
number_pattern(5);


console.log("\n\n\n")
console.log("Q2 End ****************************************************************")
console.log("\n\n\n")

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

let arr = [3, 2, 1, 4, 5, 45];
arr.sort((a, b) => a - b);
console.log("The array after sorting is :", arr);

console.log("\n\n\n")
console.log("Q3 End ****************************************************************")
console.log("\n\n\n")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings
// which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False


function tFOfStr(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let count = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    for (let char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }
    return true;
}
console.log(tFOfStr('LISTEN', 'SILENT'));
console.log(tFOfStr('HELLO', 'JELLO'));



console.log("\n\n\n")
console.log("Q4 End ****************************************************************")
console.log("\n\n\n")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("The atring after reverse is :")
console.log(reverseString('Hello'));





console.log("\n\n\n")
console.log("Q5 End =========================================")

