import React, { Component } from 'react';
//import axios from 'axios';

import './RecipeDetail.css';

const url = "http://localhost:9000/recipes" 

class RecipeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          loadedPost: null,
          _id: '',
          title: '',
          body: '',
          ingredients: '',
          guide: '',
          image: null,
          isUpdate: false
        };
      }
  
    async fetchData(){    
        
        await fetch(url + "/" + this.props.id , {mode: "cors"})
            .then(response => response.json())
            .then(json=>this.setState({ loadedPost: json }))
            .catch(err => console.log(err))                     
        }

    componentDidUpdate() {
        if(this.props.id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost._id !== this.props.id) ){
                try{
                    this.fetchData()
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
        }
    }

    deleteHandler = () => {
        if(confirm('Do you want to delete?')){
            fetch(url + "/" + this.props.id, {
                method: 'delete',
            }).then(res => res.json())
            .then(json => this.fetchData(json))
            .catch(err => console.log(err))
           
        }
    }

    updateHandler = () => {
        fetch(url + "/" + this.props.id, {
            mode: 'cors',
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                _id: this.state._id,
              title: this.state.title, 
              body: this.state.body,
              ingredients: this.state.ingredients,
              guide: this.state.guide,
              
            })
      
          })
          .then(response => response.json())
          .then(json => this.fetchData(json))
          .catch(err => console.log(err))    
    }
 

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        let updateSection = null;

        if(this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if(this.state.isUpdate){
            updateSection = (
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
                    {/* <label>Select Image</label>
                    <input type="file" name="myImage" onChange={this.onImageChange} /> */}
                    <button onClick={this.updateHandler}>Save Update</button>
            </div>
           );
        }

        if (this.state.loadedPost){
            post = (
                <div className="RecipeDetail">
                    <h1>{this.state.loadedPost.title}</h1>
                    <div>{this.state.loadedPost.body}</div>
                    <div>{this.state.loadedPost.ingredients}</div>
                    <div>{this.state.loadedPost.guide}</div>
                    {/* <image src={this.state.loadedPost.image}/> */}
                    <div className="Edit">
                        <button className="Delete"
                        onClick={this.deleteHandler}>Delete</button>
                    </div>
                    <div className="Edit">
                        <button 
                        onClick={() => {this.setState({
                            isUpdate: true,
                            _id: this.state.loadedPost._id,
                            title: this.state.loadedPost.title,
                            body: this.state.loadedPost.body,
                            ingredients: this.state.loadedPost.ingredients,
                            guide: this.state.loadedPost.guide,
                            // image: this.state.loadedPost.image
                        })}}>Update</button>
                    </div>
                    {updateSection}
                </div>
            );
        }

        return (
            post
        )
    }
}

export default RecipeDetail;