import React, {Component} from 'react';

class Section extends Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            body: this.props.body,
        }
    }
    render(){
        return(
            <div>
                <section className= "section">
                </section>
                <section className="section">
                    <h1>{this.state.title}fdsdfsd</h1>
                    <p>{this.state.body}</p>
                </section>
            </div>
        )
    }


}
export default Section;