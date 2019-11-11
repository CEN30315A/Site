import React from 'react';
import Faq from './Faq';

export default function FaqSection(props) {
  const {questAns} = props
  return <div>
  {questAns.map(obj => <Faq questAn = {obj} key={obj.id}/>)}
  </div>;
}