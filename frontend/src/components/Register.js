import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form} from 'react-bootstrap';

const url = "http://localhost:9000/auth/register"
// const url = "http://localhost:3000/users"
class Register extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            name:"",
           email:"",
           password:"",
           confirmpassword:""
           ,listOfUsers:[],
           valid : false
           
        }
    }
    fetchData(){    
        fetch(url, {mode: "cors"})
            .then(response => response.json())
            .then(json => this.setState({listOfUsers: json}))
            .catch(err => console.log(err))                     
      }
    
      componentDidMount(){
        this.fetchData();
      }
    
    signUp = (e) => {
        // e.preventDefault();
        if (this.state.name !== '' | this.state.email !== '' | this.state.password !== '' | this.state.confirmpassword !== ''){
          fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({ 
                name: this.state.name, 
                email: this.state.email,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
              // image: this.formData,
            })
      
          })
          .then(response => response.json())
          // .then(json => this.fetchData())
          .catch(err => console.log(err))    
      
        //   window.location.reload()
        }
        else{
          return
        }
      }
     
    //   addNewRecipe = () => {
    //     this.setState({title: '', body: '', ingredients: '', guide: '', image: null})
    //   }
	render() {		
    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
	                           <h3 className="login-heading mb-4">New Buddy!</h3>
	                           <Form onChange={this.signUp}>
							   <div className="form-label-group">
	                                 <input type="text" id="inputName" placeholder="Enter name" 
									 name ="name"
									 value = {this.state.name}
									 onChange={(event) => this.setState({ name: event.target.value })}/>
	                                 <Form.Label htmlFor="inputName">User Name</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <input type="email" id="inputEmail" placeholder="Email address" 
									 name ="email"
									 value = {this.state.email}
									 onChange={(event) => this.setState({ email: event.target.value })}/>
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <input type="password" id="inputPassword" placeholder="new-password" 
									 name ="password" 
									 value = {this.state.password}
									 onChange={(event) => this.setState({ password: event.target.value })}/>
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <div className="form-label-group mb-4">
	                                 <input type="password" id="inputPassword1" placeholder="password" 
									 name ="confirmpassword" 
									 value = {this.state.confirmpassword}
									 onChange={(event) => this.setState({ confirmpassword: event.target.value })}/>
	                                 <Form.Label htmlFor="inputPassword1">Confirm Password</Form.Label>
	                              </div>
	                              <button to="/login" type="submit" onClick={this.signUp} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign Up</button>
	                              <div className="text-center pt-3">
	                                 Already have an account? <Link className="font-weight-bold" to="/login">Sign In</Link>
	                              </div>
	                           </Form>
	                        </Col>
	                     </Row>
	                  </Container>
	               </div>
	            </Col>
	         </Row>
	      </Container>
    	);
    }
}


export default Register;