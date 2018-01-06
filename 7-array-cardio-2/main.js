const people = [
  {name: 'Kait', year: 1992},
  {name: 'Karen', year: 1990},
  {name: 'Alex', year: 2000},
  {name: 'Rene', year: 1987},
  {name: 'Raul', year: 1987},
  {name: 'Maritza', year: 1994}
];

const comments = [
  {text: 'Love this', id: 1209873},
  {text: 'Love that too', id: 1234567},
  {text: 'Can\'t stop won\'t stop', id: 9833546},
  {text: 'I should not use contractions', id: 2433679},
  {text: 'Give me a sentence please', id: 9835640},
  {text: 'I don\'t know what I\'m doing' , id: 4827647}
];

// Some and Every checks
// Array.prototype.some() // is at least one person 19?
const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});

console.log({isAdult}); //Returns true because at least one person matches the criteria

// Array.prototype.every() // is everyone 19?
const allAdults = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});

console.log({allAdults}); //Returns false as not everyone is older than 19

// Array.prototype.find()
// Find is like Filter, but instead it returns only the first item you are looking for
// find the comment with ID 1234567
const comment = comments.find(comment => {
  return comment.id === 1234567;
});

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// Delete the comment with the ID of 1234567, multiple ways of deleting

const index = comments.findIndex(comment => comment.id === 1234567);
console.log(index);

// Delete outright
// comments.splice(index, 1);

// Make a new copy with only desired ones
const newComments = [
  ...comments.slice(0,index),
  ...comments.slice(index + 1)
];












