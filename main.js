// Variable Declarations
const display = document.querySelector(".display"); // Container for displaying books
const dialogShow = document.querySelector("[data-dialog-show]"); // Button to show dialog
const dialogClose = document.querySelector("[data-dialog-close]"); // Button to close dialog
const dialog = document.querySelector("[data-dialog]"); // Dialog element
const myForm = document.getElementById("myForm"); // Form element
const submit = document.querySelector('button[type="submit"]'); // Submit button
const reset = document.querySelector(".btn-reset"); // Reset button
const displaybook = document.querySelector(".btn-display"); // Display books button
let myLibrary = []; // Array to store books in the library

// Event Listener for Reset Button
reset.addEventListener("click", () => {
  myLibrary = []; // Clear the library array
  display.innerHTML = ""; // Clear the display container
});

// Function to Validate Form Input
function validateForm(event) {
  // Get form input values
  const titleInput = document.querySelector('input[name="Title"]').value;
  const authorInput = document.querySelector('input[name="Author"]').value;
  const pagesInput = document.querySelector('input[name="Pages"]').value;
  const readInput = document.querySelector('input[name="option"]:checked');

  // Perform validation
  while (
    titleInput === "" ||
    authorInput === "" ||
    pagesInput === "" ||
    readInput === null
  ) {
    //Disable the submit button
    submit.disabled = true;
    alert("Please fill out all required fields.");
    return;
  }

  // If all fields are filled,enable submit button and create the book
  submit.disabled = false;

  let book = `book${myLibrary.length}`;
  book = new Book(authorInput, titleInput, pagesInput, readInput.value);
  addBookToLibrary(book);
  CreateCard(book);
  alert("Book added");
  myForm.reset();
}

// Event Listener for Submit Button
submit.addEventListener("click", (event) => {
  event.preventDefault();
  validateForm(event);
});

// Event Listener for Dialog Show Button
dialogShow.addEventListener("click", () => {
  dialog.showModal();
});

// Event Listener for Dialog Close Button
dialogClose.addEventListener("click", () => {
  dialog.close();
});

// Event Listener for Display Books Button
displaybook.addEventListener("click", () => {
  if (myLibrary.length > 0) {
    displayFunc();
  } else {
    alert("No books in the library.");
  }
});

// Book Constructor Function
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  read === "yes" ? (this.read = "✓") : (this.read = "X");
}

// Toggle method added to the Book prototype
Book.prototype.toggle = function () {
  this.read = this.read === "X" ? "✓" : "X";
};

// Function to Add Book to Library
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Function to Display Books
function displayFunc() {
  display.classList.remove("hidden");
}

// Function to Create Book Card
function CreateCard(book) {
  display.classList.add("hidden");
  let index = myLibrary.indexOf(book);
  let card = document.createElement("div");

  card.classList.add(`card${index}`);
  card.classList.add("card");

  display.appendChild(card);
  let list = document.createElement("ul");
  list.classList.add("list");
  list.classList.add(`list${index}`);

  let a = [book.title, book.author, book.pages, book.read];
  let labels = ["Title", "Author", "Pages", "Read"];
  let liElements = [];
  // Create list items for book details
  for (let index = 0; index < 4; index++) {
    let liElement = document.createElement("li");
    liElement.id = `${index}`;
    if (index === 0) {
      liElement.innerHTML = `<h3>${labels[index]}: ${a[index]}</h3>`;
    } else {
      liElement.textContent = `${labels[index]}: ${a[index]}`;
    }
    list.appendChild(liElement);
    liElements.push(liElement);
  }

  card.appendChild(list);

  // Button to delete book
  let deleteBook = document.createElement("button");
  deleteBook.classList.add(`deletebook${index}`);
  deleteBook.textContent = "Remove";
  deleteBook.style =
    "background-color: #04AA6D; padding: 1rem 1.5rem; font-size: 1rem;";

  // Event Listener for deleting book
  deleteBook.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    card.remove();
  });
  card.appendChild(deleteBook);

  // Button to toggle reading a book
  let toggleRead = document.createElement("button");

  toggleRead.classList.add(`toggleread${index}`);
  toggleRead.textContent = "Toggle Read";
  toggleRead.style =
    "background-color: #04AA6D; padding: 1rem 1.5rem; font-size: 1rem;";

  // Event Listener for toggling read status
  toggleRead.addEventListener("click", () => {
    book.toggle();
    liElements[3].textContent = `Read: ${book.read}`;
  });
  card.appendChild(toggleRead);
}
