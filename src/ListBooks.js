import React from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf'

const ListBooks = (props) => {

    const books = props.books;
    const shelves = [{
        title: 'Currently Reading',
        name: 'currentlyReading'
    }, {
        title: 'Want to read',
        name: 'wantToRead'
    }, {
        title: 'Read',
        name: 'read'
    }];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map((shelf) => (
                        <BookShelf key={shelf.name}
                                   shelfTitle={shelf.title}
                                   books={books.filter((book) => book.shelf === shelf.name)}
                                   onHandleChange={props.onHandleChange}/>
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add book</Link>
            </div>
        </div>
    )
};

export default ListBooks