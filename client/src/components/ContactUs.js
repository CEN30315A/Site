import React from "react";
import EmailForm from "./EmailForm";

//contact us Section including the contact form 
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
