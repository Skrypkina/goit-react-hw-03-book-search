import React, { Component } from 'react';
import genres from '../genres.json';

const styledForm = {
  display: 'block',
  margin: '0 auto',
  width: '800px',
  height: '80px',
  padding: '100px 0 0 100px',
};

const styledInput = {
  width: '180px',
  height: '30px',
  border: '1px solid lightgrey',
  fontSize: '16px',
  marginRight: '8px',
};

const styledSelect = {
  width: '160px',
  height: '30px',
  fontSize: '16px',
  marginRight: '8px',
};
const btn = {
  display: 'inline-block',
  width: '100px',
  height: '35px',
  textAlign: 'center',
  textDecoration: 'none',
  margin: '2px 0',
  border: 'solid 1px transparent',
  borderRadius: '4px',
  padding: '0.5em 1em',
  color: '#ffffff',
  backgroundColor: '#9555af',
  fontSize: '16px',
};

export default class SearchForm extends Component {
  state = { query: '', category: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    /* eslint-disable-next-line */
    this.props.onSubmit(this.state.query, this.state.category);

    this.setState({ query: '' });
  };

  render() {
    const { query, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={styledForm}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          style={styledInput}
        />
        <select
          value={category}
          onChange={this.handleCategoryChange}
          style={styledSelect}
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button type="submit" style={btn}>
          Search
        </button>
      </form>
    );
  }
}
