import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {NavLink,Link } from 'react-router-dom';
import {Row,Col,Container,Image} from 'react-bootstrap';
import Affiliate from './Affiliate ';
import Favourites from './Favourites';

import EditProfileModal from '../modals/EditProfileModal';

class MyAccount extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showEditProfile: false
    };
  }
  hideEditProfile = () => this.setState({ showEditProfile: false });

	render() {
    	return (
    		<>
        <EditProfileModal show={this.state.showEditProfile} onHide={this.hideEditProfile}/>
        <section className="section pt-4 pb-4 osahan-account-page">
           <Container>
              <Row>
                 <Col md={3}>
                    <div className="osahan-account-page-left shadow-sm bg-white h-100">
                       <div className="border-bottom p-4">
                          <div className="osahan-user text-center">
                             <div className="osahan-user-media">
                                <Image className="mb-3 rounded-pill shadow-sm mt-1" src="/img/banh.jpg" alt="gurdeep singh osahan" />
                                <div className="osahan-user-media-body">
                                   <h6 className="mb-2">Roy Nguyen</h6>
                                   <p className="mb-1">0985517099</p>
                                   <p>pct881435@gmail.com</p>
                                   <p className="mb-0 text-black font-weight-bold"><Link to='#' onClick={() => this.setState({ showEditProfile: true })} className="text-primary mr-3"><i className="icofont-ui-edit"></i> EDIT</Link></p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <ul className="nav flex-column border-0 pt-4 pl-4 pb-4">
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/affiliate"><i className="icofont-food-cart"></i> Affiliate </NavLink>
                          </li>
                          <li className="nav-item">
                             <NavLink className="nav-link" activeClassName="active" exact to="/myaccount/favourites"><i className="icofont-heart"></i> My Recipes</NavLink>
                          </li>
                       </ul>
                    </div>
                 </Col>
                 <Col md={9}>
                  <Switch>
                    <Route path="/myaccount/affiliate" exact component={Affiliate} />
                    <Route path="/myaccount/favourites" exact component={Favourites} />
                  </Switch>
                 </Col>
              </Row>
           </Container>
        </section>
    		</>
    	);
    }
}


export default MyAccount;