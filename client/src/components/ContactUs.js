import React from "react";
import EmailForm from "./EmailForm";
//contact us section
//Includes the information for contact and email form
export default function ContactUs({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
<EmailForm></EmailForm>
      </div>
    </div>
  );
}
