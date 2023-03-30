import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { getAllBooks } from "../services/bookService";

Modal.setAppElement("#root");

export const Book = (props) => {
  // console.log(props);
  const [modalOpen, setModalOpen] = useState(false);
  const [books, setBooks] = useState();
  // const [bookShow, setBookShow] = useState();
  const [modalStateMap, setModalStateMap] = useState(new Map());

  function toggleModal(id) {
    console.log(id);
    const stateMap = new Map(modalStateMap);
    if (!stateMap.has(id)) {
      stateMap.set(id, true);
      console.log(stateMap);
    } else {
      stateMap.set(id, !stateMap.get(id));
      console.log(stateMap);
    }
    setModalStateMap(stateMap);

    // setIsOpen(!isOpen)
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

  const { book, id, inBasket } = props;
  console.log(book.inBasket);
  return (
    <div className=" content-center flex flex-row ... inline-flex items-baseline grid-cols-2 grid-rows-2 max-w-sm rounded overflow-hidden content-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <ul>
        <img
          src={book.volumeInfo?.imageLinks.smallThumbnail}
          alt={book.volumeInfo?.title}
        />
        <div>
          <p className="leading-3 font-semibold text-center text-cyan-900 text-base text-xs">
            {book.volumeInfo?.title}
          </p>
          <p className="leading-3 font-bold text-center text-cyan-900 text-base text-xs">
            {book.volumeInfo?.authors}
          </p>
          {/* <p>{book.volumeInfo.description}</p> */}
          <p className="text-center text-cyan-900 text-base text-xs">
            {book.saleInfo?.retailPrice?.amount}
            {book.saleInfo?.retailPrice?.currencyCode}
          </p>

          {/* <button
            className="hover:bg-white ... content-center bg-rose-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => props.onClick(props.id)}
          >
            {" "}
            {props.isInTheBasket ? "Remove" : "Add to cart"}
          </button> */}
          <div className="buttons">
        {inBasket ? (
          <button
            id="add-button"
            onClick={() => props.removeBookFromCart(book)}
            className="hover:bg-white ... content-center bg-rose-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {" "}
            Remove
          </button>
        ) : (
          <button id="add-button" onClick={() => props.addBookToCart(book)}
          className="hover:bg-white ... content-center bg-rose-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {" "}
            Add to basket
          </button>
        )}
      </div>
          <div>
            <button onClick={() => toggleModal(book.id)}>More info</button>
            {books &&
              books.map(({ id }) => (
                <Modal
                  style={customStyles}
                  isOpen={modalStateMap.has(id) ? modalStateMap.get(id) : false}
                  onRequestClose={() => toggleModal(id)}
                  data-id={id}
                  contentLabel="My dialogue"
                >
                  <div>
                    <div key={id}>
                      <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                      <h1>{book.volumeInfo.title}</h1>
                      <p>{book.volumeInfo.description}</p>
                    </div>
                  </div>
                  <button onClick={() => toggleModal(id)}>Close</button>
                </Modal>
              ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

// Book.propTypes = {
//   id: PropTypes.string,
//   hanldleClick: PropTypes.func,
//   isInTheBasket: PropTypes.bool,
//   book: PropTypes.shape({
//     volumeInfo: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       authors: PropTypes.array.isRequired,
//       description: PropTypes.string.isRequired,
//     }),

//     saleInfo: PropTypes.shape({
//       retailPrice: PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//       }),
//     }),
//   }),
// };

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 700,
  },
};

//  export function ModalFunc({books}) {

//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="App">
//       <button onClick={setModalOpen}>Open Modal</button>
//       <Modal
//         isOpen={modalOpen}
//         onRequestClose={() => setModalOpen(false)}
//         style={customStyles}
//       >
//         <div>
//       <h1>l</h1>
//         </div>
//         <button onClick={() => setModalOpen(false)}>Close Modal</button>
//     </Modal>
//   </div>
// );
// }
