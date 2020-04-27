import React from 'react';
import Modal from 'react-modal';
import { FaQuestionCircle } from 'react-icons/fa';
import TagsList from '../components/TagsList';

class TagModal extends React.Component {
  state = {
    showHelp: false
  };
  handleHelpClick = () => {
    this.setState(() => ({ showHelp: !this.state.showHelp }));
  };
  render() {
    const modalBodyClasses = this.state.showHelp ? "modal__body" : "modal__body modal__body--hidden";
    return (
      <Modal
        appElement={document.getElementById('app')}
        isOpen={!!this.props.modalOpen}
        onRequestClose={this.props.handleCloseTagsModal}
        contentLabel="Manage Tags"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Manage Your Tags <FaQuestionCircle size="1.6rem" className="tag__icon" onClick={this.handleHelpClick} /></h3>
        <div id="help-body" className={modalBodyClasses}>
          <p>Use tags to organize and filter your transactions. Tags can be anything you'd like. For example:</p>
          <ul>
            <li><strong>Business</strong> to track all of your deductable business expenditures.</li>
            <li><strong>Hawaii</strong> for summer vacation spending.</li>
            <li><strong>Kitchen Remodel</strong> to total your home renovation project.</li>
          </ul>
        </div>
        <TagsList />
        <div className="modal__actions"><button className="button button--sm" onClick={this.props.handleCloseTagsModal}>Close</button></div>
      </Modal>
    );
  };
};

export default TagModal;
