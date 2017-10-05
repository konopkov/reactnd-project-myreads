import React from 'react';
import BooksGrid from './BooksGrid'

const BookShelf = (props) => {

    const books = props.books;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} onHandleChange={props.onHandleChange}/>
            </div>
        </div>
    )
};

export default BookShelf