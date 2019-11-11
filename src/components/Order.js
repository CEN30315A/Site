import React from "react";

export default function Order({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <button class="btn btn-outline-primary" type="button">
          <i class="fa fa-shopping-cart"></i>
          &nbsp;
          Order
        </button>
        <p></p>
      </div>
    </div>
  );
}
