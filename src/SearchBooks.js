import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid';
import SearchBooksInput from './SearchBooksInput'


class SearchBooks extends Component {

    constructor() {
        super();
        this.state = {
            searchResults: [],
        };

        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(query) {
        const myBooks = this.props.myBooks;
        const findBook = (book, myBooks) => {

            return myBooks.find((bookToFind) => bookToFind.id === book.id)
        };

        if (query) {
            BooksAPI.search(query, 20).then(
                searchResults => {
                    if (!searchResults || searchResults.error) {
                        this.setState({searchResults: []})
                    } else {
                        searchResults.map(book => findBook(book, myBooks) ? book.shelf = findBook(book, myBooks).shelf : book.shelf = 'none');
                        this.setState({searchResults})
                    }
                },
                    error => {
                    this.setState({searchResults: []})
                })
        }
        else {
            this.setState({searchResults: []})
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link className='close-search' to='/'>Close</Link>
                    <SearchBooksInput searchBooks={this.searchBooks}/>

                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.searchResults} onHandleChange={this.props.onHandleChange}/>
                </div>
            </div>
        )
    }


}

export default SearchBooks