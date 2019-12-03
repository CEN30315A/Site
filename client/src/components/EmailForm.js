import React from "react";



class EmailForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/email/', {
      method: 'POST',
      body: data,
      
    });
    console.log(data);
  }
  

  render() {
    return (        
      <form onSubmit={this.handleSubmit}>

    
        <tr/>
        <label htmlFor="email" style = {{paddingRight : 10}} >Enter your email  </label>
        <input id="email" name="email" type="email" />
        <p>
          <label>Message: </label>
          <textarea id = "myTextArea"
                  rows = "3"
                  cols = "80"
                  placeholder = "Your text here"></textarea>
        </p>
        <button> Send data! </button>
     
      </form>  
    );
  }
}
export default EmailForm;