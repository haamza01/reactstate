import img1 from "./image1.jpg";


import React from "react";
import "./App.css";

class App extends React.Component {
  
  state = {
    todos: 
      {
        fullname: "cristiano ronaldo",
        image: img1,
        profession: "joueur de football",
        bio: "Cristiano Ronaldo a un frère, Hugo, et deux sœurs",
      },
      showprofil:false,
      in:0
      
  };
prof (){

this.setState ({

showprofil:!this.state.showprofil


})


}


componentDidMount(){

document.title='hello'
setInterval(()=>{this.setState({in:this.state.in+1})},1000

)


}





  render() {
    return (
      <div>
       {this.state.showprofil && ( <div>
        <img src={this.state.todos.image} alt="image" />
        <h1>{this.state.todos.fullname}</h1>
        <h2>{this.state.todos.profession}</h2>
        <h3>{this.state.todos.bio}</h3>
        <h1>{this.state.in}</h1>
        </div>

       )}
        <button  onClick={()=> this.prof() }> {this.state.showprofil? "hide" : "Profil"}</button>
      </div>
    );
  }
}
export default App;







