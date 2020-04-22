import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
//import getVisibleExpenses from '../selectors/expenses';
//import selectExpensesTotal from '../selectors/expenses-total';

test('should render ExpensesSummary with one expense correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={587624} />);
  expect(wrapper).toMatchSnapshot();
});
