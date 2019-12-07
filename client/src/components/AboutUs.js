import React from "react";

export default function AboutUs({ title, dark, id }) {
  //Section for the about us
  //includes title and allows for certain
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
