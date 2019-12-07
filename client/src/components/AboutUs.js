import React from "react";

//function to the about us section
export default function AboutUs({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        </div>
    </div>
  );
}
