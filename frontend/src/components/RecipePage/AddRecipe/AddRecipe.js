//import axios from "axios";
import React, { Component } from "react";

import "./AddRecipe.css";

const url = "http://localhost:9000/recipes";
class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: [],
      title: '',
      body: '',
      ingredients: '',
      guide: '',
      image: null,
    };
    this.saveRecipe = this.saveRecipe.bind(this);
  }
 

  fetchData(){    
    fetch(url, {mode: "cors"})
        .then(response => response.json())
        .then(json => this.setState({recipe: json}))
        .catch(err => console.log(err))                     
  }

  componentDidMount(){
    this.fetchData();
  }

  // onImageChange = e => {
  //   e.preventDefault();    
  //   const formData = new FormData();
  //   formData.append('photo',this.state.image);
  //   fetch(url, {
  //     mode: 'cors',
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     body: JSON.stringify({
  //       image: formData
  //     })
  //   })  
  // };

  

  saveRecipe = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      'image',
      this.state.image,
      this.state.image.name
    );
    if (this.state.title !== '' | this.state.body !== '' | this.state.ingredients !== '' | this.state.guide !== ''){
      fetch(url, {
        mode: 'cors',
        method: 'post',
        // headers: {
        //     // 'Content-Type': 'application/json',
        //     // 'Accept': 'application/json'
        //     'Content-Type': 'multipart/form-data',
        //     'Accept': 'multipart/form-data'
        // },
        body: JSON.stringify({ 
          title: this.state.title, 
          body: this.state.body,
          ingredients: this.state.ingredients,
          guide: this.state.guide,
          image: formData
          
        })
  
      })
      .then(response => response.json())
      .then(json => this.fetchData(json))
      .catch(err => console.log(err))    
  
      window.location.reload()
      
    }
    else{
      return
    }
  }
 
  addNewRecipe = () => {
    this.setState({title: '', body: '', ingredients: '', guide: '', image: null})
  }

  render() {
    
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Body</label>
        <input
          type="text"
          value={this.state.body}
          onChange={(event) => this.setState({ body: event.target.value })}
        />
        <label>Ingredients</label>
        <input
          type="text"
          value={this.state.ingredients}
          onChange={(event) => this.setState({ ingredients: event.target.value })}
        />
        <label>Guide</label>
        <input
          type="text"
          value={this.state.guide}
          onChange={(event) => this.setState({ guide: event.target.value })}
        />
        <label>Select Image</label>
        <input 
          type="file" 
          name="image" 
          // onChange={this.saveRecipe}
          onChange={(event) => this.setState({ image: event.target.files[0] })}
        /> 
        <button onClick={this.saveRecipe}>Save Recipe</button>
        <button onClick={this.addNewRecipe}>Add new</button>

 
      </div>
    );
  }
}


export default AddRecipe;
