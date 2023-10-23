import React, { useState } from "react";
import { ProductList } from "./components/UseEffect/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <h1 className="mb-3">useEffect - Dependencies</h1>

      <select
        className="form-select mb-3"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="exercise">Exercise</option>
        <option value="grocery">Grocery</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
