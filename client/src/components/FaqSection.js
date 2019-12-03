import React from 'react';
import Faq from './Faq';

export default function FaqSection({questAns, title, dark, id}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 align="center">{title}<subtitle> (Click to view answer) </subtitle> </h1> 
        {questAns.map(obj => <Faq questAn = {obj} key={obj.id}/>)}
         
      </div>
    </div>
  );
}