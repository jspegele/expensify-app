// Get total amount of all expenses

export default (expenses = []) => {
  return Math.round(
    expenses
    .map(expense => {
      if(expense.type === 'income') {
        return expense.amount
      } else {
        return expense.amount * -1;
      }
    })
    .reduce((sum, value) => sum + value, 0)
  * 100) / 100;
};