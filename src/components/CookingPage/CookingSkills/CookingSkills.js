import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Button, Form} from 'react-bootstrap';
import Icofont from 'react-icofont';

import CookingSkill from '../CookingSkills/CookingSkill/CookingSkill';
import '../../../w3style.css'


const url = "http://localhost:9000/cookings";
class CookingSkills extends Component {
    state = {
        skills: [],
    }

    async fetchData(){    
        await fetch(url, {mode: "cors"})
            .then(response => response.json())
            .then(json => this.setState({skills: json}))
            .catch(err => console.log(err))                     
    }
 

    componentDidMount() {
        this.fetchData();
    }

    render () {
        let beginnerCookingSkills = <p style={{textAlign: 'center'}}>Something went wrong</p>
        let intermediateCookingSkills = <p style={{textAlign: 'center'}}>Something went wrong</p>
        let advanceCookingSkills = <p style={{textAlign: 'center'}}>Something went wrong</p>

        if(!this.state.error) {
            beginnerCookingSkills = this.state.skills
            .filter(skills => skills.difficulty === 'Beginner')
            .map(skills => {
                    return (
                        <Link to={/cookings/ + skills._id} key={skills._id}>
                            <CookingSkill 
                            key={skills._id}
                            title={skills.notice}
                             />
                        </Link>
                    )
            });
        }

        if(!this.state.error) {
            intermediateCookingSkills = this.state.skills
            .filter(skills => skills.difficulty === 'Intermediate')
            .map(skills => {
                    return (
                        <Link to={/cookings/ + skills._id} key={skills._id}>
                            <CookingSkill 
                            key={skills._id}
                            title={skills.notice}
                             />
                        </Link>
                    )
            });
        }

        if(!this.state.error) {
            advanceCookingSkills = this.state.skills
            .filter(skills => skills.difficulty === 'Advance')
            .map(skills => {
                    return (
                        <Link to={/cookings/ + skills._id} key={skills._id}>
                            <CookingSkill 
                            key={skills._id}
                            notice={skills.notice}
                             />
                        </Link>
                    )
            });
        }
        
        return(   
            <Accordion defaultActiveKey="0">
                <div className="filters-card border-bottom p-4">
					<div className="filters-card-header" id="headingOne">
						<h6 className="mb-0">
							<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="0">
								Beginner <Icofont icon='arrow-down' className='ml-auto'/>
							</Accordion.Toggle>
						</h6>
					</div>
                    <Accordion.Collapse eventKey="0">
						<div className="filters-card-body card-shop-filters">
                            {beginnerCookingSkills}
			            </div>
					</Accordion.Collapse>
                </div>

                <div className="filters-card border-bottom p-4">
					<div className="filters-card-header" id="headingTwo">
						<h6 className="mb-0">
							<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="1">
								Intermediate <Icofont icon='arrow-down' className='ml-auto'/>
							</Accordion.Toggle>
						</h6>
					</div>
                    <Accordion.Collapse eventKey="1">
						<div className="filters-card-body card-shop-filters">
                            {intermediateCookingSkills} 
			            </div>
					</Accordion.Collapse>
                </div>

                <div className="filters-card border-bottom p-4">
					<div className="filters-card-header" id="headingThree">
						<h6 className="mb-0">
							<Accordion.Toggle as={Button} size='block' variant="link" className='text-left d-flex align-items-center p-0' eventKey="2">
								Advance <Icofont icon='arrow-down' className='ml-auto'/>
							</Accordion.Toggle>
						</h6>
					</div>
                    <Accordion.Collapse eventKey="2">
						<div className="filters-card-body card-shop-filters">
                            {advanceCookingSkills}
			            </div>
					</Accordion.Collapse>
                </div>
            </Accordion>  
        )
    }
}

export default CookingSkills;