import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/Person';
// const Saluda =  props => {
//   console.log(props);
//   return <h3>Hola {props.name} </h3>
// };

// class Saluda extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     console.log(this.props);
//     return <h3>Hola {this.props.name} </h3>
//   }
// };


function App() {
  // const hola = <h2>Hola mundo React</h2>;
  return (
    <div className="App">
      <header className="App-header">
        <Person name="David" surname="Pinilla" age={27} />        
        <Person name="Juan" surname="Perez" age={127} />        
        <Person name="David" surname="Ochando" age={97} />        
        
      </header>
    </div>
  );
}

export default App;
