import React from 'react';

function Faq(props) {
    const { questAn } = props

    return <div className="faq">
       
        <button class="btn btn-outline-primary" type="button" align= "center" data-toggle="collapse" data-target={"#collapse" + questAn.id} aria-expanded="false" aria-controls={"collapse" + questAn.id}>
            {questAn.question}
        </button>
        <div className="collapse" id={"collapse" + questAn.id}>
            <div className="answer card-body">
            {questAn.answer}
            </div>
        </div>
    </div>
    ;
}
export default Faq;


