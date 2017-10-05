import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf'

class ListBooks extends Component {

    render() {

        const books = this.props.books;
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
                                       onHandleChange={this.props.onHandleChange}/>
                        ))}
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