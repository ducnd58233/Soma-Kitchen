import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import TopSearch from './home/TopSearch';
import SectionHeading from './common/Heading/SectionHeading';
import FontAwesome from './common/FontAwesome/FontAwesome';
import Recipes from './RecipePage/Recipes/Recipes';
import CookingButton from './CookingPage/CookingSkillsSideDrawer/CookingButton/CookingButton'
import CookingSkillsSideDrawer from './CookingPage/CookingSkillsSideDrawer/CookingSkillsSideDrawer';


class Index extends React.Component {
	state = {
        showCookingSkills: false
    }

    cookingSkillsSideDrawerClosedHandler = () => {
        this.setState({showCookingSkills: false});
    }

    showCookingSkillsHandler = () =>{
        this.setState( (prevState) => {
            return  {showCookingSkills: !prevState.showCookingSkills}
        })
     }


	render() {
    	return (
    		<><Header />
    			<TopSearch />
				<section className="section pt-5 pb-5 banner-bg">
					<Container>
					<img class="banner" src="./img/banner.jpg" ></img>
					</Container>
				</section>
				<section className="section pt-5 pb-5 bg-gray homepage-add-section">
					<Container>
					    <div style={{paddingBottom: 30}}>
							<CookingButton clicked={this.showCookingSkillsHandler}/>
							<CookingSkillsSideDrawer  
							open={this.state.showCookingSkills}
							closed={this.cookingSkillsSideDrawerClosedHandler}/>
                		</div>
						<Row>
						   <Recipes/>
						</Row>
					</Container>
				</section>
			    <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
			         <Container>
			         	<SectionHeading 
			         		heading='Become a Member'
			         		subHeading='A community of great creative recipes of food'
			         	/>
			            <Row>
			               <Col sm={12} className="text-center">
			                  <Link to="register" className="btn btn-success btn-lg">
			                  	Create an Account <FontAwesome icon='chevron-circle-right' />
			                  </Link>
			               </Col>
			            </Row>
			         </Container>
			    </section>
				<Footer/>
    		</>
    	);
    }
}


const options={
	responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000: {
          items: 4,
        },
        1200: {
          items: 4,
        },
      },

        lazyLoad: true,
        pagination: false.toString(),
        loop: true,
        dots: false,
        autoPlay: 2000,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
}




export default Index;