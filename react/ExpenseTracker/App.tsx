import React, { useState } from "react";
import { FieldValues } from "react-hook-form/dist/types";
import "./App.css";
import { ExpenseFilter } from "./components/ExpenseTracker/ExpenseFilter";
import { ExpenseTracker } from "./components/ExpenseTracker/ExpenseTracker";
import { ExpenseTrackerList } from "./components/ExpenseTracker/ExpenseTrackerList";

interface Expense {
  description: string;
  amount: string;
  category: string;
}

export const categories = [
  { value: "Groceries", label: "Groceries" },
  { value: "Shopping", label: "Shopping" },
  { value: "Exercise", label: "Exercise" },
  { value: "Work", label: "Work" },
  { value: "Social", label: "Social" },
] as const;

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddExpense = (data: FieldValues) => {
    setExpenses([...expenses, data]);
  };

  const handleDeleteExpense = (description: string) => {
    console.log("Delete Description : ", description);
    setExpenses(
      expenses.filter((item: Expense) => item.description !== description)
    );
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((item: Expense) => item.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseTracker onSubmitExpense={handleAddExpense} />

      <div className="mt-3 mb-3">
        <h2>Expense List</h2>
        <ExpenseFilter
          onSelectCategory={(category) => {
            setSelectedCategory(category);
          }}
        />
        <ExpenseTrackerList
          expenses={visibleExpenses}
          onDeleteExpense={handleDeleteExpense}
        />
      </div>
    </div>
  );
}

export default App;
