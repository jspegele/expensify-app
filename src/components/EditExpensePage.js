import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ConfirmationModal from './ConfirmationModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  state = {
    modalOpen: false
  };
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  handleAddTags = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
  };
  onRemove = () => {
    console.log('removing');
    this.setState(() => ({ modalOpen: true }));
  };
  handleRemoveExpense = () => {
    this.handleCloseConfirmationModal();
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  handleCloseConfirmationModal = () => {
    this.setState(() => ({ modalOpen: false }));
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Transaction</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            handleAddTags={this.handleAddTags}
            onRemove={this.onRemove}
            onSubmit={this.onSubmit}
          />
        </div>
        <ConfirmationModal
          modalOpen={this.state.modalOpen}
          handleRemoveExpense={this.handleRemoveExpense}
          handleCloseConfirmationModal={this.handleCloseConfirmationModal}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);