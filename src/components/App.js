import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Loader from './Loader';
import * as Api from '../services/api';
import BookList from './BookList';

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = (query, category) => {
    this.setState({ isLoading: true });
    Api.fetchBooks(query, category)
      .then(data => this.setState({ books: data.data.items }))
      .catch(err => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { books, isLoading } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.fetchBooks} />
        {isLoading ? <Loader /> : <BookList items={books} />}
      </div>
    );
  }
}
