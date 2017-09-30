import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BooksGrid from "./BooksGrid";


class SearchBooks extends Component {

    constructor() {
        super();
        this.state = {
            searchResults: [],
        };

        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks(e) {
        e.preventDefault();

        const query = e.target.value;
        const myBooks = this.props.myBooks;
        let findBook = (book, myBooks) => {

            myBooks.find((bookToFind) => bookToFind.id === book.id)
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

                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <div className='search-books-input-wrapper'>
                        <input onChange={this.searchBooks}
                               type="text" name="query"
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.searchResults} onHandleChange={this.props.onHandleChange}/>
                </div>
            </div>
        )
    }


}

export default SearchBooks