'use strict'

const SENTENCE = 'The strength of JavaScript is that you can do anything. The weakness is that you will.';

console.log('The whole sentence:', SENTENCE);

console.log('The length of the string:', SENTENCE.length);

console.log('The position of the word "JavaScript":', SENTENCE.indexOf("JavaScript"));

console.log('The position of the last \'is\':', SENTENCE.lastIndexOf("is"));
var position=SENTENCE.indexOf(".");
console.log('The last sentence only:', SENTENCE.substr(position+1));

console.log('The 10 characters starting from the 17th character:', SENTENCE.substr(17,10));
var words=SENTENCE.split(" ");
console.log('The number of words in the whole phrase:', words.length);

console.log('The 61st character:', SENTENCE.charAt(61));

console.log('Replace \'you\' with \'I\' in the whole phrase:', SENTENCE.replace(new RegExp("you","g"),"I"));
