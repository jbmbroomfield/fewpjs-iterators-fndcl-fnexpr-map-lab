const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCasedWord = word => word[0].toUpperCase() + word.slice(1) // Takes a single word and returns a new copy of it with the first letter upper case.

const titleCasedString = s => s.split(' ').map(titleCasedWord).join(' ') // Takes a string a returns a new copy of it with each word upper case.

const titleCased = () => tutorials.map(titleCasedString) // Returns tutorials with the first letter of each word of each element upper case.