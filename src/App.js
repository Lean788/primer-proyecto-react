import './App.css';
import React,{useState} from 'react';
// import Person from './components/Person';
// import Counter from './components/Counter';
import Counter from './components/Counter_kata2';
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
  const [showCounters, setShowCounters] = useState(true);
  const quitarCounters = () => setShowCounters(false);  
  return (
    <div className="App">
      <header className="App-header">
          {showCounters && <React.Fragment>
            <Counter initialValue={0} step={2}/>
            <Counter initialValue={10} step={5}/>
          </React.Fragment>
           }
          <button onClick={quitarCounters}>Quitar counter</button>
      </header>
    </div>
  );
}

export default App;
