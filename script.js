// PART 1: FOR LOOPS
//Problem 1: Count to 10
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//Problem 2: Even Numbers
// let numTwenty = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for (let i = 1; i < numTwenty.length; i += 2 ) {
//     console.log(numTwenty[i]);
// }

//Problem 3: Loop through an Array
// let animals = ["dog", "cat", "rabbit", "parrot"];

// for (pets of animals) {
//   console.log("I like " + pets + "s.")
// }

//Problem 4: Reverse Array Output
// let colors = ["red", "green", "blue", "yellow"];

// for (let i = colors.length -1; i >= 0; i--) {
//   console.log(colors[i])
// }

// PART 2: OBJECTS
// Problem 5: Simple Object

// let person = {
//     firstName: "Piper",
//     age: 20,
//     favoriteColor: "green"
// }

// person.hobby = "Drawing"

// console.log(person)

// console.log("My name is " + person.firstName + ". I am " + person.age + " years old and my favorite color is " + person.favoriteColor + ".")

// Problem 6: Modify an Object (add hobby to person object using dot notation)

// Problem 7: Array of Ojects

let books = [];

for (let i = 0; i < 1; i++) {
  newBook1 = {
    title: "Pet Sematary",
    author: "Stephen King",
    pageCount: 416,
    isFavorite: true
  };
  newBook2 = {
    title: "The Last Wish",
    author: "Andrzej Sapkowski",
    pageCount: 360,
  };
  newBook3 = {
    title: "Angela's Ashes",
    author: "Frank McCourt",
    pageCount: 368,
  };
  books.push(newBook1, newBook2, newBook3);
}

console.log(
  newBook1.title +
    " by " +
    newBook1.author +
    " - " +
    newBook1.pageCount +
    " pages."
);
console.log(
  newBook2.title +
    " by " +
    newBook2.author +
    " - " +
    newBook2.pageCount +
    " pages."
);
console.log(
  newBook3.title +
    " by " +
    newBook3.author +
    " - " +
    newBook3.pageCount +
    " pages."
);



// Problem 8: Favorite Book Finder

for (let i = 0; i < books.length; i++) {
  if (books[i].isFavorite === true) {
    console.log(books[i]);
  }
}
