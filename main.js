//Book Class: Represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI tasks

class UI {
    static displayBooks() {
        const storedBooks = [{
                title: 'Caucasian Chalk Circle',
                author: 'Ted Omondi',
                isbn: '37467y8347'
            },
            {
                title: 'When The Sun Goes Down',
                author: 'Yvonne Sanchez',
                isbn: '37467y8347'
            },
            {
                title: 'The River And The Source',
                author: 'Margaret Ogola',
                isbn: '37467y8347'
            }
        ];

        const books = storedBooks;
        books.forEach((book) =>
            UI.addBookToList(book)
        );
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td href="#" class = "btn btn-danger btn-sm delete">X</td>
        `;

        list.appendChild(row);
    }


}
// Store Class: Handle Storage

//Event: Display Book


document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add A Book

document.querySelector("#book-form").addEventListener('submit', (e) => {
    //get form value 
   e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;


    //Instantiate a book

    const book = new Book(title,author,isbn);
    console.log(book)
} );


//Event: Remove a Book :