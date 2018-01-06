const dogs = [
  {name: 'Snickers', age: 2},
  {name: 'Hugo', age: 8},
];

function makeGreen() {
  const p = document.querySelector('#me');
  // p.style.color = '#BADA55';
  // p.style.fontSize = '50px';
  p.innerHTML = 'Check out the console to see some cool logging stuff!';
}

// Regular
console.log('Hi there, this is a normal log.');
// Interpolated
const coolVar = 'Value of coolVar';
console.log(`This is an interpolated log where the variable is name 'coolVar' but the value is '${coolVar}'.`);
// Styled
console.log('%c This is a styled log, font size 15px and blue color.', 'font-size:15px;color:blue;');
// Warning
console.warn('This is a warning.');
// Error
console.error('This is an error.');
// Info
console.info('This is an info snippet.');
// Testing
console.assert(1 === 2, 'That is wrong. Only throws this error if the initial assertion is wrong.');
// Clearing
// console.clear();
// View DOM elements
console.dir(document.querySelector('#me'));
// Grouping Together
dogs.forEach(dog => {
  // Start the group with console.group() and pass in a string. The string will be the "title" of the group
  // console.group(`${dog.name}`);
  // Can also start with console.groupCollapsed() which will have the info collapsed by default in the console
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.log(`That's ${dog.age * 7} years in dog years.`);
  // End the group by calling console.groupEnd() with the same string as you started
  console.groupEnd(`${dog.name}`);
});

// Count, keeps the count of whatever we ask it to in real time
console.count('Rene');
console.count('Kait');
console.count('Rene');
console.count('Rene');
console.count('Kait');
console.count('Kait');
console.count('Rene');
console.count('Rene');
console.count('Rene');
console.count('Kait');

// Timing
console.time('Fetching data.');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching data.');
    console.log(data);
  })

// Tables, assuming an array of objects w/ the same keys, displays a table of the objects
console.table(dogs);