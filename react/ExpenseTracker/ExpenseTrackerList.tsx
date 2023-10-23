import React, { useState } from "react";

interface Props {
  expenses: Expense[];
  onDeleteExpense: (description: string) => void;
}

interface Expense {
  description: string;
  amount: string;
  category: string;
}

export const ExpenseTrackerList = ({ expenses, onDeleteExpense }: Props) => {
  if (expenses.length === 0) return null;

  const expenseTotal = expenses.reduce((acc, currentItem) => {
    acc = acc + parseInt(currentItem.amount);
    return acc;
  }, 0);

  const expenseData = expenses.map((item, idx) => {
    return (
      <tr key={idx}>
        <td>{item.description}</td>
        <td>{item.amount}</td>
        <td>{item.category}</td>
        <td>
          <button
            id={item.description}
            type="button"
            className="btn btn-outline-danger"
            onClick={() => onDeleteExpense(item.description)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <br />
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenseData}
          <tr>
            <td>Total</td>
            <td>${expenseTotal.toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
