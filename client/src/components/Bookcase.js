import React from "react";
import {Book} from "./Book";


export default function Bookcase({ books, removeBookFromCart }) {
  console.log(books)
  return (
    <div className="">
      {books[0] ? (
        <div>
          <h1>Cart</h1>
          <h1>{books.length}</h1>
          {books.map((book) => (
            <Book book={book} removeBookFromCart={removeBookFromCart} key={book.id} inBasket={true} />
          ))}
        </div>
      ) : (
        <h1>No books yet</h1>
      )}
    </div>
  );
}