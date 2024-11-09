let library = [
  {
    title: "1984",
    author: "George Orwell",
    isAvailable: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: true,
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    isAvailable: true,
  },
];

console.log("Library:", library);

function displayAvailableBooks(library) {
  console.log("Available books today");
  library.forEach((book) => {
    if (book.isAvailable) {
      console.log("Title: ", book.title);
    }
  });
}

displayAvailableBooks(library);

function borrowBook(title) {
  const book = library.find((book) => book.title === title);

  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log(`You have borrowed "${book.title}".`);
    } else {
      console.log(`"${book.title}" is already borrowed.`);
    }
  } else {
    console.log(`"${title}" not found in the library.`);
  }
}

borrowBook("1984");

console.log("Updated Library:", library);
