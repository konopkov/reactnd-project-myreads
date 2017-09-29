import React, {Component} from 'react';
import BooksGrid from './BooksGrid'

class BookShelf extends Component {

    render() {

        const books = this.props.books;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={books} onHandleChange={this.props.onHandleChange}/>
                </div>
            </div>
        )
    }
}

export default BookShelf