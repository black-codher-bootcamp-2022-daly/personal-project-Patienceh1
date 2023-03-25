import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  console.log(props);
const {book} = props
  return (
    <div>
      <ul>
        <h2>{book.volumeInfo.title}</h2>
        <h3>{book.volumeInfo.authors}</h3>
        <p>{book.volumeInfo.description}</p>
        <h2>
          {book.saleInfo.retailPrice?.amount}
          {book.saleInfo.retailPrice?.currencyCode}
        </h2>
        <img
          src={book.volumeInfo.imageLinks.smallThumbnail}
          alt={book.volumeInfo.title}
        />
      </ul>
      <button onClick={() => props.onClick(props.id)}> { props.isInTheBasket ? "Remove" : "Add +"}</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string,
  hanldleClick: PropTypes.func,
  isInTheBasket: PropTypes.bool,
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),

    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export default Book;
