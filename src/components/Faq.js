import React from 'react';

function Faq(props) {
    const { questAn } = props

    return <div className="faq">
        <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-target={"#collapse" + questAn.id} aria-expanded="false" aria-controls={"collapse" + questAn.id}>
            {questAn.question}
            <i class="fa fa-plus"></i>
        </button>
        <div className="collapse" id={"collapse" + questAn.id}>
            <div className="card card-body">
            {questAn.answer}
            </div>
        </div>
    </div>;
}
export default Faq;


