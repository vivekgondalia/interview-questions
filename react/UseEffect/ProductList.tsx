import React, { useEffect, useState } from "react";

export const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  //Here the useEffect dependecy is on prop-category. Every time there is a change in category, react will re-render the component instead of only once with []
  useEffect(() => {
    console.log("Fetching Products for ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>Product List for {category.toUpperCase()}</div>;
};
