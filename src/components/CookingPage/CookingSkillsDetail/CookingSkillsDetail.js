import React, { Component } from 'react';
import {Col,Container,Row,Tab,Form,Nav,Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

import PageTitle from '../../common/Title/PageTitle';
import CookingSkills from '../CookingSkills/CookingSkills';
import RatingBar from '../../common/comment/RatingBar';
import Review from '../../common/comment/Review';
import StarRating from '../../common/comment/StarRating';

const url = "http://localhost:9000/cookings" 
class CookingSkillsDetail extends Component {
    state = {
        skillDetail: null,
        _id: '',
        notice: '',
        difficulty: '',
        description:'',
        video: '',
    };

    async fetchData(){    
        await fetch(url + "/" + this.props.match.params.id , {mode: "cors"})
            .then(response => response.json())
            .then(json=>this.setState({ skillDetail: json }))
            .catch(err => console.log(err))                     
        }

    componentDidMount() {
        console.log(this.state.skillDetail);

        if(this.props.match.params.id){
            if( !this.state.skillDetail || (this.state.skillDetail && this.state.skillDetail._id !== this.props.match.params.id) ){
                try{
                    this.fetchData()
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
        }
    }
    getStarValue = ({value}) => {
    	console.log(value);
    	//console.log(quantity);
	}
    

    deleteHandler = () => {
        if(window.confirm('Do you want to delete?')){
            fetch(url + "/" + this.props.match.params.id, {
                method: 'delete',
            }).then(res => res.json())
            .then(json => this.fetchData())
            .catch(err => console.log(err))

            this.props.history.push({
                pathname: '/homepage',
            })
        }
    }

    render(){

        let postSkill = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        

        if(this.props.match.params.id){
            postSkill = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if (this.state.skillDetail){
            postSkill = (
                <>
                <PageTitle 
                   title={this.state.skillDetail.notice}
                   subTitle="Cooking #25102589748"
                />
                <section className="section pt-4 pb-4 osahan-account-page">
                <Container>
                <Row>
                    <Col md={9}>
                    <div className=' bg-white shadow-sm'>
                    <div className="border-bottom p-4">
                        
                    <ReactPlayer
                        url={this.state.skillDetail.video}
                        width="780px"
                        height="542px"
                        controls={true}
                        />
                    </div>
                <Tab.Container defaultActiveKey="first">
	      	    <section className="offer-dedicated-nav bg-white border-top-0 shadow-sm">
		         <Container>
		            <Row>
		               <Col md={12}>
		                  <span className="restaurant-detailed-action-btn float-right">
		                     <Button variant='light' size='sm' className="border-light-btn mr-1" type="button"><Icofont icon="heart" className='text-danger' /> Mark as Favourite</Button>
		                  </span>
		                  <Nav  id="pills-tab">
		                     <Nav.Item>
		                        <Nav.Link eventKey="first">Description</Nav.Link>
		                     </Nav.Item>
		                     <Nav.Item>
		                        <Nav.Link eventKey="second">Rating</Nav.Link>
		                     </Nav.Item>
		                     <Nav.Item>
		                        <Nav.Link eventKey="third">Reviews</Nav.Link>
		                     </Nav.Item>
		                  </Nav>
		               </Col>
		            </Row>
		         </Container>
	      	</section>
                <section className="offer-dedicated-body pt-2 pb-2 mt-4 mb-4">
		        <Container>
		            <Row>
		                <Col md={12}>
	                  		<div className="offer-dedicated-body-left">
							    <Tab.Content className='h-100'>
						            <Tab.Pane eventKey="first">
									<h6 className="mt-0 mb-3">Difficulty: <a>{this.state.skillDetail.difficulty}</a></h6>
                                    <p  className="description mt-0 mb-3">{this.state.skillDetail.description}</p>
                                    </Tab.Pane>
								<Tab.Pane eventKey="second">
					                <div id="ratings-and-reviews" className="bg-white rounded shadow-sm p-4 mb-4 clearfix restaurant-detailed-star-rating">
			                            <div className="star-rating float-right">
			                               <StarRating fontSize={26} star={5} getValue={this.getStarValue}/>
			                            </div>
			                               <h5 className="mb-0 pt-1">Rate this Place</h5>
			                        </div>
			                        <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
			                            <h5 className="mb-0 mb-4">Ratings and Reviews</h5>
			                              <div className="graph-star-rating-header">
			                                 <div className="star-rating">
			                              		<StarRating fontSize={18} disabled={true} star={5} getValue={this.getStarValue}/>  
			                              		<b className="text-black ml-2">334</b>
			                                 </div>
			                                 <p className="text-black mb-4 mt-2">Rated 3.5 out of 5</p>
			                              </div>
			                              <div className="graph-star-rating-body">
		                                    <RatingBar leftText="5 Star" barValue={56} />
		                                    <RatingBar leftText="4 Star" barValue={23} />
		                                    <RatingBar leftText="3 Star" barValue={11} />
		                                    <RatingBar leftText="2 Star" barValue={6} />
		                                    <RatingBar leftText="1 Star" barValue={4} />
			                              </div>
			                                    <div className="graph-star-rating-footer text-center mt-3 mb-3">
			                                    <Button type="button" variant="outline-primary" size="sm">Rate</Button>
			                              </div>
			                            </div>
						          	</Tab.Pane>
                                      <Tab.Pane eventKey="third">
			                            <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
			                              <Link to="#" className="btn btn-outline-primary btn-sm float-right">Top Rated</Link>
			                              <h5 className="mb-1">All Ratings and Reviews</h5>
			                              <Review
			                              	image="/img/user/1.jpg"
											ImageAlt=""
											ratingStars={5}
											Name='Singh Osahan'
											profileLink="#"
											reviewDate= "Tue, 20 Mar 2020"
											reviewText= "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"
											likes= "856M"
											dislikes= "158K"
											otherUsers={this.state.users}
			                               />
			                              <hr />
			                              <Review
			                              	image="/img/user/2.jpg"
											ImageAlt=""
											ratingStars={5}
											Name='Gurdeep Osahan'
											profileLink="#"
											reviewDate= "Tue, 20 Mar 2020"
											reviewText= "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
											likes= "88K"
											dislikes= "1K"
											otherUsers={this.state.users}
			                               />
			                              <hr />
                              			  <Link className="text-center w-100 d-block mt-4 font-weight-bold" to="#">See All Reviews</Link>
			                            </div>
						            	<div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
			                              <h5 className="mb-4">Leave Comment</h5>
			                              <p className="mb-2">Rate the Place</p>
			                              <div className="mb-4">
			                                 <div className="star-rating">
			                              		<StarRating fontSize={26} star={5} getValue={this.getStarValue}/>
			                                 </div>
			                              </div>
			                              <Form>
			                                 <Form.Group>
			                                    <Form.Label>Your Comment</Form.Label>
			                                    <Form.Control as="textarea" />
			                                 </Form.Group>
			                                 <Form.Group>
			                                    <Button variant="primary" size="sm" type="button"> Submit Comment </Button>
			                                 </Form.Group>
			                              </Form>
			                           </div>
						          	</Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </section>         
				</Tab.Container>
                 </div>
                    </Col>
                    <Col md={3}>
                        <div className="osahan-account-page-left shadow-sm bg-white h-100">
                            <div className="border-bottom p-4">
                                <h5  className="font-weight-bold mt-0 mb-3">Related</h5>
                            </div>
                        </div>
                    </Col>
                </Row>

                <button className="w3-button w3-black w3-padding-16"
                onClick={this.deleteHandler}>Delete</button>
                
            </Container>
            </section>
            </>
            )
        }


        return(
            postSkill
        )
    }
}

export default CookingSkillsDetail;