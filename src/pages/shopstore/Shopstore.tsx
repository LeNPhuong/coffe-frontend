import React from "react";
import Slide from "../../components/shopstore/Slide";
import Product from "../../components/shopstore/Product";

const Shopstore: React.FC<NonNullable<unknown>> = () => {
  return (
    <div className="w-full flex flex-col">
      <Slide />
      <Product />
    </div>
  );
};

export default Shopstore;
