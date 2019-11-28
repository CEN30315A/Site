import * as React from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

import * as ReactBootstrap from 'react-bootstrap';


class Form extends React.Component<IFormProps, IFormState>{

    constructor(props: IFormProps){
        super(props);
        this.state= {
            name: "",
            amount:""
        };
    }
    //handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // try{
        //   // let token = this.props.stripe.createToken({name : this.state.name})
        //    let amount = 500
        //    await fetch('/api/donate'), {
        //    method: 'POST',
        //    headers:{
        //        'Content-type' : 'application/json'
        //    },
        //    body: JSON.stringify({ amount })
        //    }
        // } catch (e){
        //     throw e;
        // }
   // }
    render(){
       
    
        return(
            <ReactBootstrap.Modal className= "container">
                <ReactBootstrap.Modal.Header closeButton>
                        <ReactBootstrap.Modal.Title>
                            Checkout
                        </ReactBootstrap.Modal.Title>
                    </ReactBootstrap.Modal.Header>
                    <ReactBootstrap.Modal.Body>

                <form 
                className= "form group mt-3 boarder-primary rounded shadow-lg p-3"
              //  onSubmit={this.handleSubmit}
                        >
                             <label>Name</label>
                             <input
                                type ="text"
                                className = "input-group my-1 p-1 boarder-dark"
                                value = {this.state.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({name: e.target.value})}
                                />
<label> The Price of this product is $5.00 </label>

                             <label>Card Number  - -  Exp. Date  - - CVC</label>
                                <CardElement className = " p-2 boarder boarder-dark"/>
                <  button className = "btn btn-primary boarder boarder-dark shadow">Charge it!</button>
           
                </form>
                    </ReactBootstrap.Modal.Body>
                
            </ReactBootstrap.Modal>

            );


    }


}

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState{
    name: string;
    amount: string;
 }

export default injectStripe(Form);
