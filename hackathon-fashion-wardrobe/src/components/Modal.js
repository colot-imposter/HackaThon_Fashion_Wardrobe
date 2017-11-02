import React, { Component } from "react";
import ReactModal from "react-modal";

import UpdateItem from "../containers/update";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
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
        <button className="updateButtonModal" onClick={this.handleOpenModal}>
          Update Item
        </button>

        {/* <this.props.IMAGESOURCE>
          will be mapping over our data and */}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div className="updateItem">
            <h2>Update Item</h2> <UpdateItem index={this.props.index} />
          </div>
          <div className="bodyButton">
            <button
              className="closeModalButton"
              onClick={this.handleCloseModal}
            >
              Close
            </button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
