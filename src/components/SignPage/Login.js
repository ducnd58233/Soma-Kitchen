import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';

class Login extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
			name:'',
            email: "",
            password: ""
            , listOfUsers: []
            , valid: false
        }
    }
	fetchClients() {
        fetch("http://localhost:9000/api/users")
            .then(res => res.json())
            .then(json => this.setState({ listOfUsers: json }))
    }
    validateCheck() {
        let count = 0;
        this.state.listOfUsers.map((e) => {

                if (e.email === this.state.email) {
                    count++;
                    if (e.password === this.state.password) {
                        this.setState({ user: e.name });
                        this.setState({ valid: true });
                    }
                    else {
                        alert("invalid password")
                    }
                }
    
    
            })
            if (count === 0) {
                alert("invalid user")
            }
        }
        
    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)

    }
    componentDidMount() {
        this.fetchClients();
    }
	render() {
		if (this.state.valid===true) {
			return<Redirect to={'/homepage' + this.state.name} />  
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
	                              <button onClick={this.validateCheck.bind(this)} className="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</button>
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