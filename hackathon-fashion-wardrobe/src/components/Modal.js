import React, { Component } from "react";
import ReactModal from "react-modal";

import UpdateItem from "./updateItem";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="updateButtonModal">Update Item</button>
        {/* <this.props.IMAGESOURCE>
          will be mapping over our data and */}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div className="updateItem">
            <UpdateItem />
          </div>

<<<<<<< HEAD
          <button className="closeModalButton" onClick={this.handleCloseModal}>
            Close Modal
          </button>
=======
          <button onClick={this.handleCloseModal} className="closeModal">Cancel</button>
>>>>>>> 0966429a90ee3d58a7ca92a7ec546f07e0f6f9cf
        </ReactModal>
      </div>
    );
  }
}
