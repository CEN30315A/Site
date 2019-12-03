import React from "react";
const axios = require("axios");

class EmailForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      "recipients": ["OWNER"],
      "subject": document.querySelector("#formEmail").value + " emailed you",
      "text": document.querySelector("#myTextArea").value 
    };
    
    axios.post('/email', data)
      .catch(function (error) {
        console.log(error);
      });

      document.getElementById("EmailForm").reset();
  }
  

  render() {
    return (        
      <form onSubmit={this.handleSubmit} id="EmailForm">

    
        <tr/>
        <label htmlFor="email" style = {{paddingRight : 10}} >Enter your email  </label>
        <input id="formEmail" name="email" type="email" />
        <p>
          <label>Message: </label>
          <textarea id = "myTextArea"
                  rows = "3"
                  cols = "80"
                  placeholder = "Your text here"></textarea>
        </p>
        <button class="btn btn-outline-primary" onClick={() => alert("Your email has has been sent. Thank you for contacting us.")}>
          Send data! 
        </button>
     
      </form>  
    );
  }
}
export default EmailForm;