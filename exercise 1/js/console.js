'use strict';

const temperature = 21.3;
const fruits = ['apple', 'pear', 'orange'];
console.clear();
console.log("Yo.");
console.log(temperature);
console.log(fruits);
console.log("The Temperature is",temperature);
console.log("The collection of fruits is",fruits);
console.log("<h1>No HTML interpreter</h1>");
console.log(18,"eighteen",true,null,undefined);
console.log("This is a group");
console.group();
console.log("Group Content");
console.groupEnd();
console.log("This is a second group (closed by default)");
console.group();
console.log("Content of the second group");