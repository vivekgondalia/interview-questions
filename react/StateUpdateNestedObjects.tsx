import React, { useState } from "react";

export const StateUpdateNestedObjects = () => {
  const [customer, setCustomer] = useState({
    name: "Vivek Gondalia",
    address: {
      city: "Vancouver",
      zipcode: 98981,
    },
  });

  const handleRelocation = () => {
    const newState = {
      ...customer,
      address: { ...customer.address, city: "Portland" },
    };

    setCustomer(newState);
  };

  return (
    <>
      <h2>Vivek lives in {customer.address.city}!</h2>
      <button onClick={handleRelocation}>Relocate Vivek to Portland</button>
    </>
  );
};
