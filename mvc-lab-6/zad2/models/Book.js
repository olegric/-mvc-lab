class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return books;
    }
}

const books = [
    new Book(1, "Book One", "Author One", 2020),
    new Book(2, "Book Two", "Author Two", 2021),
    new Book(3, "Book Three", "Author Three", 2022),
    new Book(4, "Book Four", "Author Four", 2023),
    new Book(5, "Book Five", "Author Five", 2024)
];

module.exports = Book;
