import React from "react";

//section for log in
export default function LoginSection({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        
      </div>
    </div>
  );
}
