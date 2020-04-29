import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
  <Modal
    appElement={document.getElementById('app')}
    isOpen={props.modalOpen}
    onRequestClose={props.handleCloseConfirmationModal}
    contentLabel="Confirm"
    closeTimeoutMS={200}
    className="modal"
    overlayClassName="overlay"
  >
    <div className="modal__body">
      <p>Are you sure you want to remove this transaction?</p>
    </div>
    <div className="modal__actions">
      <button className="button button--tertiary" onClick={props.handleCloseConfirmationModal}>Cancel</button>
      <button className="button button--destructive" onClick={props.handleRemoveExpense}>Remove</button>
    </div>
  </Modal>
);

export default ConfirmationModal;
