import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';

class App extends Component{

  state = {
    isLoading:true,
    apartments: [],
    error: null
  }

  fetchApartments(){
    fetch(`/apartment`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ apartments: data })
    })
    //.catch(console.log)
  }
  componentDidMount() {
    this.fetchApartments();
  }


  render()
  {

  return ( 
    <div className= "App">
      <header className="App-header">
        <img src={"./kasazlogo.png"} className="App-logo" alt="kasaz logo" />
      </header>
      <NavBar />
      </div>
  );
}
}
export default App;
