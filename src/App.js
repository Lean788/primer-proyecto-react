import './App.css';
import React from 'react';
import Person from './components/Person';
import Counter from './components/Counter';
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
          <Counter />
        
      </header>
    </div>
  );
}

export default App;
