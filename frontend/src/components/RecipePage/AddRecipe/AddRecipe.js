import React, { Component } from "react";

import FoodImage from '../../../assets/images/food.jpg'
import "./AddRecipe.css";
import '../../../w3style.css'


class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: [],
      title: '',
      difficulty: '',
      body: '',
      ingredients: '',
      guide: '',
      image: null,
    };
  }
 

  fetchData(){    
    
    var url = "http://localhost:9000/recipes";
    fetch(url, {mode: "cors"})
        .then(response => response.json())
        .then(json => this.setState({recipe: json}))
        .catch(err => console.log(err))                     
  }

  componentDidMount(){
    this.fetchData();
  }
  handleChange(e) {
    e.preventDefault();
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(
      obj)
}
  onImageChange = event => {
    this.setState({
      image: window.URL.createObjectURL(event.target.files[0])
  })
  };

  saveRecipe(e){
    let formData = new FormData();
    let image = document.querySelector('#image');
    
    var url = "http://localhost:9000/recipes";
    formData.append("title", this.state.title);
    formData.append("difficulty", this.state.difficulty);
    formData.append("body", this.state.body)
    formData.append("ingredients", this.state.ingredients)
    formData.append("guide", this.state.guide)
    formData.append("image", image.files[0])
    e.preventDefault();
      fetch(url, {
        mode: 'cors',
        method: 'POST',
        // headers: {
        //   "Accept": 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'multipart/form-data',
        // },
        body: formData
      })   
      .then(() => {
        alert('create recipe successfully')
        setTimeout(this.fetchData(), 10000)

    })
    .catch(error => {
        if (error.response) {
            console.log(error.responderEnd);
        }
    });
  }
 
  // addNewRecipe = () => {
  //   this.setState({title: '', difficulty: '', body: '', ingredients: '', guide: '', image: null})
  // }

  render() {
    return (
      //Page Container
      <div className="w3-light-grey">
      <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>

        {/* The Form  */}
        <form>
            <div className="w3-row-padding">
            {/* Left Colum */}
            <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                    <div className="w3-display-container">
                        <img src={this.state.image} alt="Food" style={{width: '100%'}} />
                        <div className="w3-display-bottomleft  w3-text-white">
                          {/* Input Image */}
                            <label><b>Select Image</b></label>
                            <input type="file" name="image" id="image"
                            onChange={this.onImageChange.bind(this)} />
                        </div>                      
                    </div>
                      {/* Input title */}
                    <div className="input-section">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            autoComplete="off" required
                            value={this.state.title}
                            onChange={this.handleChange.bind(this)}
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
                                value={this.state.difficulty}
                                onChange={this.handleChange.bind(this)}>
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
                          name="body"
                          placeholder="Please Write Food Description..."
                          autoComplete="off" required
                          id="body"
                          value={this.state.body}
                          onChange={this.handleChange.bind(this)}
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
                    <button type="submit" value="submit" className="w3-button w3-black" onClick={this.saveRecipe.bind(this)}>SAVE RECIPE</button>
                  </div>
                  
            </div>

            {/* Right Colum */}
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                    <div className="textarea-section">
                          <textarea
                            type="text"
                            name="ingredients"
                            id="ingredients"
                            placeholder="Please Write Ingredients here..."
                            autoComplete="off" required
                            value={this.state.ingredients}
                            onChange={this.handleChange.bind(this)}
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
                            placeholder="Please Write The Recipe here..."
                            autoComplete="off" required
                            value={this.state.guide}
                            id="guide"
                            onChange={this.handleChange.bind(this)}
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
    );
  }
}


export default AddRecipe;
