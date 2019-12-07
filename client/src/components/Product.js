import React from "react";

//product section
export default function Product({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
      </div>
     
    </div>

  );
}
