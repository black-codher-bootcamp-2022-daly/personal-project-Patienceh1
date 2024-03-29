import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      opacity:"0.2",
      width: 400,
    },
  };
  
  function ModalFunc(props) {
    const {book} = props
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
      <div className="App">
        <button onClick={setModalOpen}>Open Modal</button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
          <div>
       
          </div>
          <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ModalFunc;

  