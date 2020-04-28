import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import CurrentViewSummary from './CurrentViewSummary';
import CurrentMonthSummary from './CurrentMonthSummary';

const ExpenseDashboardPage = () => (
  <div>
    <CurrentMonthSummary />
    <ExpenseListFilters />
    <CurrentViewSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;