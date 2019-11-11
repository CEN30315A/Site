import React from "react";

export default function ContactUs({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>
			        Dr. J.C. Roig <br/>
			XDG Technologies, LLC<br/>
			6485 S.W. 51 Court<br/>
			Ocala, FL. 34474-5768<br/>
<br/>
			Phone: (352) 812-1175

</p>
      </div>
    </div>
  );
}
