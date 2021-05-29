import React, { Component } from "react";
import '../AddVideoPage/AddVideoPage.css';
import PageTitle from "../../common/Title/PageTitle";

class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      cookingSkills: [],
      notice: '',
      difficulty: '',
      description: '',
      video: '',
    };
  }
 

  fetchData(){    
    
    var url = "http://localhost:9000/cookings";
    fetch(url, {mode: "cors"})
        .then(response => response.json())
        .then(json => this.setState({cookingSkills: json}))
        .catch(err => console.log(err))                     
  }

  componentDidMount(){
    this.fetchData();
  }

  handleChange(e) {
    e.preventDefault();
    var obj = {}
    obj[e.target.name] = e.target.value
    this.setState(obj)
}

  saveCookingSkills(){
      
    
    // formData.append("notice", this.state.notice);
    // formData.append("difficulty", this.state.difficulty);
    // formData.append("description", this.state.discription)
    // formData.append("video", this.state.video)
  
    // e.preventDefault();
      fetch('http://localhost:9000/cookings', {
        mode: 'cors',
        method: 'POST',
        headers: {
          "Accept": 'application/json',
        //   'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            notice: this.state.notice,
            difficulty: this.state.difficulty,
            description: this.state.description,
            video: this.state.video
        })
      })   
      .then(() => {
        alert('create cooking successfully')
        setTimeout(this.fetchData(), 10000)
        window.location.reload()


    })
  }
 
  render() {
    return (
    <>
        <PageTitle 
                   title='Add a new Cooking skill'
                   
                /> 
        {/* //Page Container */}
        <div className="body">
            <div className="w3-content w3-margin-top" style={{maxWidth:1400}}>

                {/* The Form  */}
                <div className="wrapper">
                    <form >

                        {/* Input Video Title */}
                        <div className="input-section">
                        
                            <input
                            type="text"
                            name="notice"
                            id="notice"
                            autoComplete="off" 
                            required
                            value={this.state.notice}
                            onChange={this.handleChange.bind(this)}
                            />

                            <label className="label-name">
                                <span className="content-name">
                                    Title
                                </span>
                            </label>
                        </div>

                        <center><p>___________________________</p></center>

                        {/* Input Video URL */}
                        <div className="input-section">
                            
                            <input
                            type="text"
                            name="video"
                            id="video"
                            autoComplete="off" 
                            required
                            value={this.state.video}
                            onChange={this.handleChange.bind(this)}
                            />

                            <label className="label-name">
                                <span className="content-name">
                                    URL (* Youtube URL Recommended)
                                </span>
                            </label>
                        </div>

                        <center><p>___________________________</p></center>

                        {/* Input the Difficulty */}
                        <div>
                            <div>
                                <label className="col-30" style={{color: "white"}}>
                                    Level of Difficulty
                                </label>

                                <select  id="difficulty" name="difficulty" 
                                className="col-70"
                                required
                                value={this.state.difficulty}
                                onChange={this.handleChange.bind(this)}>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advance</option>
                                </select>
                            </div>
                        </div>                    
                        
                        {/* Input Video Description */}
                        <div  className="textarea-section">
                        
                            <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Please Write Description..."
                            autoComplete="off"
                            required
                            value={this.state.description}
                            onChange={this.handleChange.bind(this)}
                            />

                             <label className="label-name">
                                <span className="content-name">
                                    Description
                                </span>
                            </label>
                        </div>

                        <div className="w3-padding-16">
                            <button type="submit" value="submit" className="w3-button w3-black" onClick={this.saveCookingSkills.bind(this)}>Save Cooking Skill</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>
    )
  }
}


export default AddRecipe;
