import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const CurrentViewSummary = ({ expenseCount, visibleExpenseCount, visibleExpensesTotal}) => {
  const expenseWord = visibleExpenseCount === 1 ? 'transaction' : 'transactions';
  const formattedExpensesTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00');
  const totalClass = visibleExpensesTotal > 0 ? 'bold green-text' : 'bold';
  return (
    <div className="content-container">
      <div className="view-summary">
        <h2 className="view-summary__title">
          Viewing <span className="bold">{visibleExpenseCount}</span> {expenseWord} totalling <span className={totalClass}>{formattedExpensesTotal}</span> ({expenseCount - visibleExpenseCount} hidden).
        </h2>
        <div className="view-summary__actions">
          <Link className="button" to="/create">Add Transaction</Link>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  
  return {
    expenseCount: state.expenses.length,
    visibleExpenseCount: visibleExpenses.length,
    visibleExpensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(CurrentViewSummary);