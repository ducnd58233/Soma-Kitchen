import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import FontAwesome from './common/FontAwesome';

const url = "http://localhost:9000/auth/login"
class Login extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
            , listOfUsers: []
            , valid: false
        }
    }
	fetchData(){    
		fetch(url, {mode: "cors"})
			.then(response => response.json())
			.then(json => this.setState({recipe: json}))
			.catch(err => console.log(err))                     
	  }
	
	  componentDidMount(){
		this.fetchData();
	  }
    
    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)

    }
	logIn(){
        let emp = {
            email: this.state.email,
            password: this.state.password,
            
        }
        fetch(url, {
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
            },
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(emp)
        })
    }

	render() {
		if (this.state.valid === true) {
            return <Link to={'/' + this.state.name} />
            }
    	return (
    	  <Container fluid className='bg-white'>
	         <Row>
	            <Col md={4} lg={6} className="d-none d-md-flex bg-image"></Col>
	            <Col md={8} lg={6}>
	               <div className="login d-flex align-items-center py-5">
	                  <Container>
	                     <Row>
	                        <Col md={9} lg={8} className="mx-auto pl-5 pr-5">
	                           <h3 className="login-heading mb-4">Welcome back!</h3>
	                           <Form onChange={this.logIn}>
	                              <div className="form-label-group">
	                                 <Form.Control type="email" id="inputEmail" placeholder="Email address" aria-describedby="emailHelp"
                                            name ="email"
                                            value = {this.state.email}
                                            onChange = {this.handleChange.bind(this)}/>
	                                 <Form.Label htmlFor="inputEmail">Email address / Mobile</Form.Label>
	                              </div>
	                              <div className="form-label-group">
	                                 <Form.Control type="password" id="inputPassword" placeholder="Password"
									 name="password" 
									 value={this.state.password} 
									 onChange={this.handleChange.bind(this)} />
	                                 <Form.Label htmlFor="inputPassword">Password</Form.Label>
	                              </div>
	                              <Form.Check  
	                              	className='mb-3'
							        custom
							        type="checkbox"
							        id="custom-checkbox"
							        label="Remember password"
							      />
	                              <Link className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</Link>
	                              <div className="text-center pt-3">
	                                 Don’t have an account? <Link className="font-weight-bold" to="/register">Sign Up</Link>
	                              </div>
		                           <hr className="my-4" />
		                           <p className="text-center">LOGIN WITH</p>
		                           <div className="row">
		                              <div className="col pr-2">
		                                 <Button className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" /> Google</Button>
		                              </div>
		                              <div className="col pl-2">
		                                 <Button className="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="facebook" className="mr-2" /> Facebook</Button>
		                              </div>
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


export default Login;