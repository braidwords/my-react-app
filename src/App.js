import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';

class App extends Component{

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
