import React from "react";


export default function Product({ title, dark, id }) {
  return (
    //Section for digiClamp information
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
      </div>
    </div>

  );
}
