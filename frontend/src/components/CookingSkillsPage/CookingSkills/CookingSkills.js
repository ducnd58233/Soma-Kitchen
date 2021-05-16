import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CookingSkill from '../CookingSkills/CookingSkill/CookingSkill';
import '../../../../src/w3style.css'

const url = "http://localhost:9000/cookings";
class CookingSkills extends Component {
    state = {
        skills: [],
        openSKill1: false
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
        let cookingSkills = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            cookingSkills = this.state.skills.map(skills => {
                return (
                    <Link to={/cookings/ + skills._id} key={skills._id}>
                        <CookingSkill 
                        key={skills._id}
                        title={skills.title}
                         />
                    </Link>
                )
            });
        }
        
        let beginnerSkills = null

        if (this.state.openSkill1 == true){
            beginnerSkills = (
                <div>
                    <p>Hello World</p>
                </div>
        )
        }
        return(   
            <div>
                <button  
                onClick={() => this.setState({openSKill1: true})}
                className="w3-button w3-block w3-white w3-left-align" id="myBtn">
                    Beginner <i className="fa fa-caret-down"></i>
                </button>
                {beginnerSkills}
            </div>  
        )
    }
}

export default CookingSkills;