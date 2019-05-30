import React from 'react';
import PropTypes from 'prop-types';

const styleItem = {
  display: 'block',
  width: '400px',
  height: 'auto',
  fontSize: 16,
  fontFamily: 'inherit',
};

const BookListItem = ({
  title = '',
  description = '',
  authors = '',
  publisher = '',
  publishedDate = '',
  pageCount = 0,
}) => (
  <div style={styleItem}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>author:{authors}</p>
    <p>publisher:{publisher}</p>
    <p>date:{publishedDate}</p>
    <p>{pageCount} pages</p>
  </div>
);

BookListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
};
export default BookListItem;
