import React from 'react'
import {Route} from 'react-router-dom';
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    handleChange = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            this.setState(previousState => ({
                books: previousState.books.filter(b => b.id !== book.id).concat([book])
            }))
        })
    };

    render() {
        return (
            <div className="app">

                <Route
                    exact path='/'
                    render={() => (
                        <ListBooks
                            books={this.state.books}
                            onHandleChange={this.handleChange}
                        />
                    )}
                />

                <Route
                    path='/search'
                    render={({history}) => (
                        <SearchBooks myBooks={this.state.books} onHandleChange={this.handleChange}/>
                    )}
                />

            </div>
        )
    }
}

export default BooksApp
