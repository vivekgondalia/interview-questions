import React from "react";

interface Props {
  products: string[];
  handleClearCart: () => void;
}

export const Cart = ({ products, handleClearCart }: Props) => {
  return (
    <>
      <div>Products in Cart :</div>
      <ul>
        {products.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </>
  );
};
