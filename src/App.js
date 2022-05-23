import './App.css';
import React from 'react';
import Person from './components/Person';
import Counter from './components/Counter';
import Counter_kata from './components/Counter_kata';
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
          <Counter_kata initialValue={0} step={2}/>
          <Counter_kata initialValue={10} step={5}/>
        
      </header>
    </div>
  );
}

export default App;
