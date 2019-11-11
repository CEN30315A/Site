import React from "react";

export default function Home({ title, subtitle, dark, id, data }) {
  const home_data = data.home.map(item => {
  	return <p>{item}</p>
  })
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {home_data}
      </div>
    </div>
  );
}
