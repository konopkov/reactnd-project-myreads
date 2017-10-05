import React from 'react';
import Book from './Book'

const BooksGrid = (props) => {

    const books = props.books;

    return (
        <ol className="books-grid">
            {books.map((book) => (
                <li key={book.id}>
                    <Book book={book} onHandleChange={props.onHandleChange}/>
                </li>
            ))}
        </ol>
    )
};

export default BooksGrid