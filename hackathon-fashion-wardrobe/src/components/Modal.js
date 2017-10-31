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
            {" "}
            <UpdateItem index={this.props.index} />
          </div>
          <button className="closeModalButton" onClick={this.handleCloseModal}>
            Close Modal
          </button>
        </ReactModal>
      </div>
    );
  }
}
