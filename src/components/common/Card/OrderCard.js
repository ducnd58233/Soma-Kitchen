import React from 'react';
import PropTypes from 'prop-types'; 
import {Link } from 'react-router-dom';
import {Image,Media} from 'react-bootstrap';
import Icofont from 'react-icofont';

class OrderCard extends React.Component {

	render() {
    	return (
	      <div className="bg-white card mb-4 order-list shadow-sm">
	          <div className="gold-members p-4">
	                <Media>
	                   <Image className="mr-4" src={this.props.image} alt={this.props.imageAlt} />
	                   <Media.Body>
	                   		
	                      <h6 className="mb-2">
	                      	<Link to={this.props.detailLink}  className="text-black">{this.props.orderTitle} </Link>
	                      </h6>
	                      <p className="text-gray mb-1">
	                      	<Icofont icon="location-arrow" /> {this.props.address} 
	                      </p>            
	                      <hr />
	                      <div className="float-right">
		                      <Link className="btn btn-sm btn-outline-primary mr-1" to={this.props.helpLink}><Icofont icon="chat" /> Inbox</Link>
		                      <Link className="btn btn-sm btn-primary" to={this.props.detailLink}><Icofont icon="phone" /> Contact</Link>
	                      </div>
	                    
	                   </Media.Body>
	                </Media>
	          </div>
	       </div>
    	);
    }
}

OrderCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  orderNumber: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  deliveredDate: PropTypes.string,
  orderTitle: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  orderProducts: PropTypes.string.isRequired,
  helpLink: PropTypes.string.isRequired,
  detailLink: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
};
export default OrderCard;