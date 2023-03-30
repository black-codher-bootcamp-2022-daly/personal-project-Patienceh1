import React, { useState, useEffect } from "react";
import "./index.css";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllBooks } from "./services/bookService";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import { Book } from "./components/Book";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
import Modal from "./components/Modal";

function App() {
  const [books, setBooks] = useState();
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  // function addBook(id) {
  //   console.log(`The book was clicked:` + id);
  // }
  useEffect(() => {
    async function getBooks() {
      if (!books) {
        const response = await getAllBooks();
        setBooks(response);
      }
    }

    getBooks();
  }, [books]);
  console.log(books);

  function addBookToCart(book) {
    console.log(book);
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  const removeBookFromCart = (id) => {
    const newItems = [];
    basket.forEach((books) => {
      if (books.id === id) {
        newItems.push(books);
      }
      return books;
    });

    setBasket(newItems);
  };

  // function removeBookFromCart(book) {
  //   const removeFromCart = [];
  //   basket.forEach((book) => {
  //     if (book) {
  //       removeFromCart.push(books);
  //     }
  // })

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  return (
    <>
      <Header />

      <Routes>
        <Route
          index
          path="/"
          element={
            <Container className="bookcase-Container">
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
              />
              {books && books.length > 0
                ? books.map((book) => (
                    <Book
                      className="inline-flex"
                      removeBookFromCart={removeBookFromCart}
                      addBookToCart={addBookToCart}
                      id={book.id}
                      book={book}
                      key={book.id}
                    />
                  ))
                : "No books found"}
            </Container>
          }
        />
        <Route
          path="/Bookcase"
          element={
            <Bookcase books={basket} removeBookFromCart={removeBookFromCart} />
          }
        />
        <Route
          path="/About"
          element={
            <div className="">
            <h3 className="font-medium text-center text-lg">
              Welcome to BookScope! <br/> In this application you can browse for books
              in the catalogue or search for books in the search bar. If you
              like a book, add it to the cart. If you change your mind, simply
              remove the item from the basket. If you would like more
              information on a book, click on more information. There you will
              see a description of the book.
            </h3>
            </div>
          }
        />
      </Routes>
    </>
  );
}
export default App;
