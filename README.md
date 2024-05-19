# js-for-react-native-11047613
This repository contains some functions in JavaScript in these files; array manipulation.js and userInfo.js.

## arrayManipulation.js

This file contains two functions in two Tasks:
Task 1 : `processArray`
Takes an array of numbers and returns a new array where each even number is squared and each odd number is tripled.

Task 2 : `formatArrayStrings` 
Takes two arrays - an array of strings and an array of numbers processed by `processArray`. It modifies each string based on its corresponding number: capitalizing the entire string if the number is even and converting the string to lowercase if the number is odd.

## userInfo.js

This file contains a function `createUserProfiles` for Task 3 that takes an array of names and an array of modified names. It returns an array of objects, each containing the original name, modified name, and an auto-incremented id starting from 1.

## Usage of Files

To use these functions, you can import them into your JavaScript files:

```javascript
const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');


The remaining task involves uploading the work to GitHub and submitting it in a compressed file.
