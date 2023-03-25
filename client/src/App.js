import React, { useState, useEffect } from "react";
//import data from "./models/books.json";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllBooks } from "./services/bookService";

function App() {
  const [books, setBooks] = useState();
  useEffect(() => {
    async function getBooks() {
      if (!books) {
        const response = await getAllBooks();
        setBooks(response);
      }
    }

    getBooks();
  }, [books]);

  const renderBook = (book) => {
    return 
    // (
    //   // <li key={user._id}>
    //   //   <h3>
    //   //     {`${user.first_name} 
    //   //     ${user.last_name}`}
    //   //   </h3>
    //   //   <p>{user.location}</p>
    //   // </li>
    // );
  };

  return (
    <div>
      <ul>
        {books && books.length > 0 ? (
          books.map((book) => renderBook(book))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
