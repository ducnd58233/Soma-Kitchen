import React from 'react';
import {Row,Container} from 'react-bootstrap';

import TopSearch from '../home/TopSearch';
import Recipes from '../RecipePage/Recipes/Recipes';
import SectionHeading from '../common/Heading/SectionHeading';
import CookingButton from '../CookingPage/CookingSkillsSideDrawer/CookingButton/CookingButton';
import CookingSkillsSideDrawer from '../CookingPage/CookingSkillsSideDrawer/CookingSkillsSideDrawer';

class Homepage extends React.Component {
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
    		<>
    			<TopSearch />
				<section className="section pt-5 pb-5 banner-bg">
					<Container>
					<img className="banner" src="./img/banner.jpg" ></img>
					</Container>
					
				</section>

			    <section className="section pt-5 pb-5 products-section">
			         <Container>
					  <SectionHeading 
			         		heading='Popular Recipes'
			         		subHeading='Top food, drinks and dessert recipes in Vietnam, based on trends'
			         	/>
					 	<div style={{paddingBottom: 30}}>
							<CookingButton clicked={this.showCookingSkillsHandler}/>
							<CookingSkillsSideDrawer  
							open={this.state.showCookingSkills}
							closed={this.cookingSkillsSideDrawerClosedHandler}/>
                		</div>
			            <Row>    	  
			                <Recipes />
			            </Row>
			         </Container>
			    </section>
			

    		</>
    	);
    }
}


export default Homepage;