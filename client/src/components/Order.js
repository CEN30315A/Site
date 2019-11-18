import React from "react";
import OrderForm from './OrderForm';

export default function Order({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <OrderForm />
        <p></p>
      </div>
    </div>
  );
}
