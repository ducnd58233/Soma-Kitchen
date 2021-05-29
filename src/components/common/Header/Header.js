import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import Icofont from 'react-icofont';
import DropDownTitle from '../Title/DropDownTitle';


class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false,
		  isAuthenticated: 0
	    };
	}
	
    setIsNavExpanded = (isNavExpanded) => {
      this.setState({ isNavExpanded: isNavExpanded });
    }
    closeMenu = () => {
      this.setState({ isNavExpanded: false });
    }

    handleClick = (e) => {
      if (this.node.contains(e.target)) {
        // if clicked inside menu do something
      } else {
        // If clicked outside menu, close the navbar.
        this.setState({ isNavExpanded: false });
      }
    }
  
	componentDidMount() {
	    document.addEventListener('click', this.handleClick, false);
		      
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleClick, false);
		this.setState({isAuthenticated: window.localStorage.getItem('isAuthenticated')})
	}
	logout(event){
        event.preventDefault();
        window.localStorage.setItem("isAuthenticated", 0);
        this.setState({isAuthenticated: window.localStorage.getItem('authenticated')});
		window.location.reload()
    
	}
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/"><Image src='/img/logo.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
			            <Nav.Link title="Food Recipe" alignRight className="border-0"
						eventKey={3.1} as={NavLink} activeclassname="active" to="/recipeHome">Listing Recipes
						</Nav.Link>			    
			            <Nav className="border-0">
						{this.state.isAuthenticated === 1 &&
                        <>
                                <NavDropdown alignRight
			            	title={
			            		<DropDownTitle 
			            			className='d-inline-block' 
			            			image='/img/banh.jpg'
			            			imageAlt='user'
			            			imageClass="nav-osahan-pic rounded-pill"
			            			title="Roy Nguyen"
			            		/>
			            	}
			            >
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/orders"><Icofont icon='food-cart'/> Orders</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.3} as={NavLink} activeclassname="active" to="/myaccount/favourites"><Icofont icon='heart'/> My Recipes</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.4} as={NavLink} activeclassname="active" to="/myaccount/payments"><Icofont icon='credit-card'/> Payments</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.5} as={NavLink} activeclassname="active" to="/myaccount/addresses"><Icofont icon='location-pin'/> Addresses</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.5} as={NavLink} activeclassname="active" to="/" ><Icofont icon='sign-out'/> Logout</NavDropdown.Item>
			            </NavDropdown>
                        </>
                        } 
                        {this.state.isAuthenticated === 0 &&<Nav.Link eventKey={2} as={NavLink} activeclassname="active"  to="/login">
             				<Icofont icon='sign-in'/> Login
							 </Nav.Link> }
			            </Nav>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;