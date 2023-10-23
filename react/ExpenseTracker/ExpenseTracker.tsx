import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { categories } from "../../App";
import { z } from "zod";

interface Props {
  onSubmitExpense: (data: FieldValues) => void;
}

export const ExpenseTracker = ({ onSubmitExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    onSubmitExpense(data);
    reset();
  };

  const categoryOptions = categories.map((item, idx) => (
    <option key={idx} value={item.value}>
      {item.label}
    </option>
  ));

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register("description", { required: true })}
          />
        </div>
        <br />
        <div className="mx-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register("amount", { required: true, min: 0 })}
          />
        </div>
        <br />
        <div className="mx-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-select"
            {...register("category")}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};
