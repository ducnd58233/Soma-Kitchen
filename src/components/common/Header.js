import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import Icofont from 'react-icofont';


class Header extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isNavExpanded: false
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
			      <Navbar.Brand to="/"><Image src='/img/logo.png' className="logoimg" alt='' /></Navbar.Brand>
			      <Navbar.Toggle/>
			      <Navbar.Collapse id="navbarNavDropdown">
			         <Nav activeKey={0} className="ml-auto" onSelect={this.closeMenu}>
						<Nav.Link eventKey={0} as={NavLink} activeclassname="active" exact to="/">
			               Home <span className="sr-only">(current)</span>
			            </Nav.Link>
			            <NavDropdown title="Food Recipe" alignRight className="border-0">
						    <NavDropdown.Item eventKey={3.1} as={NavLink} activeclassname="active" to="/recipe">Listing Recipe</NavDropdown.Item>
						    <NavDropdown.Item eventKey={3.5} as={NavLink} activeclassname="active" to="/404">404</NavDropdown.Item>
			            </NavDropdown>
			            <NavDropdown title="Restaurant" alignRight>
						    <NavDropdown.Item eventKey={2.1} as={NavLink} activeclassname="active" to="/listing">List Restaurant</NavDropdown.Item>
			            	<NavDropdown.Item eventKey={2.2} as={NavLink} activeclassname="active" to="/detail">Detail + Cart</NavDropdown.Item>
			            </NavDropdown>
			            <Nav.Link eventKey={2} as={NavLink} activeclassname="active" to="/login">
             				<Icofont icon='sign-in'/> Login
			            </Nav.Link>
			         </Nav>
			      </Navbar.Collapse>
			   </Container>
			</Navbar>
			</div>
		);
	}
}

export default Header;