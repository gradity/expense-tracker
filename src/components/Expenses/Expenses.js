import React, { useState } from 'react';

import './Expenses.css';

import Card from '../Layout/Card';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Something from './Something';

const ExpenseList = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('2022');

  const FilterYearHandler = (year) => {
    setFilterYear(year);
  };

  const expensesFiltered = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const shownExpenses = filterYear === 'all' ? expenses : expensesFiltered;

  // console.log(expensesFiltered);
  const expenseList = shownExpenses.map((expense) => {
    return <ExpenseItem expense={expense} key={expense.id} />;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterYear={FilterYearHandler} selected={filterYear} />

      {expenseList.length === 0 && <p>No expenses found.</p>}
      {expenseList}
      {/* <ExpenseList expenseItems={shownExpenses} /> */}
    </Card>
  );
};

export default ExpenseList;
