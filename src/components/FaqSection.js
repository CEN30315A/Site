import React from 'react';
import Faq from './Faq';

function FaqSection(props,{ title, subtitle, dark, id }) {
  const {questAns} = props
  return <div className={"section" + (dark ? " section-dark" : "")}>
  <div className="section-content" id={id}>
  <h1>FAQ</h1>
  {questAns.map(obj => <Faq questAn = {obj} key={obj.id}/>)}
  </div>;
  </div>
}
export default FaqSection;