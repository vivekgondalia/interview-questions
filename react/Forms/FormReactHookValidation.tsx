import React from "react";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

interface FormData {
  name: string;
  age: number;
}

export const FormReactHookValidation = () => {
  //Example of nested destruction in JS using errors
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log({ ...register("age") });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
