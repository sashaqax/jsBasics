//

import Book from "./Book.js";
import EBook from "./EBook.js";

// create books
// example books_______________ 
//                             |
//                             V

const book1 = new Book("The Leopard", "Giuseppe Tomasi di Lampedusa", 1958);

const book2 = new Book("Christ Stopped at Eboli", "Carlo Levi", 1945);

const ebook1 = new EBook("The Name of the Rose", "Umberto Eco", 1980, "PDF");

// print info 

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

//use setters

ebook1.fileFormat = "EPUB";
ebook1.printInfo();

// find oldest book

const books = [book1, book2, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Oldest book:");
oldestBook.printInfo();

//create EBook from Book

const ebookFromBook = EBook.fromBook(book2, "MOBI");


ebookFromBook.printInfo();

export default Book;