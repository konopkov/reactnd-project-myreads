import React, {Component} from 'react';
import Book from './Book'

class BooksGrid extends Component {

    render() {

        const books = this.props.books;

        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={book.id}>
                        <Book book={book}/>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid