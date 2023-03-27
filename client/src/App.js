import React, { useState, useEffect } from "react";
import  "./index.css"
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllBooks } from "./services/bookService";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Book from "./components/Book";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState();
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  function addBook(id) {
    console.log(`The book was clicked:` + id);
  }
  useEffect(() => {
    async function getBooks() {
      if (!books) {
        const response = await getAllBooks();
        setBooks(response);
      
      }
    }

    getBooks();
  }, [books]);
  console.log(books)

  function addBookToCart(book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  const renderBook = (book) => {
    return <>
   
    </>
    
  };

  return (
    <>
    <Header/>
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
              { books && books.length > 0 ? books.map((book) =>  (
                <Book className="inline-flex"
                  handleClick={addBook}
                  onClick={() => addBookToCart(book)}
                  id={book.id}
                  book={book}
                  key={book.id}
                />
              )): "No books found"}
            </Container>
          }
        />
        <Route
          path="/Bookcase"
          element={<Bookcase books={basket} />}
        />
        <Route path="/About" element={<h1> About</h1>} />
      </Routes>
      </>
  );
}

export default App;
