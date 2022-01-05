import React from 'react';

import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenseItems }) => {
  console.log(expenseItems);
  if (expenseItems.length === 0) {
    <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* {expenseItems.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })} */}
    </ul>
  );
};

export default ExpenseList;
