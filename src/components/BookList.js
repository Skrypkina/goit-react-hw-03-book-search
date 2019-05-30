import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from './BookListItem';

const styled = {
  listStyle: 'none',
  display: 'flex',
  width: '1000px',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const styledItem = {
  float: 'left',
  margin: '4px 10px 2px 0px',
  border: '1px solid #CCC',
  padding: '6px',
};

const BookList = ({ items }) => (
  <ul style={styled}>
    {items.map(item => (
      <li key={item.id}>
        <img
          alt={item.volumeInfo.title}
          src={item.volumeInfo.imageLinks.thumbnail}
          style={styledItem}
        />
        <BookListItem {...item.volumeInfo} />
      </li>
    ))}
  </ul>
);
BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      authors: PropTypes.array,
      publisher: PropTypes.string,
      publishedDate: PropTypes.string,
      pageCount: PropTypes.number,
    }),
  ).isRequired,
};

export default BookList;
