import './App.css';
import React from 'react';
import UserForm from './components/userForm/UserForm.jsx';
// import Person from './components/Person';
// import Counter from './components/Counter';
// import Counter from './components/Counter_kata2';
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
  return (
    <div className="App">
      <header className="App-header">
          <UserForm/>
      </header>
    </div>
  );
}

export default App;
