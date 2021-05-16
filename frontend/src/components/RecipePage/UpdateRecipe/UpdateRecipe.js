import React, { Component } from 'react';

import FoodImage from '../../../assets/images/steak.jpg';
import '../../../../src/w3style.css';
import '../UpdateRecipe/UpdateRecipe.css'

const url = "http://localhost:9000" 

class UpdateRecipe extends Component {

        constructor(props){
            super(props)
            this.state = {
                recipe: null,
                title: '',
                difficulty: '',
                body: '',
                ingredients: '',
                guide: '',
                image: null,
            }
        }
    
    async fetchData(){    
        await fetch(url + "/recipes/" + this.props.match.params.id , {mode: "cors"})
            .then(response => response.json())
            .then(json=> this.setState({ recipe: json}))
            .catch(err => console.log(err))                     
        }

    componentDidMount() {
        if(this.props.match.params.id){
            if( !this.state.recipe || (this.state.recipe && this.state.recipe._id !== this.props.match.params.id) ){
                try{
                    this.fetchData()
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
        }
    }
        
        
    updateHandler = () => {
        fetch(url + "/recipes/" + this.props.match.params.id, {
            mode: 'cors',
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
              title: this.state.title,
              difficulty: this.state.difficulty, 
              body: this.state.body,
              ingredients: this.state.ingredients,
              guide: this.state.guide,
            })
      
          })
          .then(response => response.json())
          .then(json => this.fetchData())
          .catch(err => console.log(err))    
    }
 
    myFunction = () => {
        if(this.state.title === '' && this.state.body === '' && this.state.ingredients === '' && this.state.guide === ''){
            this.setState({
                title: this.state.recipe.title,
                body: this.state.recipe.body,
                ingredients: this.state.recipe.ingredients,
                guide: this.state.recipe.guide,
            })
        }    
    }

    render () {
        let updateSection = null

        if (this.state.recipe){
            updateSection = (
                <div className="w3-light-grey" onClick={this.myFunction}>
                
                    <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>

                        {/* The Form  */}
                        <form>
                            <div className="w3-row-padding">
                            {/* Left Colum */}
                            <div className="w3-third">
                                <div className="w3-white w3-text-grey w3-card-4">
                                    <div className="w3-display-container">
                                        <img src={FoodImage} alt="Food" style={{width: '100%'}} />
                                        <div className="w3-display-bottomleft  w3-text-white">
                                        {/* Input Image */}
                                            <label><b>Select Image</b></label>
                                            <input type="file" name="photo" onChange={(event) => this.setState({ image: event.files.name })} />
                                        </div>                      
                                    </div>
                                    {/* Input title */}
                                    <div className="input-section">
                                        <input
                                            type="text"
                                            name="foodname"
                                            autoComplete="off" required
                                            value={this.state.title}
                                            onChange={(event) => this.setState({ title: event.target.value })}
                                            />

                                            <label className="label-name">
                                            <span className="content-name">
                                                Food Name
                                            </span>
                                            </label>
                                    </div>  
                                    <div className="w3-container w3-padding">
                                            <div className="col-40">
                                                <label >
                                                Level of Difficulty
                                                </label>
                                            </div>
                                            <div className="col-60">
                                                <select  id="difficulty" name="difficulty" 
                                                onChange={(event) => this.setState({ difficulty: event.target.value })}>
                                                    <option>Beginner</option>
                                                    <option>Intermediate</option>
                                                    <option>Advance</option>
                                                </select>
                                            </div>
                                        </div>
                                </div>

                                <div className=" w3-container w3-card w3-white w3-margin-top">
                                    <div className="textarea-section">
                                        <textarea
                                        type="text"
                                        name="description"
                                        placeholder={this.state.recipe.body}
                                        autoComplete="off" 
                                        required
                                        value={this.state.body}
                                        onChange={(event) => this.setState({ body : event.target.value })}
                                        />
                                        <label  className="label-name">    
                                            <span className="content-name">
                                            <i className="fa fa-pencil-square-o w3-padding"></i>
                                            Description
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="w3-padding-16">
                                    <button type="submit" value="submit" className="w3-button w3-black" onClick={this.updateHandler}>SAVE UPDATE</button>
                                </div>
                                
                            </div>

                            {/* Right Colum */}
                            <div className="w3-twothird">
                                <div className="w3-container w3-card w3-white w3-margin-bottom">
                                    <div className="textarea-section">
                                        <textarea
                                            type="text"
                                            name="ingredients"
                                            placeholder={this.state.recipe.ingredients}
                                            autoComplete="off"
                                            required
                                            value={this.state.ingredients}
                                            onChange={(event) => this.setState({ ingredients : event.target.value })}
                                            />
                                        <label className="label-name" >    
                                            <span className="content-name">
                                                <i className="fa fa-shopping-basket w3-padding"></i>
                                                Ingredients
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="w3-container w3-card w3-white w3-margin-bottom">
                                    <div className="textarea-section" style={{height: 500}}>
                                        <textarea
                                            type="text"
                                            name="guide"
                                            placeholder={this.state.recipe.guide}
                                            autoComplete="off" 
                                            required
                                            value={this.state.guide}
                                            onChange={(event) => this.setState({ guide : event.target.value })}
                                            />
                                        <label  className="label-name" style={{bottom:'90%'}}>    
                                            <span className="content-name">
                                                <i className="fa fa-glass w3-padding"></i>
                                                Recipe 
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            )
        }
        return (
            updateSection
        )
    }
}

export default UpdateRecipe;