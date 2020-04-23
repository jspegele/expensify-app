import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// expensesReducer test cases
test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove an expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Cable Bill',
    note: '',
    amount: 12500,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense by id', () => {
  const amount = 295;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 295;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
