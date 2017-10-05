import React, {Component} from 'react';
import {debounce} from 'throttle-debounce';


class SearchBooksInput extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.searchBooks = debounce(500, false, this.props.searchBooks);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.searchBooks(event.target.value)
    }

    render() {
        return (
            <input onChange={this.handleChange}
                   type="text"
                   value={this.state.value}
                   name="query"
                   placeholder="Search by title or author"
                   width='100%'
            />
        )
    }
}

export default SearchBooksInput