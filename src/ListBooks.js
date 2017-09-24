import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render(){

        const books = this.props.books;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName='Currently Reading'
                                   books={books.filter((book) => book.shelf === 'currentlyReading')}
                        />
                        <BookShelf shelfName='Want to Read'
                                   books={books.filter((book) => book.shelf === 'wantToRead')}
                        />
                        <BookShelf shelfName='Read'
                                   books={books.filter((book) => book.shelf === 'read')}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks