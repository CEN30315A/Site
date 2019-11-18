import React from 'react';
import Faq from './Faq';

export default function FaqSection(props) {
  const {questAns} = props
  return <div className="section">
  {questAns.map(obj => <Faq questAn = {obj} key={obj.id}/>)}
  </div>;
}