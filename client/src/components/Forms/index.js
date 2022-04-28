import React, { Component } from 'react';
import { Form, Container, Header } from 'semantic-ui-react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'
  

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: '',
       email: '',
       question: '',
    };

  }  
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }  
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://sheet.best/api/sheets/04cb724f-b8be-4143-991c-1570058451c3', this.state)
    .then(response => {
      console.log(response);
    })
  }
  render(){
    const { name, email, question } = this.state;    
    return (
      <Container fluid className="container">
<Header as='h2'>Ask a general question :)</Header>
<Form className="form">
  <Form.Field>
    <label>Name</label>
    <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
  </Form.Field>
  <Form.Field>
    <label>Email</label>
    <input placeholder='Enter your email' type="text" name = "email" value = {email} onChange={this.changeHandler}/>
  </Form.Field>
  <Form.Field>
    <label>Question</label>
    <input placeholder='Enter your question' type="text" name = "question" value = {question} onChange={this.changeHandler}/>
  </Form.Field>
  <button className="common-button uk-button uk-button-primary"> Submit</button>
  {/* <Button color="blue" type='submit'>Submit</Button> */}
        </Form>
      </Container>
    )}
}

export default Forms;