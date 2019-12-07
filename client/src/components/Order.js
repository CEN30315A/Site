import React from "react";
import OrderForm from './OrderForm';

//order form only appearing after log in
export default function Order({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        Please Log In to Order
        <OrderForm />
        <p></p>
      </div>
    </div>
  );
}
