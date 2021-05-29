import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Container} from 'react-bootstrap';
import Icofont from 'react-icofont';
import CartDropdownItem from '../cart/CartDropdownItem';

class Located extends React.Component {

	render() {
    	return (
    		<section className="section bg-white osahan-track-order-page position-relative">
	         <iframe title="Address" className="position-absolute" src="https://www.google.com/maps/embed/v1/place?q=place_id:EkNIdeG7s25oIFThuqVuIFBow6F0LCBRdeG6rW4gNywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFtIi4qLAoUChIJ14Jfz4cldTERWY0hfNDowsMSFAoSCZOwULBgJXUxEcnMVRDFictt&key=AIzaSyARWAgf3V8vP_GxTH7Ngw0Qv515T9oKbYw" width="100%" height="676" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
	         <Container className="pt-5 pb-5">
	            <Row className="d-flex align-items-center">
	               <Col md={6} className="text-center pb-4">
	                  <div className="osahan-point mx-auto"></div>
	               </Col>
	               <Col md={6}>
	                  <div className="bg-white p-4 shadow-lg mb-2">
	                     <div className="mb-2"><small><Link className="float-right font-weight-bold" to="#"><Icofont icon="phone"/> Contact</Link></small></div>
	                     <h6 className="mb-1 mt-1">
	                     	<Link to="/detail" className="text-black">Spice Hut Restaurant
	                        </Link>
	                     </h6>
	                     <p className="text-gray mb-0"><Icofont icon="clock-time"/> 04:19 PM | 8 Items | $314</p>
	                  </div>
	                  <div className="bg-white p-4 shadow-lg">
	                     <div className="osahan-track-order-detail po">
	                        <h5 className="mt-0 mb-3">Affiliate Details</h5>
	                        <Row>
	                           <Col md={5}>
	                              <h6 className="mb-1 mt-1"><Link to="/detail" className="text-black"><Icofont icon="location-pin"/> VinMart Huynh Tan Phat
	                                 </Link>
	                              </h6>
	                              <p className="text-gray mb-5"> </p>
	                              <small>Address</small>
	                              <h6 className="mb-1 mt-1"><span className="text-black"><Icofont icon="map-pins"/>
	                                 </span>
	                              </h6>
	                              <p className="text-gray mb-0">107 Huynh Tan Phat, Phu My, District 7, HCM city
	                              </p>
	                           </Col>
	                           <Col md={7}>
	                                <div className="mb-2"><small><Icofont icon="list"/> 4 ITEMS</small></div>

				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Corn &amp; Peas Salad x 1'
				                     	price='$209'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Veg Seekh Sub 6" (15 cm) x 1'
				                     	price='$133'
				                    />
				                    <CartDropdownItem 
				                     	icoIcon='ui-press'
				                     	iconClass='text-danger food-item'
				                     	title='Chicken Tikka Sub 12" (30 cm) x 1'
				                     	price='$314'
				                    />
				                  <hr />
	                              
	                           </Col>
	                        </Row>
	                     </div>
	                  </div>
	               </Col>
	            </Row>
	         </Container>
	      </section>
    	);
    }
}


export default Located;