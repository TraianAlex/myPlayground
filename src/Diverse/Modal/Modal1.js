import React from "react";
import Modal from "react-modal";
import "./Modal1.css";

Modal.setAppElement("#root");

export class Modal1 extends React.Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    // const customStyles = {
    //   content : {
    //    top: '30%',
    //    left: '30%'
    //   }
    //  };

    return (
      <div className="App">
        <button type="button" className="modal-button" onClick={this.openModal}>
          Open Modal
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Demo Modal"
          // style={customStyles}
        >
          <h1>Modal Header</h1>
          <p>This is the modal content</p>
          <button
            type="button"
            className="modal-button"
            onClick={this.closeModal}
          >
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

// https://medium.com/javascript-in-plain-english/easiest-way-to-work-with-modals-in-react-1ece66c92ad1
