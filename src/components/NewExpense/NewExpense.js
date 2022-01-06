import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      // id: Math.random().toString(),
      id: uuidv4(),
    };
    onAddExpense(expenseData);
  };

  const toggleFormHandler = () => {
    setShowForm((prevShowForm) => {
      return !prevShowForm;
    });
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onToggleForm={toggleFormHandler}
        />
      ) : (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
