import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const CurrentViewSummary = ({ expensesTotal }) => {
  const budgetWord = expensesTotal === 0 ? 'on target' : ( expensesTotal > 0 ? 'under spending' : 'over spending');
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const totalClass = expensesTotal > 0 ? 'green-text' : 'red-text';
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Your {moment().startOf('month').format('MMMM')} cash flow is <span className={totalClass}>{formattedExpensesTotal}</span>. {expensesTotal > 0 && <span> Nice job!</span>}
        </h2>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
  
  return {
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(CurrentViewSummary);