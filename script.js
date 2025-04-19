// PART 1: FOR LOOPS
// Problem 1: Count to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Problem 2: Even Numbers
let numTwenty = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 1; i < numTwenty.length; i += 2) {
  console.log(numTwenty[i]);
}

// Problem 3: Loop through an Array
let animals = ["dog", "cat", "rabbit", "parrot"];

for (pets of animals) {
  console.log("I like " + pets + "s.");
}

// Problem 4: Reverse Array Output
let colors = ["red", "green", "blue", "yellow"];

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// PART 2: OBJECTS
// Problem 5: Simple Object

let person = {
  firstName: "Piper",
  age: 20,
  favoriteColor: "green",
};

console.log(
  "My name is " +
    person.firstName +
    ". I am " +
    person.age +
    " years old and my favorite color is " +
    person.favoriteColor +
    "."
);

// Problem 6: Modify an Object (add hobby to person object using dot notation)

person.hobby = "drawing";

console.log(
  "My name is " +
    person.firstName +
    ". I am " +
    person.age +
    " years old, my favorite color is " +
    person.favoriteColor +
    " and I love " +
    person.hobby +
    "."
);

// Problem 7: Array of Ojects

let books = [];

books.push({
  title: "Pet Sematary",
  author: "Stephen King",
  pageCount: 416,
});
books.push({
  title: "The Last Wish",
  author: "Andrzej Sapkowski",
  pageCount: 360,
});
books.push({
  title: "Angela's Ashes",
  author: "Frank McCourt",
  pageCount: 368,
});

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  console.log(`${book.title} by ${book.author} - ${book.pageCount} pages. `);
}

// Problem 8: Favorite Book Finder

books[0].isFavorite = true;

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  if (book.isFavorite) {
    console.log(`${book.title} is my favorite.`);
  }
}

// Bonus Challenge

person = [(firstName = "Jax"), (age = 11), (hobby = "gaming")];

function describePerson(person) {
  for (let i = 0; i < 1; i++) {
    console.log(firstName + " is " + age + " and loves " + hobby + ".");
  }
}

describePerson(person);
