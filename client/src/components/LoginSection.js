import React from "react";

//Area for the log in section
export default function LoginSection({dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
      </div>
    </div>
  );
}
