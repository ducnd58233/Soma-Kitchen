import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row,Col,Container,Dropdown,Accordion,Button,Form,Spinner} from 'react-bootstrap';
import Icofont from 'react-icofont';
import PageTitle from '../../common/Title/PageTitle';
import Recipes from './Recipes';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';

class RecipesUser extends Component {
    
    render () {
        return(
            <>
            <Header/>
            <PageTitle 
	    			title="All Food Recipes"
	    			subTitle="Let's get all the recipe magazines"
	    		/>
                <section className="section pt-5 pb-5 products-listing">
			         <Container>
			            <Row className="d-none-m">
			               <Col md={12}>
			               		<Dropdown className="float-right">
								  <Dropdown.Toggle variant="outline-info">
								    Sort by: <span className="text-theme">Recommmend</span> &nbsp;&nbsp;
								  </Dropdown.Toggle>
								  <Dropdown.Menu className='dropdown-menu-right shadow-sm border-0'>
								    <Dropdown.Item href="#/recommmend">Recommmend</Dropdown.Item>
								    <Dropdown.Item href="#/rating">Rating</Dropdown.Item>
								    <Dropdown.Item href="#/comment">Comment</Dropdown.Item>
								  </Dropdown.Menu>
								</Dropdown>
								<h4 className="font-weight-bold mt-0 mb-3">Food Tutorial <small className="h6 mb-0 ml-2">199 recipes
								 </small>
								</h4>
			               </Col>
			            </Row>
                        <Row>
                        <Col md={3}>
			                  <div className="filters shadow-sm rounded bg-white mb-4">
			                     <div className="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
			                        <h5 className="m-0">Filter By</h5>
			                     </div>
			                     <div className="filters-body">
                                 <Accordion defaultActiveKey="0">
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="0">
														Explore <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="0">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb1'
											        label={<React.Fragment>Breakfast and Brunch Recipes <small className="text-black-50">230</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb2'
											        label={<React.Fragment>Lunch Recipes <small className="text-black-50">95</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb3'
											        label={<React.Fragment>Dinner Recipes <small className="text-black-50">35</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb4'
											        label={<React.Fragment>Appetizer & Snack Recipes <small className="text-black-50">46</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb5'
											        label={<React.Fragment>Bread Recipes <small className="text-black-50">20</small></React.Fragment>}
											      />
			                                    <div className="mt-2"><Link to="#" className="link">See all</Link></div>
			                                  </div>
										    </Accordion.Collapse>
			                            </div>
			                            <div className="filters-card border-bottom p-4">
										    <div className="filters-card-header" id="headingTwo">
				                                <h6 className="mb-0">
				                                    <Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="1">
														All cuisines <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
				                                </h6>
			                                </div>

										    <Accordion.Collapse eventKey="1">
										      <div className="filters-card-body card-shop-filters">
											        <form className="filters-search mb-3">

													  <Form.Group>
													    <Icofont icon='search'/>
													    <Form.Control type="text" placeholder="Start typing to search..." />
													  </Form.Group>
				                                    </form>
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb6'
											        label={<React.Fragment>American <small className="text-black-50">156</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb7'
											        label={<React.Fragment>Pizza <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb8'
											        label={<React.Fragment>Healthy <small className="text-black-50">130</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb9'
											        label={<React.Fragment>Vegetarian <small className="text-black-50">120</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb10'
											        label={<React.Fragment>Chinese <small className="text-black-50">111</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb11'
											        label={<React.Fragment>Hamburgers <small className="text-black-50">95</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb12'
											        label={<React.Fragment>Dessert <small className="text-black-50">50</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb13'
											        label={<React.Fragment>Chicken <small className="text-black-50">32</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb14'
											        label={<React.Fragment>Indian <small className="text-black-50">156</small></React.Fragment>}
											      />
			                                    <div className="mt-2"><Link to="#" className="link">See all</Link></div>
			                                  </div>
										    </Accordion.Collapse>
									    </div>
									    <div className="filters-card border-bottom p-4">
											<div className="filters-card-header" id="headingOne">
												<h6 className="mb-0">
													<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="2">
														Rating <Icofont icon='arrow-down' className='ml-auto'/>
													</Accordion.Toggle>
												</h6>
											</div>
										    <Accordion.Collapse eventKey="2">
										      <div className="filters-card-body card-shop-filters">
											      <Form.Check 
											        custom
											        type='checkbox'
											        defaultChecked={true}
											        id='custom-cb15'
											        label={<React.Fragment>Like <small className="text-black-50">156</small></React.Fragment>}
											      />

											      <Form.Check 
											        custom
											        type='checkbox'
											        id='custom-cb16'
											        label={<React.Fragment>Unlike <small className="text-black-50">120</small></React.Fragment>}
											      />

			                                  </div>
										    </Accordion.Collapse>
			                            </div>
									</Accordion>
			                     </div>
			                  </div>
			               </Col>
                           <Col md={9}>
                           <Row>
                               <Recipes/>
                            </Row>  
                               </Col>
                        </Row>
                    </Container>  
            </section>
            <Footer/>
        </>
        )
    }
}

export default RecipesUser;