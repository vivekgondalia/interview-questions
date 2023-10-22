import React from "react";

interface Props {
  productCount: number;
}

export const Navbar = ({ productCount }: Props) => {
  return <div>Navbar Product Count = {productCount}</div>;
};
