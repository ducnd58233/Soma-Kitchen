import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import DropDownTitle from '../Title/DropDownTitle';
import Icofont from 'react-icofont';

class HeaderUser extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false,
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
	}
	render() {
    	return (
    		<div ref={node => this.node = node}>
			<Navbar onToggle={this.setIsNavExpanded}
           expanded={this.state.isNavExpanded} color="light" expand='lg' className="navbar-light osahan-nav shadow-sm">
			   <Container>
			      <Navbar.Brand to="/homepage"><Image src='/img/logo.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/homepage">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
			            <NavDropdown title="Food Recipe" alignRight className="border-0">
						    <NavDropdown.Item eventKey={3.1} as={NavLink} activeclassname="active" to="/recipeUser">Listing Recipe</NavDropdown.Item>
							<NavDropdown.Item eventKey={3.1} as={NavLink} activeclassname="active" to="/addrecipe">Add Recipe</NavDropdown.Item>
			            </NavDropdown>
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
							<NavDropdown.Item eventKey={4.1} as={NavLink} activeclassname="active" to="/myaccount/affiliate"><Icofont icon='food-cart'/> Affiliate</NavDropdown.Item>
							<NavDropdown.Item eventKey={4.3} as={NavLink} activeclassname="active" to="/myaccount/favourites"><Icofont icon='heart'/> My Recipes</NavDropdown.Item>
							<NavDropdown.Item eventKey={3.1} as={NavLink} activeclassname="active" to="/located"><Icofont icon='delivery-time'/> Located Affiliate</NavDropdown.Item>

							<NavDropdown.Item eventKey={4.5} as={NavLink} activeclassname="active" to="/"><Icofont icon='sign-out'/> Logout</NavDropdown.Item>
							
			            </NavDropdown>
			            
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default HeaderUser;