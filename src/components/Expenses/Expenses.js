import React, { useState } from 'react';

import './Expenses.css';

import Card from '../Layout/Card';

import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState('all');

  const FilterYearHandler = (year) => {
    setFilterYear(year);
  };

  const expensesFiltered = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  const shownExpenses = filterYear === 'all' ? expenses : expensesFiltered;

  // console.log(expensesFiltered);
  // const expenseList = shownExpenses.map((expense) => {
  //   return <ExpenseItem expense={expense} key={expense.id} />;
  // });

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterYear={FilterYearHandler} selected={filterYear} />
      {filterYear !== 'all' && <ExpenseChart expenses={shownExpenses} />}
      {/* {expenseList.length === 0 && <p>No expenses found.</p>}
      {expenseList} */}
      <ExpenseList expenseItems={shownExpenses} />
    </Card>
  );
};

export default Expenses;
